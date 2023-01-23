import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetVisitor,
  WidgetIconGrid,
  WidgetVips,
  WidgetVideoWithEventInfo,
  WidgetOrganizerVip,
  WidgetSchedule
} from 'eventjuicer-site-components';

const settings  = require('../../settings').default;


const PageVip = ({code}) => (

  <>
  
  <WidgetOrganizerVip code={code} setting="vips.register" />

  <WidgetIconGrid  setting="vips.benefits" />
  <WidgetVips limit={12} mobile={4} />
  <WidgetVideoWithEventInfo />
  <WidgetSchedule />
  </>

) 

export async function getStaticPaths() {
  
  return {
    paths: [],
    fallback: "blocking" //do not throw 404 when not cached....
  };
   
}

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : []
  })

})

export default connect()(PageVip);