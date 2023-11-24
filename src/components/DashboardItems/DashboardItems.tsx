import * as React from 'react';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import './DashboardItems.css'
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
import PieChartOutlineRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';
import PivotTableChartRoundedIcon from '@mui/icons-material/PivotTableChartRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import { Dashboard, DashboardItem, Other } from '../../utils/dashboard.types';


const dashboardItemIconMapping: Record<string, React.ReactElement> = {
  PIE: (<PieChartOutlineRoundedIcon />),
  PIVOT_TABLE: (<PivotTableChartRoundedIcon />),
  COLUMN: (<LeaderboardRoundedIcon />),
  YEAR_OVER_YEAR_LINE: (<StackedLineChartRoundedIcon />),
  LINE: (<TimelineRoundedIcon />),
  STACKED_COLUMN: (<StackedBarChartRoundedIcon />),
  VISUALIZATION: (<AssessmentRoundedIcon />),
  MAP: (<PublicRoundedIcon />),
  TEXT: (<TextSnippetRoundedIcon />),
};


function DashboardItems(props: { dashboardDetails: Dashboard }){

    return (
        <div>
            {props.dashboardDetails?.dashboardItems!?.length > 0 ? (
                props?.dashboardDetails?.dashboardItems?.map((dashboardItem: DashboardItem) => (
                    <div key={dashboardItem.id}>
                        <div className='d-flex mt-1'>
                            <p className='dashboardItem-icon'>
                                { (dashboardItem[dashboardItem?.type?.toLowerCase()] as Other)?.type in dashboardItemIconMapping ? dashboardItemIconMapping[(dashboardItem[dashboardItem?.type?.toLowerCase()] as Other)?.type] : dashboardItemIconMapping[dashboardItem?.type]}
                            </p>
                            <p>
                                {(dashboardItem[dashboardItem?.type?.toLowerCase()] as Other)?.name  || dashboardItem[dashboardItem?.type?.toLowerCase()] as string}
                            </p>
                        </div>
                    </div>
                ))) : (<p className="text-center">No dashboard items to display</p>)}
        </div>
    )
}

export default DashboardItems