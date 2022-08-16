import { useEffect, useState } from "react";
import JoblyApi from "./api.js";
import CompanyCard from "./CompanyCard.js";
import SearchForm from "./SearchForm.js";

/**
 * CompanyPage component for Jobly app
 * Renders "loading" while the API call is being performed
 * On mount, renders a CompanyCard for every company in the database
 * 
 * Search filters by company name, displaying a CompanyCard for each company returned
 * Clear resets the search bar to an empty string and renders a CompanyCard for every company
 */

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

    const clearSearch = async () => {
        const companies = await JoblyApi.getCompanies();
        setCompanies(companies);
    }

    if (isLoading) return <h1>Loading</h1>;


    return (
        <div>
            <h3>Companies Page</h3>
            <SearchForm searchPhrase="Search for Company" completeSearch={completeSearch} clearSearch={clearSearch}/>
            {companies.map(company => (<CompanyCard
                key = {company.handle}
                company = {company}
            />))}
        </div>
    )
}

export default CompanyPage;