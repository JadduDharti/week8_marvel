import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import marvelImage from "../../assets/images/marvel2.jpg"

// Below Imports
import { Link } from 'react-router-dom';

interface Props {
    title: string;
}

// Create styled component with style components

const Root = styled("div")({
    backgroundColor: "#111",
    color: "#fff",
    fontFamily: "Helvetica, Arial, sans-serif",
    minHeight: "100vh",
  });
  
  const NavbarContainer = styled("nav")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  });
  
  const Logo = styled("h1")({
    margin: 0,
    fontSize: "2rem",
    fontWeight: "bold",
    marginRight: "5%"
  });
  
  const LogoA = styled("a")({
    color: "#fff",
    textDecoration: "none",
    display: "inline-block",
    padding: "0.5rem 1rem",
    backgroundColor: "#f44336",
    borderRadius: "4px",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      backgroundColor: "#e53935",
    },
  });
  
  const LogoNavigation = styled("ul")({
    listStyle: "none",
    display: "flex",
    margin: 0,
  });
  
  const NavA = styled(Link)({
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      backgroundColor: "rgba(255,255,255,0.2)",
    },
  });
  
  const Main = styled("main")({
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${marvelImage});`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
  });
  
  const MainText = styled("div")({
    textAlign: "center",
    position: "absolute",
    top: "90%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
  });
  
  


export const Home = (props: Props) => {
    return (
        // <div>
        //     Hello World..!! This is our {props.title}
        // </div>

        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href="#">MARVEL</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to="/signin">Sign In</NavA>
                    </li>
                    <li>
                        <NavA to="/signup">Sign Up</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>Look At Your Favourite</Button>
                </MainText>
            </Main>

        </Root>
    )
}