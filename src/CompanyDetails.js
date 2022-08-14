import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api.js";
import JobList from "./JobList.js";

const CompanyDetails = () => {
    const {id} = useParams();
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState({})

    useEffect(() => {
        async function getCompany(id) {
            let data = await JoblyApi.getCompany(id);
            setCompany(data)

            setIsLoading(false)
        };
        getCompany(id);
    }, [id])

    if (isLoading) return <h1>Loading</h1>;

    return (
        <div>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <JobList jobs={company.jobs} showCompany={false}/>
        </div>
    )
}

export default CompanyDetails;