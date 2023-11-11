import * as React from 'react';
import DashboardsList from './DashboardsList';
import { get_dashboards } from '../services/dashboards.services';


export default function DashboardPage() {
    const [title] = React.useState("Dashboards")

    const [dashboards, setDashboards] = React.useState(null)

    React.useEffect(() => {
        get_dashboards()
        .then(result => {
            let starredDashboards = JSON.parse(localStorage.getItem("starredDashboards")) || ""
            result?.dashboards?.forEach((dashboard) => {
                starredDashboards = {
                    ...starredDashboards,
                    [dashboard?.id]: starredDashboards[dashboard?.id]
                }
            })
            localStorage.setItem('starredDashboards', JSON.stringify(starredDashboards))
            setDashboards(result?.dashboards);
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className='container'>
            <div className="row mt-3">
                {dashboards && <DashboardsList dashboards={dashboards} title={title} />}
            </div>
            
        </div>
    );
}