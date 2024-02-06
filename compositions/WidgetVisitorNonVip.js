import { 
    WidgetVisitor,
 } from "eventjuicer-site-components";


const WidgetVisitorNonVip = ({setting="visitor.register", ...restProps}) => {

        return (<WidgetVisitor setting={setting} {...restProps} />);

}

export default WidgetVisitorNonVip;