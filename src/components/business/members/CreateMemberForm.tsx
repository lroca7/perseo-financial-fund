import React, { useState } from 'react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { memberService } from '../../../services/memberService';
import { type UserRole, type MemberStatus, type Member } from '../../../services/types';
import './CreateMemberForm.css';

interface CreateMemberFormProps {
    onSuccess: () => void;
    onCancel: () => void;
}

export const CreateMemberForm: React.FC<CreateMemberFormProps> = ({ onSuccess, onCancel }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'MEMBER' as UserRole,
        status: 'ACTIVE' as MemberStatus
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await memberService.create({
                name: formData.name,
                email: formData.email,
                role: formData.role,
                status: formData.status
            } as Omit<Member, 'id' | 'joinedAt' | 'totalContributed' | 'activeLoans'>);
            onSuccess();
        } catch (error) {
            console.error('Failed to create member', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-member-form">
            <Input
                label="Nombre Completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                placeholder="Ej. Juan Pérez"
            />

            <Input
                label="Correo Electrónico"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                placeholder="juan@ejemplo.com"
            />

            <div className="form-row">
                <div className="input-container input-full-width">
                    <label className="input-label">Rol</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="input-field"
                    >
                        <option value="MEMBER">Socio</option>
                        <option value="ADMIN">Tesorero / Admin</option>
                    </select>
                </div>

                <div className="input-container input-full-width">
                    <label className="input-label">Estado</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="input-field"
                    >
                        <option value="ACTIVE">Activo</option>
                        <option value="INACTIVE">Inactivo</option>
                    </select>
                </div>
            </div>

            <div className="form-actions">
                <Button type="button" variant="ghost" onClick={onCancel} disabled={isLoading}>
                    Cancelar
                </Button>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Guardando...' : 'Crear Miembro'}
                </Button>
            </div>
        </form>
    );
};
