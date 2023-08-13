import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetBanner
} from 'eventjuicer-site-components';

import { WidgetVisitorWithVip } from '../compositions';

const settings = require('../settings').default;

const PageSchedule = () => (

  <>
    <WidgetSchedule />
    {/* <WidgetBanner setting="metaverse" /> */}
    {/* <WidgetVisitor setting="visitor.register"  /> */}
    <WidgetVisitorWithVip />
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
