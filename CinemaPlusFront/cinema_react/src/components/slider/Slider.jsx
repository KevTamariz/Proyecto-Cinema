import React from "react";
import HeroSlider, {Slide} from 'hero-slider';

//Imagenes
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countryClare ="https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const Slider = () =>{
  return(
    <HeroSlider
    
        slidingAnimation="left_to_right"
        orientation ="horizontal"
        initialSlide ={1}
        onBeforeChange={(previousSlide,nextSlide)=> console.log("onBeforeChange",previousSlide,nextSlide) }
        onChange={nextSlide=>console.log("onChange",nextSlide)}
        onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
        style={{
          backgroundColor: "rgba(0,0,0,0,33)"
        }}
        settings={{
          slñidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButton:true,
          autoplayDuration:5000,
          height:"100vh"
        }}
    >
        <Slide
        background={{
            backgroundImage: bogliasco,
            backgroundAttachment:"fixed"
          }}
        />
        <Slide
        background={{
            backgroundImage: countryClare,
            backgroundAttachment:"fixed"
          }}
        />
        <Slide
        background={{
            backgroundImage: giauPass,
            backgroundAttachment:"fixed"
          }}
        />
         <Slide
        background={{
            backgroundImage: craterRock,
            backgroundAttachment:"fixed"
          }}
        />
    </HeroSlider>
  )
}
export default Slider;