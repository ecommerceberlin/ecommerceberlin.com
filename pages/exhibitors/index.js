import {
  connect,
  WidgetVisitor,
  WidgetAllExhibitorsAvatarlist,
  WidgetSalesMap,
  WidgetRoleButtons,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageExhibitors = () => (

  <>

  <WidgetAllExhibitorsAvatarlist 
    label="exhibitors.list_full" 
    first 
  />

  <WidgetSalesMap
    label="exhibitors.map.title"
  />

  <WidgetRoleButtons />

  <WidgetVisitor 
    label="visitors.are_you_visitor" 
  />

  </>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
   // preload : ['exhibitors', 'allexhibitors', 'bookingmap'],
  })

  return {props: {}, revalidate: 1}


})


export default connect()(PageExhibitors);
