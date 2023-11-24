export type Dashboard = {
    displayName: string;
    id: string;
    starred: boolean;
    dashboardItems?: DashboardItem[]
}

export type DashboardItem = {
    [index: string]: Other | string;
    type: string | 'TEXT';
    id: string;
}

export type Other = {
    name:  string;
    type: string;
}
