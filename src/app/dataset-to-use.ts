import { Transaction, transactionFields } from '../dataset/transactions-type'
import { transactionsDataset } from '../dataset/transactions-dataset'

import { Setting, settingFields } from '../dataset/settings-type'
import { settingsDataset } from '../dataset/settings-dataset'


export type DataType = Setting;
export const dataFields = settingFields
export const dataset = settingsDataset

// export type DataType = Transaction;
// export const dataFields = transactionFields
// export const dataset = transactionsDataset
