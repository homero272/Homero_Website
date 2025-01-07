import { Typography, Box, Card, CardContent, List, ListItem, Divider } from "@mui/material";
import { Fragment } from "react";
import NavBar from "./NavBar";
import WorkIcon from "@mui/icons-material/Work";
import InterestsIcon from "@mui/icons-material/Interests";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from '@mui/icons-material/School';

const AboutMe = () => {
    const skillsArray = [
        "C++", "React Framework", "HTML", "JavaScript", "CSS", "Python", "Linux",
        "Power Apps", ".NET Framework"
    ];

    return (
        <Fragment>
            <Box sx={{
                width: '100vw',
                height: '100vh',
                overflow: 'auto',
                backgroundImage: `url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJ2dmx2dW1xeTNyOWV2aXNlMGR1NHI3MnQ4cHE3NHMwMnQybHNiMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26tn33aiTi1jkl6H6/giphy.gif')`, // Replace with your GIF URL
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
            }}>
                {/* Overlay for readability */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                    zIndex: 1,
                }}></Box>
                
                <NavBar />
                
                <Box sx={{
                    position: 'relative',
                    zIndex: 2, 
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                }}>
                    {/* Background Section */}
                    <Card sx={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        },
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                                <WorkIcon color="primary" />
                                <Typography variant="h4" fontWeight="bold">
                                    Background
                                </Typography>
                            </Box>
                            <Typography variant="body1">
                                Hello, I'm Homero Arellano. I'm a passionate computer science student and 
                                enjoy creating user-friendly and efficient applications. I am currently entering my senior
                                year at Sonoma State. In my spare time, I love learning 
                                new technologies, exploring the outdoors, and spending time with family and 
                                friends.
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Interests Section */}
                    <Card sx={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        },
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                                <InterestsIcon color="secondary" />
                                <Typography variant="h4" fontWeight="bold">
                                    Interests
                                </Typography>
                            </Box>
                            <Typography variant="body1">
                                I have a strong interest in exploring the ever-evolving world of technology. 
                                My interests range from web development to software engineering and artificial 
                                intelligence. Outside of coding, I enjoy hiking, photography, and exploring nature.
                            </Typography>
                        </CardContent>
                    </Card>

 {/* Education & Honors Section */}
 <Box sx={{ padding: "4rem 0" }}>
                    {/* Education Information */}
                    <Card sx={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                                <SchoolIcon color="primary" />
                                <Typography variant="h4" fontWeight="bold">
                                    Education
                                </Typography>
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Sonoma State University
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                Bachelor's degree, Computer Science (2021 - 2025)
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Grade: 3.974 GPA
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                                <strong>Skills:</strong> HTML, C++, JavaScript, React.js, and more
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Honors & Awards */}
                    <Card sx={{
                        maxWidth: '600px',
                        margin: '2rem auto',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        },
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Honors & Awards
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                Dean's List x7 (Issued by Sonoma State University - School of Science and Technology)
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Awarded for achieving a GPA greater than 3.50 during all semesters at Sonoma State University.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                    {/* Experience/Skills Section */}
                    <Card sx={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                        },
                    }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
                                <CodeIcon color="success" />
                                <Typography variant="h4" fontWeight="bold">
                                    Experience & Skills
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Intern Developer - Information Systems Department Sonoma County 
                                (Oct. 2023 - Aug. 2024)
                            </Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant="h6" fontWeight="bold">
                                Skills:
                            </Typography>
                            <List>
                                {skillsArray.map((skill, index) => (
                                    <ListItem key={index} sx={{ display: 'list-item', paddingLeft: 0 }}>
                                        <Typography variant="body2">{skill}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Fragment>
    );
};

export default AboutMe;
