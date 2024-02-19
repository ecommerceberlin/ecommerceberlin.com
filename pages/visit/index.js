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
  MyHead
} from 'eventjuicer-site-components';

import { FilteredPresenters, WidgetVisitorNonVip, WidgetVisitorWithVip, RegistrationPartner } from '../../compositions';
import Head from 'next/head'

const settings = require('../../settings').default;


export const PageVisit = () => (

        <div>

        <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693817519/Website/ebe24_og_home.jpg" url="/visit">{(data) => <Head>{data}</Head>}</MyHead> 
  
        <WidgetVisitorNonVip first />

        <RegistrationPartner />

        {/* <WidgetVisitor setting="visitor.register" first /> */}

        <WidgetSchedule />

        {/* <WidgetBanner setting="metaverse" /> */}

        <WidgetFeaturedPresenters bio={false} />

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        {/* <FilteredPresenters /> */}

        <WidgetIconGrid setting="visitor.benefits" />

        {/* <WidgetVisitor setting="visitor.register" /> */}

        <WidgetVisitorNonVip />

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
