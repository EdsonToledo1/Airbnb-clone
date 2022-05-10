import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <Context.Provider
      value={{
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
