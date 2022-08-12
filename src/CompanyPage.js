import { useEffect, useState } from "react";
import JoblyApi from "./api.js";
import CompanyCard from "./CompanyCard.js";

const CompanyPage = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            let data = await JoblyApi.getCompanies();
            setCompanies(data)
        };
        getCompanies();
    }, [])


    return (
        <div>
            <h3>Companies Page</h3>
            {companies.map(company => (<CompanyCard
                key = {company.handle}
                company = {company}
            />))}
        </div>
    )
}

export default CompanyPage;