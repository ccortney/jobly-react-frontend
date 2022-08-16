import { useState, useContext } from "react";
import { Grid, TextField, Typography, FormControl, Button, InputLabel, OutlinedInput, InputAdornment, IconButton} from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

/**
 * Profile component for Jobly app
 * Renders two forms. The first allows users to edit first/last name or email. 
 * The second form allows users to change password. 
 * 
 * Redirects to homepage when either form is submitted
 * 
 * @props editProfile function
 */

const Profile = ({editProfile}) => {
    const navigate = useNavigate();
    const user = useContext(UserContext)

    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: '', 
        password: '',
        showPassword: false
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editProfile({
            firstName: formData.firstName || user.user.firstName,
            lastName: formData.lastName || user.user.lastName,
            email: formData.email || user.user.email,
            password: formData.password || user.user.email
        })
        navigate('/')

    }
      
    const handleClickShowPassword = () => {
        setFormData({
        ...formData,
        showPassword: !formData.showPassword,
        });
    };
      
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

  return (
      <div>

      
    <form onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="div" sx={{pt: 3}}>
            Edit Profile
        </Typography>
        <Grid container alignItems="center" justifyContent="center" direction="column">
            <Grid item >
                <TextField
                    sx={{m: 1, width: 300}}
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                        sx={{m: 1, width: 300}}
                        id="name-input"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        value={formData.lasttName}
                        onChange={handleChange}
                    />
            </Grid>
            <Grid item>
                <TextField
                    sx={{m: 1, width: 300}}
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Grid>
            <Button variant="contained" color="primary" type="submit" sx={{mt: 2}}>
            Save Changes
            </Button>
        </Grid>
    </form>
        <form onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="div" sx={{pt: 3}}>
            Edit Password
        </Typography>
        <Grid container alignItems="center" justifyContent="center" direction="column">

            <Grid item >
                <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
                        <InputLabel htmlFor="password">New Password</InputLabel>
                        <OutlinedInput
                        id="password"
                        type={formData.showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                            {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        />
                </FormControl>   
            </Grid>        
            <Button variant="contained" color="primary" type="submit" sx={{mt: 2}}>
            Save
            </Button>
        </Grid>
    </form>
    </div>
  );
};

export default Profile;