import * as React from 'react';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
import PieChartOutlineRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';
import PivotTableChartRoundedIcon from '@mui/icons-material/PivotTableChartRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import StackedBarChartRoundedIcon from '@mui/icons-material/StackedBarChartRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';

function DashboardItems({ dashboardDetails }){


    return (
        <div>
            {dashboardDetails ? (
                dashboardDetails?.dashboardItems?.map((dashboardItem) => (
                    <div key={dashboardItem.id}>
                        <div className='d-flex mt-1'>
                            <p className='dashboardItem-icon'>
                               {
                               dashboardItem[dashboardItem?.type?.toLowerCase()]?.type === 'PIE' ? (<PieChartOutlineRoundedIcon />) : 
                               dashboardItem[dashboardItem?.type?.toLowerCase()]?.type === 'PIVOT_TABLE' ? (<PivotTableChartRoundedIcon />) : 
                               dashboardItem[dashboardItem?.type?.toLowerCase()]?.type === 'COLUMN' ? (<LeaderboardRoundedIcon />) : 
                               dashboardItem[dashboardItem?.type?.toLowerCase()]?.type === 'YEAR_OVER_YEAR_LINE' ? (<StackedLineChartRoundedIcon />) : 
                               dashboardItem[dashboardItem?.type?.toLowerCase()]?.type === 'LINE' ? (<TimelineRoundedIcon />) : 
                               dashboardItem[dashboardItem?.type?.toLowerCase()]?.type === 'STACKED_COLUMN' ? (<StackedBarChartRoundedIcon />) : 
                               dashboardItem?.type === 'VISUALIZATION' ? (<AssessmentRoundedIcon />) : 
                               dashboardItem?.type === 'MAP' ? (<PublicRoundedIcon />) : 
                               dashboardItem?.type === 'TEXT' ? (<TextSnippetRoundedIcon />) : ("")} 
                            </p>
                            <p>
                                {dashboardItem[dashboardItem?.type?.toLowerCase()]?.name || dashboardItem[dashboardItem?.type?.toLowerCase()]}
                            </p>
                        </div>
                    </div>
                ))) : (<div>Loading ...</div>)}
        </div>
    )
}

export default DashboardItems