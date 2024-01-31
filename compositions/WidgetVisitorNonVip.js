import { 
    WidgetVisitor,
 } from "eventjuicer-site-components";

import regFormProps from "./regFormProps";

const WidgetVisitorNonVip = ({setting="visitor.register", ...restProps}) => {

        return (<WidgetVisitor setting={setting} {...restProps} options={regFormProps} />);

}

export default WidgetVisitorNonVip;