import {BaseBridgeOption} from "@/internal/types/bridgeOptions";

type ProxyMethods<X> = {
    get: () => X,
    set: (val: X) => boolean
}

type ProxiedProps<X> = {
    [key in keyof X]: ProxyMethods<X[key]>;
};

export function OptionProxy<X>(obj: BaseBridgeOption<X>): BaseBridgeOption<X> {
    return MultiProxyProp<typeof obj>(obj, {
        "*": {
            get: (): X => ({} as X),
            set: (val: X): boolean => true
        } as ProxyMethods<X>,
        supported: {
            get: (): boolean => ({} as boolean),
            set: (val: boolean): boolean => true
        } as ProxyMethods<boolean>,
        readonly: {
            get: (): boolean => ({} as boolean),
            set: (val: boolean): boolean => true
        } as ProxyMethods<boolean>,
    } as ProxiedProps<typeof obj>);
}

export function MultiProxyProp<X extends object>(obj: X, all: ProxiedProps<X>) {
    const keyToAbs = (key: string): number => {
        // sort "*" to the end of the list since it is a wildcard
        if (key === "*") return 0;
        return -1;
    }

    const keys = Object.keys(all).sort((a, b) => keyToAbs(a) - keyToAbs(b))
    let pObj = obj;
    for (const key of keys) {
        const {get, set} = all[key as keyof X];
        pObj = ProxyProp(pObj, key as keyof X, get, set);
    }
    return pObj;
}

export function ProxyProp<X extends object>(obj: X, propName: keyof X | "*", get: () => X, set: (val: X) => boolean) {
    const match = (prop: keyof X, propName: keyof X | "*") => {
        if (propName === "*") return true;
        return prop === propName
    };

    return new Proxy(obj, {
        get: (obj, prop) => {
            if (match(prop as keyof X, propName)) {
                return get();
            }
            return obj[prop as keyof X];
        },
        set: (obj, prop, val) => {
            if (match(prop as keyof X, propName)) {
                return set(val);
            }
            return (obj[prop as keyof X] = val) as boolean;
        }
    })
}

