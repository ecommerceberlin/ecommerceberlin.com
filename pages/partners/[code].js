import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetIconGrid,
  WidgetVips,
  WidgetVideoWithEventInfo,
  WidgetOrganizerVip,
  WidgetSchedule,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';

import WidgetVideo from '../../compositions/WidgetVideo';

const settings  = require('../../settings').default;


const PageVip = ({code}) => (

  <>
  
  <WidgetOrganizerVip code={code} setting="vips.register" />

  <WidgetIconGrid  setting="vips.benefits" />
  {/* <WidgetVideo videoId="szdcNPfVAlc" /> */}
  <WidgetVips limit={12} mobile={4} />
  <WidgetVideoWithEventInfo />
  <WidgetSchedule 
        day="day1" 
        wrapperProps={{
        id: "schedule-day1",
        label:"schedule.day1.title",
        secondaryLabel: "schedule.day1.subtitle"
        }} 
        />

  <WidgetSchedule 
        day="day2" 
        wrapperProps={{
        id: "schedule-day2",
        label:"schedule.day2.title"
        }} 
        />
  <WidgetAllOrCurrentExhibitorsColumnList />
  </>

) 

export async function getStaticPaths() {
  
  return {
    paths: [],
    fallback: "blocking" //do not throw 404 when not cached....
  };
   
}

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : []
  })

  return {
    props: {},
    revalidate: 36000000
  }

})

export default connect()(PageVip);