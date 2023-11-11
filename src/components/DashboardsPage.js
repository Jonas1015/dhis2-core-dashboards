import * as React from 'react';
import DashboardsList from './DashboardsList';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { get_dashboards } from '../services/dashboards.services';


export default function ControlledAccordions() {
    const [title, setTitle] = React.useState("Dashboards")

    const [dashboards, setDashboards] = React.useState(null)

    const [filters, setFilters] = React.useState([
        'bar',
        'line',
        'pie',
    ])

    const [filter, setFilter] = React.useState('');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    React.useEffect(() => {
        get_dashboards()
        .then(result => {
            setDashboards(result);
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

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
                                onChange={handleChange}
                            >
                            {filters?.map((type) => (
                                <MenuItem value={type} key={type}>{type}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            
            <div className="row mt-3">
                <DashboardsList dashboards={dashboards?.dashboards} title={title} />
            </div>
            
        </div>
    );
}