import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api.js";

const CompanyDetails = () => {
    const params = useParams();
    const [company, setCompany] = useState({});

    useEffect(() => {
        async function getCompany() {
            let data = await JoblyApi.getCompany(params.id);
            setCompany(data)
        };
        getCompany();
    }, [])


    return (
        <div>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
        </div>
    )
}

export default CompanyDetails;