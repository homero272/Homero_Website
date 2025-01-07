import { Fragment } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = (props) => {
    return (
        <Fragment>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh", // Ensure the container takes at least full height of the screen
                    backgroundImage: "linear-gradient(to right, #4facfe, #00f2fe)",
                    color: "white",
                    overflow: "auto",
                }}
            >
                {/* Navigation Bar */}
                <NavBar />

                {/* Hero Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        paddingTop: "10vh",
                        paddingBottom: "5vh",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                        Welcome to My Portfolio
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                        A showcase of my projects, skills, and achievements.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ marginTop: "2rem" }}
                        component={Link}
                        to="/projects"
                    >
                        View My Work
                    </Button>
                </Box>

                {/* About & Highlights */}
                <Container maxWidth="lg" sx={{ flex: 1 }}>
                    <Grid container spacing={4}>
                        {/* About Me Section */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    padding: "2rem",
                                    borderRadius: "8px",
                                    color: "black",
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                    About Me
                                </Typography>
                                <Typography sx={{ marginTop: "1rem" }}>
                                    I am a passionate developer skilled in creating engaging web
                                    applications, visualizing automata, and building interactive
                                    tools. Explore my journey and works to learn more!
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Featured Project */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    padding: "2rem",
                                    borderRadius: "8px",
                                    color: "black",
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                    Featured Project
                                </Typography>
                                <Typography sx={{ marginTop: "1rem" }}>
                                    <strong>Project:</strong> DFA/NFA Visualizer
                                </Typography>
                                <Typography sx={{ marginTop: "0.5rem" }}>
                                    A tool to create and analyze automata. Built with React and
                                    JointJS for visualizing complex theoretical concepts.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="medium"
                                    sx={{ marginTop: "1rem" }}
                                    component={Link}
                                    to="/projects"
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* Footer */}
                <Box
                    sx={{
                        textAlign: "center",
                        padding: "2rem",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        marginTop: "auto", 
                    }}
                >
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Homero Arellano. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Fragment>
    );
};

export default HomePage;
