import {useContext} from "react";
import {AppBridgeState} from "@/internal/types";
import {AppBridgeContext} from "@/client/BridgeContext";

export function useAppBridge() {
    return useContext<AppBridgeState>(AppBridgeContext);
}