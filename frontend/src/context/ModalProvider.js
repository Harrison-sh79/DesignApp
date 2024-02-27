import { createContext, useState } from "react";

const ModalContext = createContext();

export default ModalContext;

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalVisible, setModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
};
