import React, { useState , useEffect } from "react";
import "./slider.css"
import data from "./data";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Slider = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return ( <section className = "sectionblogs" >
        <div className = "title" >
        </div> 
        <div className = "section-center" > {
            people.map((item, indexPeople) => {
                const {id,image,name,title,quote,link} = item;
                let position = "nextSlide";
                if (indexPeople === index) {
                    position = "activeSlide";
                }
                if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                    position = "lastSlide";
                }
                return ( <
                    article className = {position}
                    key = {id} >
                    <div className="img-center">
                    <img src = {image} alt = {name} className = "person-img"/>
                    </div>
                    <h4 > { name } 
                    </h4>
                    <p className = "title2" > { title} </p> 
                    <p className = "text2" > {quote} </p>
                    <a href = {link} target = "_blank">
                    <button className = "readMore" > Read More </button></a>
                    </article>
                );
            })
        } <button className = "prev" onClick = {() => setIndex(index - 1)} >
        <ArrowBackIcon/>
        </button> 
        <button className = "next" onClick = { () => setIndex(index + 1)} >
         <ArrowForwardIcon/>
        </button> 
        </div> 
        </section>
    );
};

export default Slider;