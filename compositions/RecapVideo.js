import { 
    Box,
    MyButton,
    Wrapper,
 } from "eventjuicer-site-components";




const RecapVideo = () => {    
    const buttonSize = {
        width: "300px",
        height: "50px",
    };

    return (
        <><Wrapper first label="recap.video.title">
        <Box textAlign="center" mt={1}>
            <MyButton style={buttonSize} href="https://youtu.be/WOLzodQd04E?si=R_NYrrSKeDPv-NUH" label="recap.video.button" variant="outlined" />
        </Box>
        </Wrapper>
        </>
                
    )
}
export default RecapVideo;

