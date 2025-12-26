import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Banknote, UserCircle, LogOut } from 'lucide-react';
import { clsx } from 'clsx';
import './Layout.css';

export const Sidebar: React.FC = () => {
    const navItems = [
        { label: 'Dashboard', path: '/', icon: LayoutDashboard },
        { label: 'Miembros', path: '/members', icon: Users },
        { label: 'Préstamos', path: '/loans', icon: Banknote },
        { label: 'Mi Cuenta', path: '/profile', icon: UserCircle },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <Banknote className="text-primary" /> {/* Reuse icon as logo for now */}
                    <span>Perseo Fund</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx('nav-item', isActive && 'active')}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="nav-item" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <LogOut size={20} />
                    <span>Cerrar Sesión</span>
                </button>
            </div>
        </aside>
    );
};
