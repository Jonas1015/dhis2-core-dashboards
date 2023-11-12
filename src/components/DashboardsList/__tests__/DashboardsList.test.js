import { render, screen } from '@testing-library/react';
import DashboardsList from '../DashboardsList'; 

it('Should show title and see name of every dashboard', async () => {
    const mockDashboards = [
        {
            displayName: "Dashboard 1",
            id: "xlsL67aszm8"
        }
    ];

    const mockTitle = 'Test Dashboards';

    render(<DashboardsList dashboards={mockDashboards} title={mockTitle}/>);
    const titleElement = screen.getByText(/Test Dashboards/i);
    expect(titleElement).toBeInTheDocument;

    mockDashboards.forEach(dashboard => {
      const dashboardName = screen.getByText(dashboard.displayName);
      expect(dashboardName).toBeInTheDocument;
    });
});