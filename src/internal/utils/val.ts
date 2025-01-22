export function valWithSetter<T>(val?: T) {
    return {
        value: val as T,
        set: (v: T) => val = v
    }
}

export function valWithGetter<T>(val?: T) {
    return {
        value: val as T,
        get: () => val
    }
}

export function valWithGetterSetter<T>(val?: T) {
    return {
        value: val as T,
        get: () => val,
        set: (v: T) => val = v
    }
}

