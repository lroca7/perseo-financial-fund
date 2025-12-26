import React, { type HTMLAttributes } from 'react';
import './Card.css';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    noPadding = false,
    ...props
}) => {
    return (
        <div
            className={clsx('card', noPadding && 'card-no-padding', className)}
            {...props}
        >
            {children}
        </div>
    );
};
