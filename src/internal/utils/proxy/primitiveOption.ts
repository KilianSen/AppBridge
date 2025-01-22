import {BaseBridgeOption, BridgeOption} from "@/internal/types/bridgeOptions";

export function PrimitiveOption<X>(opt?: BaseBridgeOption<X>): BridgeOption<X> {
    // Creates a proxy object that behaves like a primitive value with additional properties outlined in BridgeOption

    // if obj.supported is requested, return obj.supported
    // if obj.readonly is requested, return obj.readonly
    // if any other prop is requested, return obj.value
    // if obj is set, set obj.value if obj.readonly is not set
    // if obj.supported is set, set obj.supported
    // if obj.readonly is set, set obj.readonly

    return new Proxy((opt || {}) as BridgeOption<X> & X, {
        get: (obj, prop) => {
            if (prop === "supported") return obj.supported;
            if (prop === "readonly") return obj.readonly;
            return obj.value;
        },
        set: (obj, prop, val) => {
            if (prop === "supported") {
                obj.supported = val;
                return true;
            }
            if (prop === "readonly") {
                obj.readonly = val;
                return true;
            }
            if (!obj.readonly) {
                obj.value = val;
            }
            return true;
        }
    })
}

