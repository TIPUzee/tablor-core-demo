import { TablorCoreTypes as TcT } from 'tablor-core'

// Transaction type
export type Transaction = {
    transactionId: number;
    user: string;
    bank: string;
    description: string,
    transactionDate: Date;
    createdAt: Date;
    updatedAt: Date;
    amount: number;
    currency: string;
    transactionType: 'Credit' | 'Debit';
    status: 'Completed' | 'Pending' | 'Failed';

    merchant?: string | null;
    receiptUrl?: string | null;
    initiatedBy?: string | null;
    notes?: string | null;
};

// Tablor Core types for Transaction
export type TransactionTcT = TcT<Transaction>;

// Transaction fields
export const transactionFields: TransactionTcT['RegularFields'] = {
    transactionId: {
        title: 'Transaction ID',
        // There are more props apart from `title`,
        // but no one (even title) is used by Tablor Core internally
        // Those props can be helpful when creating UI libraries
        // Note that, it is essential to defined the fields,
        // so that the Tablor Core can understand the data structure
    },
    user: { title: 'User' },
    bank: { title: 'Bank' },
    description: { title: 'Description' },
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
