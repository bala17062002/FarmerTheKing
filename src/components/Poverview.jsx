import React from 'react'
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const Poverview = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const location = useLocation()

    return (
        <div>
            <MainHeader />
            <div style={{ backgroundColor: "green", alignContent: "center", marginBottom: "0" }}>
                <div style={{ color: "white", textAlign: "center" }}>ORGANIC PRODUCTS</div>
            </div>
            <div>
                <AppBar position="static" sx={{ backgroundColor: "green" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Organic Products
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
            {/* { <h1>{location.state.names}</h1> } */}
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ backgroundColor: "green", width: "500px", height: "600px", marginTop: "10px", borderRadius: "15px", marginLeft: "60px" }}>
                    <img src={location.state.image} alt={location.state.names} style={{ width: "500px", height: "500px", margin: "40px", borderRadius: "20px" }} />
                </div>
                <div>
                    <h1 style={{ marginLeft: "200px", color: "green" }}> Farm Fresh <span>{location.state.names}</span> <span style={{ fontSize: "20px" }}>(100% Organic products)</span></h1>
                    <h3 style={{ marginLeft: "400px", color: "green" }}>Price:
                        <span>
                            {location.state.cost}
                        </span>
                        per
                        <span style={{ fontSize: "15px" }}>
                            {location.state.Quantity}
                        </span>
                    </h3>
                    <div style={{ backgroundColor: "green", marginLeft: "300px", width: "7cm" }}>
                        <ol>
                            <li>Good Quality</li>
                            <li>Chemical Free</li>
                            <li>Healthy food</li>
                            <li>Easy to order</li>
                            <li>Maintains active-ness</li>

                        </ol>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <div style={{ width: "150px", height: "150px", backgroundColor: "#E1EEDD", marginRight: "20px", borderRadius: "20px" }}>
                            <p style={{ fontSize: "15px", textAlign: "center" }}>
                                The products which are delivered to you are Fram fresh and delivered to you with in short period
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", padding: "200px", marginLeft: "-40px" }}>
                            <Button sx={{ backgroundColor: "green", marginLeft: "5px", width: "5cm" }} variant="contained">Add To cart</Button>
                            <Button sx={{ backgroundColor: "green", marginLeft: "5px", width: "5cm" }} variant="contained">Buy Now</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
