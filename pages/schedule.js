import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  WidgetVisitor
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageSchedule = () => (

  <>
    <WidgetSchedule />
    <WidgetVisitor setting="visitor.register"  />
    <WidgetVideoWithEventInfo />
  </>

)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {props: {}, revalidate: 10}

})

export default connect()(PageSchedule);
