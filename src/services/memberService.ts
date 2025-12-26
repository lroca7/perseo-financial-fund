import { type Member } from './types';
import { MOCK_MEMBERS } from './mockData';

const DELAY_MS = 800;

export const memberService = {
    getAll: async (): Promise<Member[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([...MOCK_MEMBERS]);
            }, DELAY_MS);
        });
    },

    getById: async (id: string): Promise<Member | undefined> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_MEMBERS.find(m => m.id === id));
            }, DELAY_MS);
        });
    },

    create: async (member: Omit<Member, 'id' | 'joinedAt' | 'totalContributed' | 'activeLoans'>): Promise<Member> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newMember: Member = {
                    ...member,
                    id: Math.random().toString(36).substr(2, 9),
                    joinedAt: new Date().toISOString(),
                    totalContributed: 0,
                    activeLoans: 0
                };
                MOCK_MEMBERS.push(newMember); // In-memory mutation for now
                resolve(newMember);
            }, DELAY_MS);
        });
    }
};
