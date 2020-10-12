import { useContext, createContext } from "react";

export const UserContext = createContext( { currentUser : null} );
export function useAppContext() {
    return useContext(UserContext);
}