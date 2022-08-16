import { useEffect, useState } from "react";
import JobList from "./JobList.js";
import JoblyApi from "./api.js";
import SearchForm from "./SearchForm.js";

/**
 * JobPage component for Jobly app
 * Renders "loading" while the API call is being performed
 * On mount, renders a JobList
 * 
 * Search filters by job name, displaying a JobCard in the JobList for each job returned
 * Clear resets the search bar to an empty string and renders the full JobList
 * 
 * @props applyForJob function
 */

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
