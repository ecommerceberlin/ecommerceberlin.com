import {
    WidgetVideoWithEventInfo
  } from 'eventjuicer-site-components';


const Hero = () => (

    <WidgetVideoWithEventInfo 
        videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1544572510/ebe_hero_final.mp4"
        background="https://res.cloudinary.com/eventjuicer/image/upload/v1544572575/ebe_hero_final_poster.jpg"
        overlay="black"
        template="heroGold"
    />
)

export default Hero