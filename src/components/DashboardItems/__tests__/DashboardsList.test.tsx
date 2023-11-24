import { render, screen } from '@testing-library/react';
import DashboardItems from '../DashboardItems'; 
import { Dashboard, DashboardItem, Other } from '../../../Interfaces/dashboard.interfaces';
import React from 'react';

it('Renders with provided props', async () => {
    const dashboard: Dashboard = {
        dashboardItems: [
            {
                visualization: {
                    name: "Visualization Dashboard test",
                    type: "LINE"
                },
                type: "VISUALIZATION",
                id: "xlsL67aszm8"
            },
            {
                text: "Mock text for Dashboard test",
                type: "TEXT",
                id: "xl689asszm8"
            },
            {
                map: {
                    name: "Map Dashboard test",
                    type: "Map"
                },
                type: "MAP",
                id: "shji8sL67aszm8"
            },
        ],
        displayName: '',
        id: '',
        starred: false
    };

    render(<DashboardItems dashboardDetails={dashboard} />);
    dashboard?.dashboardItems?.map((item) => {
        const key = item?.type?.toLowerCase() as keyof DashboardItem
        const titleElement = screen.getByText((item[key] as Other)?.name || item[key] as string);
        // expect(titleElement).toBeInTheDocument;
    })
});