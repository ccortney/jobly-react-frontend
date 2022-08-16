import { useEffect, useState } from "react";
import JobList from "./JobList.js";
import JoblyApi from "./api.js";
import SearchForm from "./SearchForm.js";

const JobPage = ({applyForJob}) => {
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState({})

    useEffect(() => {
        async function getJobs() {
            let data = await JoblyApi.getJobs();
            setJobs(data)

            setIsLoading(false)

        };
        getJobs();
    }, [])

    if (isLoading) return <h1>Loading</h1>;
    
    const completeSearch = async (formData) => {
        let data = await JoblyApi.getJobs(formData);
        setJobs(data);
    }

    const clearSearch = async () => {
        const jobs = await JoblyApi.getJobs();
        setJobs(jobs);
    }

    return (
        <div>
            <h3>Jobs Page</h3>
            <SearchForm 
                searchPhrase="Search for Job" 
                completeSearch={completeSearch}
                clearSearch={clearSearch}
            />
            <JobList jobs = {jobs} showCompany={true} applyForJob={applyForJob} />
        </div>
    )
}

export default JobPage;
