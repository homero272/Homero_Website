import { Typography, Box } from "@mui/material"
import { Fragment } from "react"
import { Link } from "react-router-dom"


const NotFound = (props) =>{

    return (
        <Fragment>
            <Box sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography sx={{fontSize: 45}}>
                404 Not Found
            </Typography>
            <Link to="/">
                Back To Home
            </Link>
            </Box>
        </Fragment>
    )
}

export default NotFound;