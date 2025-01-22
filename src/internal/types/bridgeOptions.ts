export type BaseBridgeOption<X> = {
    supported: boolean,
    value?: X
    readonly?: boolean
}

export type BridgeOption<X> = BaseBridgeOption<X> & X

