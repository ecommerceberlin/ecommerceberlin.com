import { 
    WidgetRegForm,
    Wrapper,
    MyTypography,
    Markdown
 } from "eventjuicer-site-components";


const WidgetOffer = () => {
        return (
          <Wrapper first label="exhibitor.offer.title">
            <WidgetRegForm
              wrapperProps={{label: null}}
              setting="exhibitor_offer.registration"
            />
          </Wrapper>
        );
      }
      
      export default WidgetOffer;