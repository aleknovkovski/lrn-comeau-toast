import React from "react";

export const ToastsContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  function handleToastClose(id) {
    const newToasts = toasts.filter((item) => item.id !== id);
    setToasts(newToasts);
  }

  function createNewToast(message, variant) {
    const newToasts = [...toasts, {message, variant, id: Date.now()}];
    setToasts(newToasts);
  }

  return <ToastsContext.Provider value={{toasts, handleToastClose, createNewToast}}>
    {children}
  </ToastsContext.Provider>;
}

export default ToastProvider;
