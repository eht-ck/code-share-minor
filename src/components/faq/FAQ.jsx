import React, { useState } from 'react';
import FAQ_child from "./FAQ_child";

function FAQ() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    
    setOpen(index);
  };

  const faqdata = [
    {
      title: "What is National Cadet Corps ?",
      desc: "The National Cadet Corps (NCC) is a youth development movement. It has enormous potential for nation building. The NCC provides opportunities to the youth of the country for their all-round development with a sense of Duty, Commitment, Dedication, Discipline and Moral Values so that they become able leaders and useful citizens. The NCC provides exposure to the cadets in a wide range of activities., with a distinct emphasis on Social Services, Discipline and Adventure Training. The NCC is open to all regular students of schools and colleges on a voluntary basis. The students have no liability for active military service.",
    },
    {
      title:"What is the nature of the NCC Programme, whether compulsory or voluntary?",
      desc:"voluntary",
    },
    {
      title:"When did National Cadet Corps Come into existence?",
      desc:"The National Cadets Corps came into existence under the National Cadet Corps Act XXXI of 1948 (passed in April, 1948; came into existence on 16th July, 1948).",
    },
    {
      title:"What is the Motto of NCC?",
      desc:"The motto of NCC is:“ UNITY AND DISCIPLINE”.",
    },
    {
      title:"What is the NCC symbol/insignia?",
      desc:"It is the NCC Crest in gold in the middle, with the letters “NCC”; encircled by a wreath of seventeen lotus with a background in Red, Blue and Light blue.",
    },
    {
      title:"What is a NCC Group?",
      desc:"The Directorates are further sub-divided into Groups, which varies according to the size of the state, each under the command of an Officer equivalent to the rank of Colonel (being upgraded to the rank of Brigadier). In all, there are 95 Group HQ’s in the country.",
    },
    {
      title:"What is the composition of a NCC Group?",
      desc:"A Group consists of NCC Battalions, Air Force & Naval units. Other than the Group Commander, each Group HQ has an Administrative Officer and a Training Officer with ranks of either a Lieutenant Colonel or a Major.",
    },
    {
      title:"What is a NCC unit and what is its composition?",
      desc:"The Groups are further sub-divided into Battalions, each commanded by a Lt Col or its equivalent from the other two Services, and an Officer of the rank of Lieutenant Colonel or Major as the Administrative Officer. Each Battalion also has a number of Junior Commissioned Officer’s (JCO’s) and Non-Commissioned Officer’s (NCO’s) known as “Permanent Instructors ( PI) Staff”, senior-most JCO being of the rank of Subedar Major.",
    },
    {
      title:"What is the student in NCC known as?",
      desc:"A student enrolled into NCC is referred to as a “Cadet” [Section 6 of Act XXXI of 1948 refers",
    },
    {
      title:"What is a NCC Troop?",
      desc:"The basic functional sub-unit in schools, having JW/JD Cadets, is a Troop.",
    },
    {
      title:"What are the Teacher’s/Instructors (at the Schools) and Lecturers/ Professors/ Instructors (at the Colleges) with the NCC known as?",
      desc:"They are referred to as: Associate NCC Officers (ANO’s).",
    },
  ];

  return (
    <div className="App mt-16">
      <section className="bg-blue-100 pt-8">
        <h4 className='height-[20px] text-center font-sans text-[40px] font-semibold'>FAQs</h4>
        <div className='flex justify-center'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAAAKCAYAAADb7benAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJUSURBVHgB7ZpLctQwEIa7FUMoNjEniNhSFJPcIEfIklAcIkfgNBSsmBsQTjCmimKLcoNhk0fVxB1JGfkh2xlJ5Ukymf42suWWLT/0u1stBMZCs+Mcdl/vBTdYkAyyIwizuzMOt406r22QA2AO0dg2Ce2iSb2OgvGZ6+c1DzM1djhsi/cdR9WtKrWt6Npnnu31xX88nAb2kRkbdBv05/MEFotTGJXUweqTPHglMMz2oBrbnvh7Ao5NW1HbovcjcoLNQt2iFs7iZKaLA2AYhlmNqjdJDR7r9bhFv0ePEdFDFXEZp6rM23XOYes4XBJWo5bnULaPiIW+hwKynQLffT2vu+r6UZz81MURbC0YEZ5ZVJgZBdpB3IdTwjlEEX1/S8xHXq7d08DDbwoSsFMs8GodUwkyzMwMThq+vhB71cD26Z1uGYyuZNR1mTVAZ5DRKb7//rsWztlHqV/GwbgvI3Ww+qQN3tTByDCbyN0Ydoi8Ldie0ArYrxs2RRllfxsW6gpRHiMwDMNE0hbpjudc7/d53IOJTRyo76U7L1tFYc5hqxwuaat3xT9busSu6ccLPGuG4I37kvZnIWgChEfQisbLKQvnhkN/P+0D088iYpXCo6AFhcQDe3EjP5Po1R2txhHJ46AEcYiNzxzo8u2qxJcVVEQznalL+oLLih/AiSGGYbYRunwTumLA6KWZAsxgR0ygJBZNhmGeK6q960J5nbgVNMUP4cusXN4kg5uXvwCvzY4EZhNRwAyh4GkzUvI0EFyxWD+F6NUdTWKSxyEJ4qv5Q601vQVFCOLV6eAMDgAAAABJRU5ErkJggg==" width="150" alt="underline" className="flex align-center"></img>
        </div>
        <div className='flex justify-center'>
        <div className="px-[40px] flex flex-col">
          {faqdata.map((data, index) => {
            return (
              <FAQ_child
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;