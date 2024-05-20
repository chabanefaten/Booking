import React from 'react'
import styled from "styled-components"
import video from "../assets/Tunisia.mp4"
export default function Hero() {
  return (
    <Section id='hero'>
      <div className="background">
      <Video src={video} autoPlay loop muted />
      </div>
      <div className="content">
        <div className="title">
            <h1>EXPLORE TUNISIA </h1>
            <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Dolore dolor inventore similique 
                placeat nisi eaque veniam culpa asperiores esse quaerat! Vel praesentium
                 reprehenderit doloribus dolorum odit similique repellat sunt eos.</p>
        </div>
        <div className="search">
            <div className="container">
                <label htmlFor="">were you want to go </label>
                <input type="text" placeholder='Search your location ' />
            </div>
            <div className="container">
                <label htmlFor="">check-in </label>
                <input type="date"  />
            </div>
            <div className="container">
                <label htmlFor="">check-out </label>
                <input type="date"  />
            </div>
            <button>Explore Now </button>
        </div>
      </div>
    </Section>
  )
}
const Section=styled.section`
position: relative;
margin-top:2rem;
width: 100%;
height: 0%;
.background{
    width: 100%;
    filter: brightness(70%);
    
}
.content{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title{
        color: white;
        .h1{
            font-size: 3rem;
            letter-spacing: 0.2rem;
        }
        p{
                text-align: center;
                padding: 0 30vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
        }
    }
    .search{
        display: flex;
        background-color: #ffffffce;
        padding: 0.5rem;
        border-radius: 0.5rem;
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 1.5rem;
            label{
                font-size: 1.1rem;
                color: #080892;
            }
            input{
                background-color: transparent;
                border: none;
                text-align: center;
                color: black;
                &[type="date"]{
                    padding-left: 3rem;
                }
                &::placeholder{
                    color: black;
                }
            }
           
        } 
        button{
                padding: 1rem;
                cursor: pointer;
                border-radius: 0.3rem;
                border: none;
                color: white;
                background-color: #308bd6;
            }


    }
}
`
const Video = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
`;
