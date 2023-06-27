import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
    const [Toasts, setToasts] = React.useState([{message: 'Example notice toast', variant: 'notice'}, {message: 'Example error toast', variant: 'error'}]);

  return (
    <ol className={styles.wrapper}>
        {Toasts.map((item) => (
            <Toast variant={item.variant}
                   handleToastClose={() => setToasts(Toasts.filter((toast) => toast !== item))}>
                {item.message}
            </Toast>
        ))}
    </ol>
  );
}

export default ToastShelf;
