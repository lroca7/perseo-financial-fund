import React, { useEffect, useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { memberService } from '../../services/memberService';
import { type Member } from '../../services/types';
import { Plus } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';
import { CreateMemberForm } from '../../components/business/members/CreateMemberForm';
import './Members.css';

export const Members: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    useEffect(() => {
        loadMembers();
    }, []);

    const loadMembers = async () => {
        try {
            const data = await memberService.getAll();
            setMembers(data);
        } catch (error) {
            console.error('Failed to load members', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="members-header">
                <h1>Gestión de Miembros</h1>
                <Button size="md" onClick={() => setIsCreateModalOpen(true)}>
                    <Plus size={18} />
                    Nuevo Miembro
                </Button>
            </div>

            <Card noPadding className="table-container">
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando miembros...</div>
                ) : (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Aportado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member) => (
                                <tr key={member.id}>
                                    <td>
                                        <div style={{ fontWeight: 500 }}>{member.name}</div>
                                    </td>
                                    <td>{member.email}</td>
                                    <td>{member.role === 'ADMIN' ? 'Tesorero' : 'Socio'}</td>
                                    <td>
                                        <span className={`status-badge ${member.status === 'ACTIVE' ? 'status-active' : 'status-inactive'}`}>
                                            {member.status === 'ACTIVE' ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </td>
                                    <td>${member.totalContributed.toLocaleString()}</td>
                                    <td>
                                        <Button variant="ghost" size="sm">Editar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </Card>

            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Nuevo Miembro"
            >
                <CreateMemberForm
                    onSuccess={() => {
                        setIsCreateModalOpen(false);
                        loadMembers();
                    }}
                    onCancel={() => setIsCreateModalOpen(false)}
                />
            </Modal>
        </div>
    );
};
