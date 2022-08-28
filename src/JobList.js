import JobCard from "./JobCard.js";
import {Grid} from "@mui/material"

/**
 * JobList component for Jobly app
 * Renders a JobCard for every job in the state
 * 
 * @props jobs state, showCompany boolean, applyForJob function
 */

const JobList = ({jobs, showCompany, applyForJob}) => {


    return (
            
            <Grid 
                container 
                direction="row" 
                justifyContent="center" 
                padding = {3}
                rowSpacing={2}
                columnSpacing={{xs: 1, s: 2, md: 3}}
                >
                {jobs.map(job => (<Grid item xs={6} key={job.id}>
                   <JobCard key = {job.id} job={job} showCompany={showCompany} applyForJob={applyForJob}/> 
                </Grid>
                ))}
                
                
            </Grid>

    )
}

export default JobList;