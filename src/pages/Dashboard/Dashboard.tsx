import React from 'react';
import { Card } from '../../components/ui/Card';

export const Dashboard: React.FC = () => {
    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <h1>Dashboard Principal</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                <Card>
                    <h3>Capital Total</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>$0.00</p>
                </Card>
                <Card>
                    <h3>Préstamos Activos</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-warning)' }}>0</p>
                </Card>
                <Card>
                    <h3>Miembros</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>0</p>
                </Card>
            </div>
        </div>
    );
};
