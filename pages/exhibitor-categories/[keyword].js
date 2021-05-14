import {
  MyLink as Link,
  connect,
  WidgetVisitor,
  WidgetSalesMap,
  WidgetExhibitorsByKeyword,
  reduxWrapper,
  configure,
  fetch,
  tagsUsed
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const  PageExhibitorsByKeyword = ({keyword}) => {

  return (
   
    <>
      <WidgetExhibitorsByKeyword keyword={keyword} />

    <WidgetVisitor setting="visitor.register" />

      <WidgetSalesMap
        label="exhibitors.map.title"
 
      />
     </>
  );

}


  

export async function getStaticPaths() {

  const request = await fetch(`${settings.system.api}/companies`)
  const companies = await request.json();

  const cats = tagsUsed(companies.data, "profile.keywords")
  const paths = cats.map(c => ({params: {keyword: c}}))

  return {
      paths: paths,
      fallback: true 
    };
}  

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  const {params} = props;

  await configure(props, {
    settings: settings,
    preload: ["ticketgroups", "exhibitors", "bookingmap"]
  })

  return {
      props : {
          keyword : "keyword" in params? params.keyword : ""
      },
      revalidate: 30
  }

})

export default connect()(PageExhibitorsByKeyword);
