import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetIconGrid,
  WidgetSchedule,
  WidgetVips,
  reduxWrapper,
  configure,
  WidgetFeaturedPresenters,
  WidgetBanner,
  MyHead,
  Box,
  MyButton
} from 'eventjuicer-site-components';

import { FilteredPresenters, WidgetVisitorNonVip, WidgetVisitorWithVip, RegistrationPartner } from '../../compositions';
import Head from 'next/head'

const settings = require('../../settings').default;


export const PageVisit = () => (

    <div style={{ backgroundColor: "white" }}>

        <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693817519/Website/ebe24_og_home.jpg" url="/visit">{(data) => <Head>{data}</Head>}</MyHead> 
  
        {/* <WidgetVisitorWithVip first /> */}
        {/* <WidgetVisitorNonVip first /> */}

        {/* <RegistrationPartner /> */}

        {/* <WidgetVisitor setting="visitor.register" first /> */}

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

        <WidgetFeaturedPresenters filter={(p)=>p.featured} limit={8}/>
        {/* <Box textAlign="center" mt={2}>
          <MyButton
            href="/speakers"
            label="allspeakers.button"
            variant="outlined"
            style={{ width: "300px", height: "50px" }}
          />
        </Box> */}

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        {/* <FilteredPresenters /> */}

        <WidgetIconGrid setting="visitor.benefits" />

        {/* <WidgetVisitor setting="visitor.register" /> */}

        {/* <WidgetVisitorNonVip /> */}

        {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}


        </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : []
  })
  
})

 
export default connect()(PageVisit);
