import React from "react";

export const MenuContext = React.createContext();

export function MenuProvider({ children }) {

    const [transform, setTransform] = React.useState(-100);


    return (
        <MenuContext.Provider value={{transform, setTransform}}>
            {children}
        </MenuContext.Provider>
    )
}

