import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyPage from "./CompanyPage";
import CompanyDetails from "./CompanyDetails"
import JobPage from "./JobPage";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import CompanyNotFound from "./CompanyNotFound";

const AppRoutes = ({login, signup, token, editProfile, applyForJob}) => {
    
    if (!token) {
        return (
            <Routes>
                {console.log("not user routes")}
                <Route path="/" element={<Homepage/>}/>
                <Route path="/companies" element={<Navigate to="/"/>}/>
                <Route path="/companies/:id" element={<Navigate to="/"/>}/>
                <Route path="/jobs" element={<Navigate to="/"/>}/>
                <Route path="/profile" element={<Navigate to="/"/>}/>
                <Route path="/login" element={<Login login={login}/>}/>
                <Route path="/signup" element={<Signup signup={signup}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        )
    } 
    else {
        return (        
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/companies" element={<CompanyPage/>}/>
                <Route path="/companies/:id" element={<CompanyDetails cantFind="/companies/404" applyForJob={applyForJob}/>}/>
                <Route path="/companies/404" element={<CompanyNotFound/>}/>
                <Route path="/jobs" element={<JobPage applyForJob={applyForJob}/>}/>
                <Route path="/profile" element={<Profile editProfile={editProfile}/>}/>
                <Route path="/login" element={<Login login={login}/>}/>
                <Route path="/signup" element={<Signup signup={signup}/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        )

    }
}

export default AppRoutes;