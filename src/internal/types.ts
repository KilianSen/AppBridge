import { BridgeOption } from "@/internal/types/bridgeOptions";


export type WebState = {
    is: boolean

    title: BridgeOption<string>
    icon: BridgeOption<string>
}

export type DesktopState = {
    is: boolean

    title: BridgeOption<string>
    icon: BridgeOption<string>

    close: BridgeOption<() => void>
    minimize: BridgeOption<() => void>
    maximize: BridgeOption<() => void>

    size: BridgeOption<{width: number, height: number}>
    position: BridgeOption<{x: number, y: number}>

    isMaximized: BridgeOption<boolean>
    isMinimized: BridgeOption<boolean>
}


export type AppBridgeState = {
    web: WebState
    desktop: DesktopState
}