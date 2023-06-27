import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts}) {

  return (
    <ol className={styles.wrapper}>
        {toasts.map((item) => (
            <Toast variant={item.variant} >
                {item.message}
            </Toast>
        ))}
    </ol>
  );
}

export default ToastShelf;
