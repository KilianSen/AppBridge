import {useAppBridge} from "@/client/hooks/useAppBridge";

export function useDesktop() {
    return useAppBridge().desktop
}