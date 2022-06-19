import React from 'react';
import styles from './styles/Toast.module.css';

export const Toast = () => {
    return (
        <div className={styles.toastContainer}>
            <span>This is a toast</span>
        </div>
    )
}
