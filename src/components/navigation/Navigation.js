import React from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const cheeseTypes = [
    "Hard",
    "Soft",
    "Artisan",
    "Fresh-Soft",
    "Fresh-Firm",
    "Semi-Soft",
    "Semi-Hard",
    "Firm",
    "Semi-Firm",
]; // update this with the actual types we can search for

const handleClick = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
};

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container>
                <Toolbar
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Link data-cy="home" to="/">
                        <h1>Brielievers</h1>
                    </Link>
                    <nav>
                        <Button
                            color="inherit"
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleMenuOpen}
                        >
                            Select Cheese Type
                        </Button>
                        <Menu
                            data-cy="cheese-menu"
                            id="cheese-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {cheeseTypes.map((cheeseType) => (
                                <MenuItem
                                    key={cheeseType}
                                    onClick={handleMenuClose}
                                >
                                    <Link
                                        to={`/cheeses/type/${cheeseType.toLowerCase()}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {cheeseType}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                        <NavLink data-cy="signin" to="/login" color="inherit">
                            Sign In
                        </NavLink>
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
