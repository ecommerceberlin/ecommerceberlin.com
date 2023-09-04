import { 
    Box,
    MyButton,
    Wrapper,
 } from "eventjuicer-site-components";




const SpeakersVideo = () => {    
    const buttonSize = {
        width: "300px",
        height: "50px",
    };

    return (
        <><Wrapper first label="speakers.video.title">
        <Box textAlign="center" mt={1}>
            <MyButton style={buttonSize} href="https://youtube.com/playlist?list=PLeDETsL2WpbrokMhIN5ILYXmMibKF4BxZ" label="speakers.video.button" variant="outlined" />
        </Box>
        </Wrapper>
        </>
                
    )
}
export default SpeakersVideo;

