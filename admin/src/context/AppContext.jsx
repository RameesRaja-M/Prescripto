import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const value = {

    }

    return (
        <AppContext.Provider key={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider