import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { Slide } from 'react-awesome-reveal';
import Features from './Features'

let clients = [
    {
        name: "Akshat Arsh",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 5,
        disc: `Elevating the idea of unlocking new potentials, we focus on improvising your business to get the most out of it and benefting you. `
    },
    {
        name: "Aditya Tiwary",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 4,
        disc: `Our expertise lies in amplifying your business potential, driving excellence across all facets and propelling you towards remarkable achievements.`
    },
    {
        name: "Shashank Tiwary",
        position: "web developer",
        img_url: "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars: 5,
        disc: `We're dedicated to optimizing the pathways of your business journey, paving the way for efficient processes, enriched experiences, and exceptional outcomes. `
    },
   
]


const aboutUsParagraphs = [
    {
        title: "About Us",
        content: (
            <>
                Welcome to Blackcrab, where innovation knows no limits. Our journey in the realm of information technology began with a simple yet powerful motto: "Make It Possible." As a newly founded IT company, we're on a mission to turn this motto into a reality for businesses worldwide.

                At Blackcrab, we're not just about technology – we're about the endless possibilities it brings. Our team of tech enthusiasts and visionaries is dedicated to crafting solutions that transcend limitations and propel businesses towards their aspirations. From [mention key areas of expertise], we're here to transform challenges into opportunities.

                Our commitment to "Make It Possible" means that we thrive on pushing boundaries and embracing the unknown. With a finger on the pulse of the latest tech trends, we offer bespoke solutions that cater to your unique needs and aspirations. Let us be your partner in harnessing the power of technology to reshape industries, redefine standards, and drive success.

                Join us at Blackcrab as we embark on a journey of discovery, innovation, and limitless potential. Together, we'll make the impossible possible.

            </>
        ),

        
    },
    // You can add more paragraph objects here...
    {
        title: "Founded by a trio of partners:",
        content: (
            <>
              
            </>
        ),

        
    },
];
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))

    return (
        <Container id='client'>
                
            {aboutUsParagraphs.map((paragraph, index) => (
                <Slide direction="up" key={index}>
                    <AboutUs>
                        <h1 className="green">{paragraph.title}</h1>

                    </AboutUs>

                    <AboutUsPara>
                        <p>{paragraph.content}</p>
                    </AboutUsPara>
                 

                    

                </Slide>

            ))}
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
               
            </Testimonials>
            <Features />
        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: center;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }

    

`
const AboutUsPara = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    margin-bottom:3rem;
    font-weight: 500;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    line-height: 2;
`


const AboutUs = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:auto;
    margin-bottom:2rem;
`

const Testimonials = styled.div`
    margin-top: 0rem;
    margin-bottom: 3rem;
    position: relative;
`




