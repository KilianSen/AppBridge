import {AppBridgeState} from "@/internal/types";

const Title = {
    get: () => document.title,
    set: (title: string) => document.title = title
}

const Favicon = {
    get: () => {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        return link ? link.href: undefined;
    },
    set: (icon: string) => {
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (!link) {
            const link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }
        link.href = icon;
    }
}

const defaultWebState: AppBridgeState["web"] = {
    is: true,
    title: {
        value: new Proxy({}, {
            get: () => document.title.valueOf(),
            set: (obj, prop, val) => document.title = val
        }) as string,
        supported: true
    },
    icon: {
        value: new Proxy({}, {
            get: () => Favicon.get(),
            set: (obj, prop, val) => Favicon.set(val)
        }) as string,
        supported: true
    }
}