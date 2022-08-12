import {Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const CompanyCard = ({company}) => {

    return (
    <Link to={`/companies/${company.handle}`} style={{textDecoration: "none"}}>
        <Card sx={{ my: 2, mx: 7}} variant="outlined">
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {company.description}
                </Typography>
            </CardContent>
        </Card>
    </Link>
  );
}

export default CompanyCard;