import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
   

    setModal(!modal);

  };

  return (
    <AppContext.Provider value={{ modal, toggleModal }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
