export type UserRole = 'ADMIN' | 'MEMBER';
export type MemberStatus = 'ACTIVE' | 'INACTIVE';

export interface Member {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    phone?: string;
    joinedAt: string; // ISO Date
    status: MemberStatus;
    totalContributed: number;
    activeLoans: number;
}

export interface Contribution {
    id: string;
    memberId: string;
    amount: number;
    date: string;
    type: 'QUOTA' | 'EXTRA';
}

export interface Loan {
    id: string;
    memberId: string;
    amount: number;
    interestRate: number; // Percentage
    startDate: string;
    durationMonths: number;
    status: 'PENDING' | 'ACTIVE' | 'PAID' | 'REJECTED';
    remainingBalance: number;
}
