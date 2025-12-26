import { type Member, type Loan } from './types';

export const MOCK_MEMBERS: Member[] = [
    {
        id: '1',
        name: 'Carlos Admin',
        email: 'carlos@perseo.com',
        role: 'ADMIN',
        joinedAt: '2024-01-01',
        status: 'ACTIVE',
        totalContributed: 5000,
        activeLoans: 0
    },
    {
        id: '2',
        name: 'Ana Miembro',
        email: 'ana@perseo.com',
        role: 'MEMBER',
        joinedAt: '2024-02-15',
        status: 'ACTIVE',
        totalContributed: 3000,
        activeLoans: 1
    },
    {
        id: '3',
        name: 'Luis Nuevo',
        email: 'luis@perseo.com',
        role: 'MEMBER',
        joinedAt: '2024-03-10',
        status: 'INACTIVE',
        totalContributed: 0,
        activeLoans: 0
    }
];

export const MOCK_LOANS: Loan[] = [
    {
        id: 'L001',
        memberId: '2',
        amount: 1000,
        interestRate: 5,
        startDate: '2024-04-01',
        durationMonths: 6,
        status: 'ACTIVE',
        remainingBalance: 800
    }
];
