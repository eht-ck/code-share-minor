import React from 'react'
import styled from 'styled-components'
import Slider from "../alumni/Slider"
import { Splide } from '@splidejs/react-splide'
import { useEffect } from 'react'

const Alumni_connect = () => {
  useEffect(()=>{
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
}
}
}
window.addEventListener("scroll", reveal);
document.addEventListener( 'DOMContentLoaded', function () {
new Splide( '.splide' ).mount();
} );
  })
  return (
    <BlogSec className="reveal reveal2">
      <H2>NOTABLE ALUMNI</H2>
      <Slider/>
    </BlogSec>
  )
}

const BlogSec=styled.section`
  position: relative;
  background: white;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 10px;
  margin-bottom: 2%;
  margin-top:112px;
  @media (max-width: 600px){
    H2{
      font-size:3rem;
    }
  }
  @media (max-width: 600px) {
    margin-left:4%;
    margin-right:4%;
  
  }
`

const H2=styled.h2`
text-align:center;
padding-top: 2.4rem;
align-items: center;
font-size: 4rem;
font-weight: 700;
--tw-bg-opacity: 1;
color: #0369a0;
`

export default Alumni_connect