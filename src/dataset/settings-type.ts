import { TablorCoreTypes as TcT } from 'tablor-core'


export type Setting = {
    id: number,
    shortcut: string,
    description: string,
    category: string,
    context: string,
    platform: string
}

export const settingFields: TcT<Setting>['RegularFields'] = {
    id: { title: 'ID' },
    shortcut: { title: 'Shortcut' },
    description: { title: 'Description' },
    category: { title: 'Category' },
    context: { title: 'Context' },
    platform: { title: 'Platform' },
}
