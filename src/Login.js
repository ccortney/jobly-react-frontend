import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Typography, Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';


/**
 * Login component for Jobly app
 * Renders login form that redirects to homepage with welcome message when successfully logged in
 * 
 * @props login function
 */

const Login = ({login}) => {
    const navigate = useNavigate();

    const INITIAL_STATE = {
        username: '',
        password: '', 
        showPassword: false
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [failedLogin, setFailedLogin] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = async (e) => {
        setFailedLogin(false)
        e.preventDefault();
        try {
            await login({username: formData.username, password: formData.password})
            setFormData(INITIAL_STATE)
            navigate('/')
        } catch (err) {
            setFailedLogin(true)
        }
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
      
    const failedLoginAlert = failedLogin ? 
        (
            <Typography gutterBottom variant="caption" component="div" color="red">
            Invalid username/password
            </Typography>
        ):
          null

    return (
        <form onSubmit={handleSubmit}>
            <Typography gutterBottom variant="h5" component="div" sx={{pt: 3}}>
                Login
            </Typography>
            <Box sx={{ display: 'flex', justifyContent:  'center' }}  onSubmit={handleSubmit}>
                <div>
                    <TextField
                        label="Username"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange = {handleChange}
                        sx={{ m: 1, width: '25ch' }}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
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
                </div>  
            </Box>
            {failedLoginAlert}  
            <Button variant="contained" type="submit">Login</Button>   
        </form>
        
    )
}

export default Login;


