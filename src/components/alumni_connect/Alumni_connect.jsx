/*import React from 'react'
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
*/
/*
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Slider from "../alumni/Slider";
import { Splide } from '@splidejs/react-splide';

const Alumni_connect = () => {
  useEffect(() => {
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
    document.addEventListener('DOMContentLoaded', function () {
      new Splide('.splide').mount();
    });
  }, []);

  return (
    <Container>
      <AlumniSec className="reveal reveal2">
        <h2>NOTABLE ALUMNI</h2>
        <Slider />
      </AlumniSec>
      <SignUpButton>Sign Up</SignUpButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5%;
`;

const AlumniSec = styled.section`
  flex: 1;
  background: white;
  height: auto;
  padding-bottom: 10px;
  margin-bottom: 2%;
  margin-top: 112px;

  h2 {
    text-align: center;
    padding-top: 2.4rem;
    font-size: 4rem;
    font-weight: 700;
    color: #0369a0;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

const SignUpButton = styled.button`
  background-color: #0369a0;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004d75;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    align-self: flex-end;
  }
`;

export default Alumni_connect;
*/
/*
import React from 'react'
import styled from 'styled-components'
import Slider from "../alumni/Slider"
import { Splide } from '@splidejs/react-splide'
import { useEffect } from 'react'
import SignUp from './SignUp'

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
      <SignUp />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  filter: blur(0);
  transition: filter 0.3s ease-out;

  &.blur {
    filter: blur(2px);
  }

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
*/
import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from "../alumni/Slider"
import { Splide } from '@splidejs/react-splide'
import { useEffect } from 'react'
import SignUp from './SignUp'

const Alumni_connect = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const handleSignUpClick = () => {
    setIsSignUpOpen(true)
  }

  const handleSignUpClose = () => {
    setIsSignUpOpen(false)
  }

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
      <SignUpButton onClick={handleSignUpClick}>Sign Up</SignUpButton>
      <SignUp isOpen={isSignUpOpen} onClose={handleSignUpClose} />
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
  overflow: hidden;
  filter: blur(0);
  transition: filter 0.3s ease-out;

  &.blur {
    filter: blur(2px);
  }

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

const SignUpButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem 1rem;
  background-color: #0369a0;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  cursor: pointer;
`

export default Alumni_connect