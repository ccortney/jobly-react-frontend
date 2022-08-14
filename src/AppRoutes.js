import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyPage from "./CompanyPage";
import CompanyDetails from "./CompanyDetails"
import JobPage from "./JobPage";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";

const AppRoutes = () => {



    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/companies" element={<CompanyPage/>}/>
                <Route path="/companies/:id" element={<CompanyDetails cantFind="/companies"/>}/>
                <Route path="/jobs" element={<JobPage />}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;