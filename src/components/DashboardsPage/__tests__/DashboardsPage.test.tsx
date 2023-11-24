import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardsPage from '../DashboardsPage'; 

it('Should show the loading message if at first the component worked', async () => {
    render(<DashboardsPage />);
    const titleElement = screen.getByText(/Loading Dashboards .../i)
    expect(titleElement).toBeInTheDocument;
});