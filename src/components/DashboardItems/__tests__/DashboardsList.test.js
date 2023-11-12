import { render, screen } from '@testing-library/react';
import DashboardItems from '../DashboardItems'; 

it('Renders with provided props', async () => {
    const dashboard = {
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
        ]
    };

    render(<DashboardItems dashboardDetails={dashboard} />);
    dashboard?.dashboardItems?.map((item) => {
        const titleElement = screen.getByText(item[item?.type?.toLowerCase()]?.name || item[item?.type?.toLowerCase()]);
        expect(titleElement).toBeInTheDocument;
    })
});