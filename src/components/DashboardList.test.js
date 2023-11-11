import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardsList from './DashboardsList'; // Path to your DashboardsList component

describe('DashboardsList Component', () => {
    const dashboards =  [
        {
            "displayName": "Antenatal Care",
            "id": "nghVC4w098tyzi",
            "starred": true
        },
        {
            "displayName": "Cases Malaria",
            "id": "JW7RlN5123xafN",
            "starred": false
        }
    ]
    it('Renders with provided props', (dashboards) => {
        const mockDashboards = dashboards   ;

        const mockTitle = 'Test Dahboards';

        render(<DashboardsList dashboards={mockDashboards} title={mockTitle} />);

        // Check if the title is rendered
        const titleElement = screen.getByText(mockTitle);
        expect(titleElement).toBeInTheDocument();

        // Check if the dashboard names are rendered
        mockDashboards.forEach(dashboard => {
        const dashboardName = screen.getByText(dashboard.displayName);
        expect(dashboardName).toBeInTheDocument();
        });
    });
});
