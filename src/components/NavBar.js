import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{
            position: "sticky",
            top: 0,
            border: 1,
            background: '#808080', // Gradient background
            height: '10vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 2rem',
            boxSizing: 'border-box',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for depth
            zIndex: 10,
        }}>
            <Typography sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.5rem', // Larger font size for branding
                '&:hover': {
                    transform: 'scale(1.1)', // Slight scale-up on hover
                    transition: 'transform 0.2s ease-in-out',
                }
            }}>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
                    Homero Arellano
                </Link>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{
                display: "flex",
                gap: '1.5rem',
                flexWrap: 'nowrap',
                fontSize: '1rem',
            }}>
                {['Home', 'About', 'Projects', 'Contact'].map((label, idx) => (
                    <Link
                        key={idx}
                        to={label === 'Home' ? '/' : `/${label.toLowerCase().replace(/ /g, '-')}`}
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '5px', // Rounded corners
                            transition: 'background-color 0.3s ease',
                        }}
                        className="link-style"
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2563EB'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        {label}
                    </Link>
                ))}
            </Box>
        </Box>
    );
}

export default NavBar;
