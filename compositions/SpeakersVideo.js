import { 
    Box,
    MyButton,
    Wrapper,
 } from "eventjuicer-site-components";




const SpeakersVideo = () => {
  
    return (
        <><Wrapper first label="speakers.video.title">
        <Box textAlign="center" mt={1}>
            <MyButton href="https://youtube.com/playlist?list=PLeDETsL2WpbrokMhIN5ILYXmMibKF4BxZ" label="speakers.video.button" variant="outlined" />
        </Box>
        </Wrapper>
        </>
                
    )
}
export default SpeakersVideo;

