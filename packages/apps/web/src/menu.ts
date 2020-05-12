import { history } from './history'

export const items = [
  {
    label: 'Table',
    icon: 'pi pi-fw pi-list',
    command: () => history.push('/'),
  },
  {
    label: 'Chart',
    icon: 'pi pi-fw pi-chart-bar',
    command: () => history.push('/chart'),
  },
]
