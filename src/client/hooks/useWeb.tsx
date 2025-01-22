import {useAppBridge} from "@/client/hooks/useAppBridge";

export function useWeb() {
    return useAppBridge().web;
}