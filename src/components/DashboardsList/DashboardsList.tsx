import './DashboardsList.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DashboardItems from '../DashboardItems/DashboardItems';

import { get_dashboard_items } from '../../services/dashboards.services';
import { DashboardItem } from '../../Interfaces/dashboard.interfaces';
import { Dashboard } from '../../Interfaces/dashboard.interfaces';

function DashboardsList(props: { dashboards: Dashboard[], title: string}) {
  
  const [expanded, setExpanded] = React.useState(props?.dashboards[0]);
  const [openedDashboard, setOpenedDashboard] = React.useState({} as Dashboard);
  const [loadingDashboardItems, setLoadingDashboardItems] = React.useState(true);

  const handleExansion = (dashboard: Dashboard) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? dashboard : props?.dashboards[0]);
    setOpenedDashboard(dashboard)
  };

  const [filters, setFilters] = React.useState([
        'VISUALIZATION',
        'MAP',
        'TEXT'
    ])

  const [filter, setFilter] = React.useState(localStorage.getItem('filter') || '');

  const handleFilter = (event: SelectChangeEvent<string>) => {
      setFilter(event.target.value);
      localStorage.setItem('filter', event.target.value);
  };

  const [starredDashboards, setStarredDashboards] = React.useState(JSON.parse(localStorage.getItem('starredDashboards') || "{}"))
  const handleStar = (dashboard: Dashboard) => {
    let starredDashboards = JSON.parse(localStorage.getItem('starredDashboards') || "{}");
    starredDashboards = {
        ...starredDashboards,
        [dashboard?.id]: !starredDashboards[dashboard?.id] ? true : false
      }
    localStorage.setItem('starredDashboards', JSON.stringify(starredDashboards))
    setStarredDashboards(starredDashboards)
  }

  React.useEffect(() =>{
        if(expanded){
            setLoadingDashboardItems(true)
            get_dashboard_items(expanded?.id)
            .then((result: any) => {    
                setOpenedDashboard(filter ?{
                  ...result,
                  dashboardItems: [
                    ...result?.dashboardItems?.filter((dashboardItem: DashboardItem) => dashboardItem?.type === filter)
                  ]
                } : result );
                setLoadingDashboardItems(false)
            })
            .catch(error => {
                console.error(error);
            })
        }
    }, [expanded, filter])

  return (
    <div className='container'>
        <div className="row dashboards-header mt-5 pt-5">
          <div className="col-md-8 col-lg-9 col-sm-6 col-xm-4 mt-3 title">
              {props.title}
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 col-xm-8 mt-3 filter-field">
              <Box>
                  <FormControl fullWidth>
                      <InputLabel id="select-filter-label">Filter Items</InputLabel>
                      <Select
                          labelId="select-filter"
                          id="select-filter"
                          data-testId="filter"
                          value={filter}
                          label="Filter"
                          onChange={(event: SelectChangeEvent<string>) => handleFilter(event)}
                      >
                        <MenuItem value=''>ALL</MenuItem>
                      {filters?.map((filter) => (
                          <MenuItem value={filter} key={filter}>{filter}</MenuItem>
                      ))}
                      </Select>
                  </FormControl>
              </Box>
          </div>
        </div>
        <div className="row mt-3">
          {props?.dashboards?.map((dashboard: Dashboard) => (
            <Accordion expanded={expanded?.id === dashboard?.id} onChange={handleExansion(dashboard)} key={dashboard.id}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={dashboard?.id}
                id={dashboard?.id}
                >
                  <Typography>
                      {dashboard?.displayName}
                  </Typography>
                  <span className="accordion-star-icon" onClick={() => handleStar(dashboard)}>
                    { starredDashboards[dashboard?.id] ? (
                        <Typography>
                          <StarRateRoundedIcon /> 
                        </Typography>
                      ) : (
                        <Typography>
                          <StarBorderRoundedIcon /> 
                        </Typography>
                      )}
                      
                      
                  </span>
                </AccordionSummary>
                <AccordionDetails>
                        {loadingDashboardItems && <p className="text-center">loading dashboard items ...</p>}
                        {!loadingDashboardItems && <DashboardItems dashboardDetails={openedDashboard} />}
                </AccordionDetails>
            </Accordion>
          ))}
        </div>
    </div>
  )
}

export default DashboardsList