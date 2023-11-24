import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadDashboards from '../LoadDashboards'; 
import { MOCK_DASHBOARDS, dashboardAPI } from '../../../utils/mock_tests';

describe('Load DashBoards ', () => {
    it('Should show the loading message if at first the component worked', async () => {
        render(<LoadDashboards />);
        const titleElement = screen.getByText(/Loading Dashboards .../i)
        expect(titleElement).toBeInTheDocument;
    });

  it('should return dashboards', () => {
    const response = new Response(undefined, {
      status: 200,
      statusText: 'OK',
    });
    response.json = () => Promise.resolve(MOCK_DASHBOARDS);
    jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => Promise.resolve(response));

    return dashboardAPI
      .get()
      .then((data) => expect(data).toEqual(MOCK_DASHBOARDS));
  });
});