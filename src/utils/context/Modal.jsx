import React, { createContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [modaldata, setModaldata] = useState()

    const toggleModal = (payload) => {
        setShowModal(!showModal);
        setModaldata(payload)
    };

    return (
        <ModalContext.Provider value={{ showModal, toggleModal, modaldata }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext
