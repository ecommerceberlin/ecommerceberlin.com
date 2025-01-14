import {
  connect,
  WidgetVisitor,
  WidgetAllExhibitorsAvatarlist,
  WidgetSalesMap,
  WidgetRoleButtons,
  reduxWrapper,
  configure,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';

import { WidgetVisitorNonVip } from '../../compositions';

const settings = require('../../settings').default;

const PageExhibitors = () => (

  <>

  <WidgetAllOrCurrentExhibitorsColumnList />
{/* 
  <WidgetSalesMap
    label="exhibitors.map.title"
  /> */}

  <WidgetRoleButtons />
  
  {/* <WidgetVisitor setting="visitor.register" /> */}
  {/* <WidgetVisitorNonVip /> */}

  </>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
   preload : ['exhibitors2'],
  })


})


export default connect()(PageExhibitors);
