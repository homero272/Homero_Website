import { Typography, Box, Avatar, Card } from "@mui/material";
import { Fragment } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '../images/GithubLogo.png';
import NavBar from "./NavBar";
import LinkedInIcon from '../images/LinkedInLogo.jpg';

const ContactMe = (props) => {
    return (
        <Fragment>
            <Box sx={{
                border: 1,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTJ3bHh5ZmltZzI1ZmZ6dWwwcnBmYzJuNW4xdnRjaHhtNmxrbWJhYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XyJPNKBskIDWR3Md8K/giphy.webp')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'auto',
            }}>
                {/* NavBar remains in its current position */}
                <NavBar />
                
                {/* Center the card */}
                <Box sx={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '50vh', // Adjust height minus NavBar height (assumes NavBar is 64px high)
                    position: 'absolute', // Keeps it centered without affecting NavBar
                    top: '64px', // Pushes the card content below the NavBar
                }}>
                    <Card sx={{
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        maxWidth: '600px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
                        textAlign: 'center',
                    }}>
                        <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
                            Contact Me
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            flexDirection: 'column',
                            alignItems: "flex-start",
                            gap: '2rem',
                        }}>
                            {/* Email Section */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}>
                                <a href="mailto:homeroarellano272@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                                    <Avatar>
                                        <MailOutlineIcon fontSize="large" />
                                    </Avatar>
                                    <Typography variant="caption">Email</Typography>
                                </a>
                                <Typography variant="body1">
                                    <a href="mailto:homeroarellano272@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3f51b5', textDecoration: 'none' }}>
                                        homeroarellano272@gmail.com
                                    </a>
                                </Typography>
                            </Box>

                            {/* GitHub Section */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}>
                                <a href="https://github.com/homero272" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                                    <Avatar src={GitHubIcon} />
                                    <Typography variant="caption">GitHub</Typography>
                                </a>
                                <Typography variant="body1">
                                    <a href="https://github.com/homero272" target="_blank" rel="noopener noreferrer" style={{ color: '#3f51b5', textDecoration: 'none' }}>
                                        homero272
                                    </a>
                                </Typography>
                            </Box>

                            {/* LinkedIn Section */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}>
                                <a href="https://www.linkedin.com/in/homero-arellano-8a146321b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                                    <Avatar src={LinkedInIcon} />
                                    <Typography variant="caption">LinkedIn</Typography>
                                </a>
                                <Typography variant="body1">
                                    <a href="https://www.linkedin.com/in/homero-arellano-8a146321b/" target="_blank" rel="noopener noreferrer" style={{ color: '#3f51b5', textDecoration: 'none' }}>
                                        Homero Arellano
                                    </a>
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Fragment>
    );
};

export default ContactMe;
