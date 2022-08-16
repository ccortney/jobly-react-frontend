import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JoblyApi from "./api.js";
import JobList from "./JobList.js";

/**
 * CompanyDetails component for Jobly app
 * Renders the company name and description, 
 *   along with the JobList component of all jobs for that company
 * 
 * @props cantFind route and applyForJob function
 */

const CompanyDetails = ({cantFind, applyForJob}) => {
    const {id} = useParams();
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState({})
    const navigate = useNavigate()


    useEffect(() => {
        async function getCompany(id) {
            try {
                let data = await JoblyApi.getCompany(id);
                setCompany(data)
                setIsLoading(false)
            } catch (e) {
                navigate(`${cantFind}`)
            }
        };
        getCompany(id);
    }, [id, cantFind, navigate])

    if (isLoading) return <h1>Loading</h1>;

    return (
        <div>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <JobList jobs={company.jobs} showCompany={false} applyForJob={applyForJob}/>
        </div>
    )
}

export default CompanyDetails;