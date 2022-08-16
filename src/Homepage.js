import UserContext from "./UserContext";
import {useContext} from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, Box } from "@mui/material";

const Homepage = () => {
    const user = useContext(UserContext);

    const loggedIn = user ?
        (<Grid item>
            <Typography variant="h4" >
                Welcome back, {user.firstName}!
            </Typography>
        </Grid>) :
        (<Grid item>
            <Box >
                <Button variant="contained" sx={{mr: 1}}>
                    <Link style={{textDecoration: "none", color: "white"}} to={`/signup`}>Sign Up</Link>
                </Button>
                <Button variant="contained" sx={{ml: 1}}>
                    <Link style={{textDecoration: "none", color: "white"}} to={`/login`}>LOGIN</Link>
                </Button>
            </Box>
        </Grid>) 

        return (
            <Grid container spacing={2} direction="column" sx={{mt: 3}}>
                <Grid item>
                    <Typography variant="h2" fontWeight='fontWeightMedium' >
                            JOBLY
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" >
                        All the jobs in one, convenient place.
                    </Typography>
                </Grid>
                {loggedIn}
            </Grid>
        )
}

export default Homepage;