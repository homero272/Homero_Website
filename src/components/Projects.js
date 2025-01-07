import { Typography, Box, Card, CardContent, List, ListItem, ListItemText, Link } from "@mui/material";
import { Fragment } from "react";
import NavBar from "./NavBar";
import projects from "./projectsList"; // Import the projects.js file

const Projects = () => {
    return (
        <Fragment>
            <Box sx={{
                border: 1,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url('https://media3.giphy.com/media/zXmbOaTpbY6mA/100.webp?cid=790b76117lwjo56214junsng07den4yp4pmajgq6rh5btd3r&ep=v1_gifs_search&rid=100.webp&ct=g')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'auto',
            }}>
                {/* Include NavBar */}
                <NavBar />
                <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    Projects
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    alignItems: 'center',
                }}>
                    {projects.map((project, index) => (
                        <Card key={index} sx={{
                            width: '80%',
                            maxWidth: '800px',
                            backgroundColor: 'white',
                            boxShadow: 3,
                        }}>
                            <CardContent>
                                <Typography variant="h5" sx={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    {project.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ marginBottom: '0.5rem' }}>
                                    {project.duration} - {project.organization}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: '1rem', whiteSpace: 'pre-line' }}>
                                    {project.description}
                                </Typography>
                                <Typography variant="body2" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                                    Skills: {project.skills.join(", ")}
                                </Typography>
                                {project.githubLink && project.githubLink.length > 0 && (
                                    <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
                                        GitHub:
                                        <List>
                                            {project.githubLink.map((link, idx) => (
                                                <ListItem key={idx} sx={{ padding: 0 }}>
                                                    <Link href={link} target="_blank" rel="noopener noreferrer" sx={{ color: '#3f51b5', textDecoration: 'none' }}>
                                                        {link}
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Typography>
                                )}

                                <Typography variant="body2">
                                    Contributors: {project.contributors}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Fragment>
    );
};

export default Projects;
