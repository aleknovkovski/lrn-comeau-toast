import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleToastClose}) {

  return (
    <ol className={styles.wrapper}>
        {toasts.map((item) => (
            <Toast variant={item.variant} handleToastClose={handleToastClose} itemId={item.id} key={item.id}>
                {item.message}
            </Toast>
        ))}
    </ol>
  );
}

export default ToastShelf;
