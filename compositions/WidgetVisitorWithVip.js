import { 
    Box,
    WidgetVisitor,
    MyButton,
    Translatable,
    // Markdown
 } from "eventjuicer-site-components";

import regFormProps from "./regFormProps";

const VipInvite = () => {

    return (<Box mt={4} >

        <Box m={3} textAlign="center">
        <Translatable label="vips.invite.title" variant="h5" />
        <Translatable label="vips.invite.subtitle" variant="body1" />
        {/* <Markdown label="vips.invite.description" /> */}
        </Box>

     
        <Box textAlign="center" mt={1}>
            <MyButton href="/vip" label="vips.invite.button"  variant="outlined" />
        </Box>
        
    </Box>)
}


const WidgetVisitorWithVip = ({setting="visitor.register", ...restProps}) => {

        return (<WidgetVisitor setting={setting} {...restProps} options={regFormProps} right={ <VipInvite /> } />);

}


export default WidgetVisitorWithVip;