import { TablorCoreTypes as TcT } from 'tablor-core-beta'

export type Transaction = {
    transactionId: string;
    user: string;
    bank: string;
    transactionDate: string;
    createdAt: string;
    updatedAt: string;
    amount: number;
    currency: string;
    transactionType: 'Credit' | 'Debit';
    status: 'Completed' | 'Pending' | 'Failed';

    merchant?: string | null;
    receiptUrl?: string | null;
    initiatedBy?: string | null;
    notes?: string | null;
};


export const transactionFields: TcT<Transaction>['RegularFields'] = {
    transactionId: { title: 'Transaction ID' },
    user: { title: 'User' },
    bank: { title: 'Bank' },
    transactionDate: { title: 'Transaction Date' },
    createdAt: { title: 'Created At' },
    updatedAt: { title: 'Updated At' },
    amount: { title: 'Amount' },
    currency: { title: 'Currency' },
    transactionType: { title: 'Transaction Type' },
    status: { title: 'Status' },
    merchant: { title: 'Merchant' },
    receiptUrl: { title: 'Receipt URL' },
    initiatedBy: { title: 'Initiated By' },
    notes: { title: 'Notes' },
}
