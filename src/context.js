import React from "react";

export const LoginContext = React.createContext();

export const LoginProvider = ({children}) => {
    const [loginToggle, setLoginToggle] = React.useState(false);

    return (
        <LoginContext.Provider value={{loginToggle, setLoginToggle}}>
            {children}
        </LoginContext.Provider>
    )
}