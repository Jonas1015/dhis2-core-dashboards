import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { get_dashboard_items } from '../services/dashboards.services';
import DashboardItems from './DashboardItems';

function DashboardsList({ dashboards }) {

  const [expanded, setExpanded] = React.useState(false);
  
  const [dashboard, setDashboard] = React.useState(null);

  const handleChange = (dashboard) => (event, isExpanded) => {
    setExpanded(isExpanded ? dashboard : false);
  };

  React.useEffect(() =>{
    if(expanded?.id !== dashboard?.id){
      get_dashboard_items(expanded?.id)
          .then(result => {       
              setDashboard(result);
          })
          .catch(error => {
              console.error(error);
          })
    }
  }, [expanded])

  let count = 0;

  return (
    <div className='dashboard'>
        {dashboards?.map((dashboard) => (
            <Accordion expanded={expanded?.id === dashboard?.id || (count === 0 && !expanded)} onChange={handleChange(dashboard)} key={dashboard.id}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={dashboard?.id}
                id={dashboard?.id}
                >
                <span hidden>{count++}</span>
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
                        {dashboard ? (<DashboardItems dashboardItems={dashboard?.dashboardItems} />) : (<div>No Items</div>)}
                </AccordionDetails>
            </Accordion>

        ))}
    </div>
  )
}

export default DashboardsList