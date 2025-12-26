import React, { type InputHTMLAttributes } from 'react';
import './Input.css';
import { clsx } from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className,
    fullWidth = false,
    id,
    ...props
}) => {
    const inputId = id || props.name;

    return (
        <div className={clsx('input-container', fullWidth && 'input-full-width', className)}>
            {label && <label htmlFor={inputId} className="input-label">{label}</label>}
            <input
                id={inputId}
                className={clsx('input-field', error && 'input-error')}
                {...props}
            />
            {error && <span className="input-error-message">{error}</span>}
        </div>
    );
};
