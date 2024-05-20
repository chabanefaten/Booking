import React from 'react'
import styled from "styled-components"
import logo from '../assets/logo2.png'
export default function Navbar() {
  return (
    <Nav>
        <div className="brand">

            <div className="container">
                <img  className='logo' src={logo} alt="" />
                Tunisian Wonders
            </div>
            <div className="toggle"></div>
        </div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#recommend">Places</a></li>
            {/* <li><a href="#testimonials">Testimonials</a></li> */}

        </ul>
      
    </Nav>
  )
}
const Nav=styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
.brand{
    .container{
          .logo{
            width: 60px;
            height: 60px;
        }
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        font-size: 1.2rem;
        font-weight: 900;
        text-transform: uppercase;  
    }
    .toggle{
        display: none;
    }
}
ul{
    display: flex;
    list-style-type: none;
    gap: 1rem;
    margin-right: 600px;
    li{
        a{
            text-decoration: none;
            color: #50bbb2;
            font-size: 1.6rem;
            transition: 0ms.1s ease-in-out;
            &:hover{
                color: #2afdd6;
            }
        }
        &:first-of-type{
            a{
                color: #059b80;
                font-weight: 900;
            }

        }
    }
}
`;
