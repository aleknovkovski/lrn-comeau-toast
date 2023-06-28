import React from "react";

export const ToastsContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  function handleToastClose(id) {
    const newToasts = toasts.filter((item) => item.id !== id);
    setToasts(newToasts);
  }
  return <ToastsContext.Provider value={{toasts, setToasts, handleToastClose}}>
    {children}
  </ToastsContext.Provider>;
}

export default ToastProvider;
