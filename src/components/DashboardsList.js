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
import Select from '@mui/material/Select';
import DashboardItems from './DashboardItems';

import { get_dashboard_items } from '../services/dashboards.services';

function DashboardsList({ dashboards, title }) {

  const [expanded, setExpanded] = React.useState(dashboards[0]);
  const [openedDashboard, setOpenedDashboard] = React.useState(null);

  const handleExansion = (dashboard) => (event, isExpanded) => {
    setExpanded(isExpanded ? dashboard : false);
    setOpenedDashboard(dashboard)
  };

  const [filters, setFilters] = React.useState([
        'VISUALIZATION',
        'MAP',
        'TEXT'
    ])

  const [filter, setFilter] = React.useState(null);

  const handleFilter = (event) => {
      setFilter(event.target.value);
      localStorage.setItem('filter', event.target.value);
  };

  React.useEffect(() =>{
        if(expanded){
            get_dashboard_items(expanded?.id)
            .then(result => {       
                setOpenedDashboard(result);
            })
            .catch(error => {
                console.error(error);
            })
        }
    }, [expanded])

  return (
    <div className='container'>
        <div className="row mt-5 pt-5">
                <div className="col-10">
                    {title}
                </div>
                <div className="col-2">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="select-filter-label">Filter Items</InputLabel>
                            <Select
                                labelId="select-filter"
                                id="select-filter"
                                value={filter}
                                label="Filter"
                                onChange={handleFilter}
                            >
                              {/* <MenuItem value=''>ALL</MenuItem> */}
                            {filters?.map((filter) => (
                                <MenuItem value={filter} key={filter}>{filter}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <hr />
        {dashboards?.map((dashboard) => (
          <Accordion expanded={expanded?.id === dashboard?.id || (!expanded && dashboards[0]?.id === dashboard?.id)} onChange={handleExansion(dashboard)} key={dashboard.id}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={dashboard?.id}
              id={dashboard?.id}
              >
                <Typography>
                    {dashboard?.displayName}
                </Typography>
                <span className="accordion-star-icon">
                  { dashboard?.starred ? (
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
                      {openedDashboard && (<DashboardItems dashboardDetails={openedDashboard} selectedFilter={filter} handleFilter={handleFilter} />)}
              </AccordionDetails>
          </Accordion>
        ))}
    </div>
  )
}

export default DashboardsList