import {createContext, ReactNode} from "react";
import {AppBridgeState} from "@/internal/types";

export const AppBridgeContext = createContext<AppBridgeState>({} as AppBridgeState);

export function AppBridgeProvider({children}: {children: ReactNode}) {



    return (
        <AppBridgeContext.Provider value={{} as AppBridgeState}>
            {children}
        </AppBridgeContext.Provider>
    );
}