import { useState } from "react";
import { Grid, TextField, Typography, FormControl, Button, InputLabel, OutlinedInput, InputAdornment, IconButton} from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

const Signup = ({signup}) => {
    const navigate = useNavigate()

    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '', 
        showPassword: false
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signup({
            username: formData.username, 
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
        })
        setFormData(INITIAL_STATE)
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
    <form onSubmit={handleSubmit}>
        <Typography gutterBottom variant="h5" component="div" sx={{pt: 3}}>
            Signup
        </Typography>
        <Grid container alignItems="center" justifyContent="center" direction="column">
            <Grid item >
                <TextField
                    sx={{m: 1, width: 250}}
                    id="username"
                    name="username"
                    label="Username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                />
                <FormControl sx={{ m: 1, width: 250 }} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
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
            <Grid item >
                <TextField
                    sx={{m: 1, width: 250}}
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    sx={{m: 1, width: 250}}
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
                    sx={{m: 1, width: 520}}
                    id="email"
                    name="email"
                    label="Email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Grid>
            <Button variant="contained" color="primary" type="submit" sx={{mt: 2}}>
            Signup
            </Button>
        </Grid>
    </form>
  );
};

export default Signup;