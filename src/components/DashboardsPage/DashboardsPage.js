import './DashboardsPage.css'
import * as React from 'react';
import DashboardsList from '../DashboardsList/DashboardsList';
import { get_dashboards } from '../../services/dashboards.services';


export default function DashboardsPage() {
    const [title] = React.useState("Dashboards")

    const [dashboards, setDashboards] = React.useState(null)
    const [loadingDashboards, setLoadingDashboards] = React.useState(true)

    React.useEffect(() => {
        setLoadingDashboards(true)
        get_dashboards()
        .then(result => {
            let starredDashboards = JSON.parse(localStorage.getItem("starredDashboards")) || {}
            const dashboardsIds = Object.keys(starredDashboards)
            result?.dashboards?.forEach((dashboard) => {
                starredDashboards = {
                    ...starredDashboards,
                    [dashboard?.id]: dashboardsIds?.includes(dashboard?.id) ? starredDashboards[dashboard?.id] : dashboard?.starred
                }
            })
            localStorage.setItem('starredDashboards', JSON.stringify(starredDashboards))
            setDashboards(result?.dashboards);
            setLoadingDashboards(false)
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className='container'>
            <div className="row mt-3">
                {loadingDashboards && <h4 className=" mt-5 text-center">Loading Dashboards ...</h4>    }
                {dashboards && <DashboardsList dashboards={dashboards} title={title} />}
            </div>
            
        </div>
    );
}