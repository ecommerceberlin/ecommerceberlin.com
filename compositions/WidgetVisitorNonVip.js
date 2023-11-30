import { 
    WidgetVisitor,
 } from "eventjuicer-site-components";



const WidgetVisitorNonVip = ({setting="visitor.register", ...restProps}) => {

        return (<WidgetVisitor setting={setting} {...restProps} options={{
            participant_type: [
                "retailer_wholesaler",
                "brand_manufacturer",
                "service_provider",
                "consultant",
                "developer",
                "media",
                "student"
            ],
            company_role: [
                "student",
                "entry",
                "manager",
                "professional",
                "head_of_department",
                "director",
                "c_level",
                "board_member",
                "other"
            ],
            location: [
                "yes",
                "no",
            ]
        }} />);

}

export default WidgetVisitorNonVip;