import {useState, useEffect} from "react";
import { useLocalStorage } from "./hooks";
import AppRoutes from "./AppRoutes";
import JoblyApi from "./api";
import { decodeToken } from 'react-jwt';
import UserContext from "./UserContext";
import './App.css';
import Navbar from "./Navbar";


function App() {

  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserFromToken() {
      JoblyApi.token = token;
      let payload = decodeToken(token)
      const user = await JoblyApi.getUser(payload.username)
      setUser(user)
    }
    if (token) {
      getUserFromToken()
    }
  }, [token])

  const login = async (data) => {
    let res = await JoblyApi.login(data);
    setToken(res)
  };

  const signup = async (data) => {
    let res = await JoblyApi.signup(data);
    setToken(res)
  }

  const editProfile = async (data) => {
    let res = await JoblyApi.editProfile(user.username, data);
    setUser(res);
  }

  const applyForJob = async (jobId) => {
    let res = await JoblyApi.applyForJob(user.username, jobId);
    setUser({...user, applications: [...user.applications, res]})
  }

  const logout = () => {
    JoblyApi.token = null;
    setToken(null)
    setUser(null)
  }

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Navbar logout={logout} />
        <AppRoutes login={login} signup={signup} token={token} editProfile={editProfile} applyForJob={applyForJob}/>
      </div>
    </UserContext.Provider>

  );
}

export default App;
