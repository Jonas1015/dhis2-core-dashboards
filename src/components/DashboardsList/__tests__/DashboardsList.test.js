import { render, screen, fireEvent } from '@testing-library/react';
import DashboardsList from '../DashboardsList'; 

const mockDashboards = [
            {
                displayName: "Dashboard 1",
                id: "xlsL67aszm8"
            }
        ];

const mockTitle = 'Test Dashboards';


describe('DashboardsList Component', (mockDashboards, mockTitle) => {
    it('Should show title and see name of every dashboard', async () => {
        render(<DashboardsList dashboards={mockDashboards} title={mockTitle}/>);
        const titleElement = screen.getByText(/Test Dashboards/i);
        expect(titleElement).toBeInTheDocument;

        mockDashboards.forEach(dashboard => {
            const dashboardName = screen.getByText(dashboard.displayName);
            expect(dashboardName).toBeInTheDocument;
        });

    });

    it("Should click filter field", () => {
        render(<DashboardsList dashboards={mockDashboards} title={mockTitle}/>);
        const inputElement = screen.getByText("Filter Items")
        const filterElement = screen.getByTestId("filter")
        fireEvent.click(inputElement);
        expect("ALL").toBeInTheDocument;
    });

});