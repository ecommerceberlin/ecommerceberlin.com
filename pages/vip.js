import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetVisitor,
  WidgetIconGrid,
  WidgetVips,
  WidgetVideoWithEventInfo,
} from 'eventjuicer-site-components';

const settings  = require('../settings').default;


const PageVip = () => (

  <>
  <WidgetVisitor setting="vips.register" />
  <WidgetIconGrid  setting="vips.benefits" />
  <WidgetVips limit={12} mobile={4} />
  <WidgetVideoWithEventInfo />
  <WidgetVisitor setting="vips.register" />
  </>

) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["exhibitors", 'presenters']
  })

})

export default connect()(PageVip);
