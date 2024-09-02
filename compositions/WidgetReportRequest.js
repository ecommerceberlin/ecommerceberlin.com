import { 
    WidgetRegForm,
    Wrapper,
    MyTypography,
    Markdown
 } from "eventjuicer-site-components";


const WidgetReportRequest = () => {
        return (
          <Wrapper first label="report.request.title">
            <WidgetRegForm
              wrapperProps={{label: null}}
              setting="report_request.registration"
            />
          </Wrapper>
        );
      }
      
      export default WidgetReportRequest;