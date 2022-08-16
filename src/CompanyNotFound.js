import { Grid, Typography } from "@mui/material";

/**
 * CompanyNotFound component for Jobly app
 * Renders a page that states the company could not be found
 */

const CompanyNotFound = () => {

        return (
            <Grid container spacing={2} direction="column" sx={{mt: 3}}>
                <Grid item>
                    <Typography variant="h2" fontWeight='fontWeightMedium' >
                            404
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" >
                        Company Not Found
                    </Typography>
                </Grid>
            </Grid>
        )
}

export default CompanyNotFound;