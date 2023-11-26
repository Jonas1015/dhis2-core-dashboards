import './LoadDashboards.css'
import * as React from 'react';
import ListDashboards from '../ListDashboards/ListDashboards';
import { get_dashboards } from '../../services/dashboards.services';
import { Dashboard } from '../../utils/dashboard.types';


export default function LoadDashboards() {
    const [title] = React.useState("Dashboards")

    const [dashboards, setDashboards] = React.useState(null)
    const [error, setError] = React.useState("")
    const [loadingDashboards, setLoadingDashboards] = React.useState(true)

    React.useEffect(() => {
        setLoadingDashboards(true)
        setError("")
        get_dashboards()
        .then((result: any) => {
            let starredDashboards = JSON.parse(localStorage.getItem("starredDashboards") || '{}')
            const dashboardsIds = Object.keys(starredDashboards)
            result?.dashboards?.forEach((dashboard: Dashboard) => {
                const id = dashboard.id as keyof Dashboard
                starredDashboards = {
                    ...starredDashboards,
                    [dashboard?.id]: dashboardsIds?.includes(id) ? starredDashboards[id] : dashboard?.starred
                }
            })
            localStorage.setItem('starredDashboards', JSON.stringify(starredDashboards))
            setDashboards(result?.dashboards);
            setLoadingDashboards(false)
        })
        .catch((error: string) => {
            setError(error)
            setLoadingDashboards(false)
        })
    }, [])

    return (
        <div className='container'>
            <div className="row mt-3">
                {loadingDashboards && <h4 className=" mt-5 text-center">Loading Dashboards ...</h4>    }
                {dashboards && <ListDashboards dashboards={dashboards} title={title} />}
                {error && <h4 className=" mt-5 text-center text-danger">Error occured!. Please check your connection or reload the page.</h4>}
            </div>
            
        </div>
    );
}