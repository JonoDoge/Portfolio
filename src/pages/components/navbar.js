import React, { Component } from "react"
import styled from "styled-components"

const Body = styled.ul`
    background-color:#d1e7ed;
    padding-top:20px;
    padding-bottom:20px;
    font-size: 20px;
    list-style-type:none;
    border: 2px solid #b8c0c2;
`;

const Link = styled.a`
    color:white;
    text-decoration:none;
`;

const Home = styled.li`
    
    padding: 5px 25px 5px 25px;
    display:inline;
    text-decoration:none;
    color:white;
    border: 2px solid white;
    border-radius:10px;
    background-color:#66a2ad;

    &:hover 
    {
    background:#87d9e8;
    ${Link}{
      color:#043b45;  
         }
    }
`;

const Items = styled.li`
margin: 0px 10px 0px 10px;
   padding: 5px 25px 5px 25px;
    display:inline;
    text-decoration:none;
    color:white;
    border: 2px solid white;
    border-radius:10px;
    background-color:#66a2ad;

    &:hover 
    {
    background:#87d9e8;
    ${Link}{
      color:#043b45;  
         }
    }
`;

const NavSpacing = styled.div`
    padding-left:60%;
    display:inline;  
`;

class NavBar extends Component {

    render() {
    return(
        <Body>
        <Home><Link href="index.js">Home</Link></Home>
        <NavSpacing>
        <Items><Link href="projects.js">Projects</Link></Items>
        <Items><Link href="experience.js">Experience</Link></Items>
        <Items><Link href="interests.js">Interests</Link></Items>
        </NavSpacing>
        </Body>
    )
    }
}

export default NavBar;