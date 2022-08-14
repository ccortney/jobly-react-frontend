import { useEffect, useState } from "react";
import JoblyApi from "./api.js";
import CompanyCard from "./CompanyCard.js";
import SearchForm from "./SearchForm.js";

const CompanyPage = () => {
    const [companies, setCompanies] = useState([]);
    const [isLoading, setIsLoading] = useState({})


    useEffect(() => {
        async function getCompanies() {
            let data = await JoblyApi.getCompanies();
            setCompanies(data)

            setIsLoading(false)

        };
        getCompanies();
    }, [])

    const completeSearch = async (formData) => {
        let data = await JoblyApi.getCompanies(formData);
        setCompanies(data);
    }

    if (isLoading) return <h1>Loading</h1>;


    return (
        <div>
            <h3>Companies Page</h3>
            <SearchForm searchPhrase="Search for Company" completeSearch={completeSearch}/>
            {companies.map(company => (<CompanyCard
                key = {company.handle}
                company = {company}
            />))}
        </div>
    )
}

export default CompanyPage;