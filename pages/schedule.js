import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  MyHead,
  WidgetBanner,
  BottomNavi
} from 'eventjuicer-site-components';

import { WidgetVisitorNonVip } from '../compositions';
import Head from 'next/head'

const settings = require('../settings').default;

const PageSchedule = () => (

  <>
  <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693818763/Website/og_ebe24_speaking.png" url="/schedule">
      {(data) => <Head>{data}</Head>}
    </MyHead>


  
    {/* <WidgetSchedule /> */}

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


    {/* <WidgetBanner setting="metaverse" /> */}
    {/* <WidgetVisitor setting="visitor.register"  /> */}
    {/* <WidgetVisitorNonVip /> */}
    <WidgetVideoWithEventInfo />

    <BottomNavi targets={[
      {target: "schedule-day1", label: "schedule.day1.bottomnavi.title"},
      {target: "schedule-day2", label: "schedule.day2.bottomnavi.title"}
    ]} />
  </>

)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {props: {}, revalidate: 3600}

})

export default connect()(PageSchedule);
