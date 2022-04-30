import { createContext, useState } from 'react';

export const ModalContext = createContext({
  open: false,
  modalOpen: () => {},
  modalClose: () => {},
});

const ModalProvider = children => {
  const [open, setOpen] = useState(true);

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, modalOpen, modalClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
