import JobCard from "./JobCard.js";
import {Grid} from "@mui/material"

const JobList = ({jobs, showCompany}) => {
    return (
            
            <Grid 
                container 
                direction="row" 
                justifyContent="center" 
                rowSpacing={1} 
                columnSpacing={{xs: 1, s: 2, md: 3}}>
                {jobs.map(job => (<Grid item xs={6} key={job.id}>
                   <JobCard key = {job.id} job={job} showCompany={showCompany}/> 
                </Grid>
                ))}
                
                
            </Grid>

    )
}

export default JobList;