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
import { WidgetVisitorNonVip } from '../../compositions';

const settings = require('../../settings').default;

const  PageExhibitorsByKeyword = ({keyword}) => {

  return (
   
    <>
      <WidgetExhibitorsByKeyword keyword={keyword} />

    {/* <WidgetVisitor setting="visitor.register" /> */}
    <WidgetVisitorNonVip />

      {/* <WidgetSalesMap
        label="exhibitors.map.title"
 
      /> */}
     </>
  );

}


  

export async function getStaticPaths() {

  return {
    paths: [], // Let less common paths be generated at runtime
    fallback: 'blocking'
  }
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
      revalidate: 3600
  }

})

export default connect()(PageExhibitorsByKeyword);
