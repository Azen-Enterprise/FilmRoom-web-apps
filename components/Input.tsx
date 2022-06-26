import React, { FC } from 'react';
import Image from 'next/image';

import styles from './styles/Input.module.css';
import PersonIcon from './../assets/person-icon.svg';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

type InputProps = {
    placeholderText: string;
    showIcon: boolean;
    type?: string;
    icon?: string;
    value?: string;
    onChange?: (event: InputEvent) => void;
}

const Input: FC<InputProps> = ({ placeholderText, showIcon, type, icon, value, onChange }) => {
    const inputType = type || 'text';
    return (
        <div className={styles.inputContainer}>
            {showIcon && 
                <div className={styles.iconWrapper}>
                    <Image 
                        className={styles.icon} 
                        src={icon || PersonIcon} 
                        alt="input form icon" 
                        width="30"
                        height="30"
                    />
                </div>
            }
            <input type={inputType} value={value} onChange={onChange} className={styles.input} placeholder={placeholderText} /> 
        </div>
    )
}

export default Input;
