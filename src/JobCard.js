import {Card, Typography, Button, CardActions, Grid} from '@mui/material';
import "./JobCard.css"

const JobCard = ({job, showCompany}) => {
    if (!job.equity) {
        job.equity = "Unknown"
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Applied!")
    }
    return (
        <Card sx={{ my: 2, mx: 7}} variant="outlined">
                <Typography variant="h6" >
                    {job.title}
                </Typography>
                {showCompany &&
                    <Typography variant="subtitle1" >
                        {job.companyName}
                    </Typography>
                }
                <Typography variant="subtitle2" color="text.secondary">
                    Salary: {job.salary}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Equity: {job.equity}
                </Typography>
            <Grid container justifyContent = "flex-end">
                <CardActions >
                    <Button variant="contained" className="apply-button" onClick = {handleClick}>Apply</Button>
                </CardActions>
            </Grid>

        </Card>
  );
}

export default JobCard;

