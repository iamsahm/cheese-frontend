import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const cheeseTypes = ["Hard", "Soft", "Artisan"]; // update this with the actual types we can search for

const handleClick = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
};

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Link data-cy="home" to="/">
                        <strong>Brielievers</strong>
                    </Link>
                    <nav>
                        <NavLink data-cy="signin" to="/login">
                            Sign In
                        </NavLink>
                        <Button
                            aria-controls="cheese-menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                        >
                            Cheese Types
                        </Button>
                        <Menu
                            data-cy="cheese-menu"
                            id="cheese-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem
                                data-cy="default-cheese-type"
                                onClick={handleMenuClose}
                            >
                                Select Cheese Type
                            </MenuItem>
                            {cheeseTypes.map((cheeseType) => (
                                <MenuItem
                                    key={cheeseType}
                                    onClick={handleMenuClose}
                                >
                                    {cheeseType}
                                </MenuItem>
                            ))}
                        </Menu>
                        <Link data-cy="logout" to="/" onClick={handleClick}>
                            Logout
                        </Link>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavigationBar;
