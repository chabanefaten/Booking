import React, { useState } from 'react'
import styled from "styled-components";
import Destination1 from "../assets/destination/dest1.jpg";
import Destination2 from "../assets/destination/dest2.jpg";
import Destination3 from "../assets/destination/dest3.jpg";
import Destination4 from "../assets/destination/dest4.jpg";
import Destination5 from "../assets/destination/dest5.jpg";
import Destination6 from "../assets/destination/dest6.jpg";
import info1 from "../assets/info/info1.png";
import info2 from "../assets/info/info2.png";
import info3 from "../assets/info/info3.png";
import { Link } from 'react-router-dom';
export default function Recommend() {
    const data = [
        {
          image: Destination1,
          title: "Nabeul",
          subTitle: "Nabeul, officialy thr Republic of Singapore, is a",
          cost: "38,800",
          duration: "Approx 2 night trip",
        },
        {
          image: Destination2,
          title: "Mahdia",
          subTitle: "Mahdia is a  country. It's known for",
          cost: "54,200",
          duration: "Approx 2 night trip",
        },
        {
          image: Destination3,
          title: "Djerba",
          subTitle: "Djerba,  l'ile des réves ",
          cost: "45,500",
          duration: "Approx 2 night trip",
        },
        {
          image: Destination4,
          title: "Sousse",
          subTitle: "Sousse is an country in the",
          cost: "24,100",
          duration: "Approx 1 night trip",
        },
        {
          image: Destination5,
          title: "Monastir",
          subTitle: "Monastir is a ",
          cost: "95,400",
          duration: "Approx 2 night 2 day trip",
        },
        {
          image: Destination6,
          title: "Hammamet",
          subTitle: "Hammamet , the medina  and the ",
          cost: "38,800",
          duration: "Approx 3 night 2 day trip",
        },
      ];
      const [active,setactive]=useState(1)
  return (
    <Section id="recommend">
       <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="destinations">
        {data.map((destination,index) => {
          return (
             
            <div className="destination">
              <img src={destination.image} alt="" />
              <Link to={`/destination/${index + 1}`} key={index} style={{ textDecoration: 'none', color:'#01A7BE' }}>
               <h3>{destination.title}</h3>
             </Link>


              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
                    
            </div>
      
          );
        })}
      </div>
    </Section>
  )
}
const Section=styled.section`
 padding: 2rem 0;
 margin-top: 50px;
  .title {
    text-align: center;
    text-decoration: none;
  }
  .destinations {
    margin-top: 50px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        height: 60%;
        border-radius: 20px;
        object-fit: cover;

      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #80bdffd1;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
      h3{
              text-decoration:none;
      }
    }
     .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
 
`
