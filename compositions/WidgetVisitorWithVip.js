import { 
    Box,
    WidgetVisitor,
    MyButton,
    Translatable,
    // Markdown
 } from "eventjuicer-site-components";


const VipInvite = () => {

    return (<Box mt={4} >

        <Box m={3} textAlign="center">
        <Translatable label="jakis_label" variant="h5" />
        <Translatable label="jakis_label" variant="body1" />
        {/* <Markdown label="jakis_label" /> */}
        </Box>

     
        <Box textAlign="center" mt={1}>
            <MyButton href="/vip" label="jakis_label"  variant="outlined" />
        </Box>
        
    </Box>)
}


const WidgetVisitorWithVip = ({setting="visitor.register", ...restProps}) => {

        return (<WidgetVisitor setting={setting} {...restProps} right={ <VipInvite /> } />);

}


export default WidgetVisitorWithVip;