
import React from 'react'

import {
  connect,
  WidgetSalesMap,
  WidgetIconGrid,
  //WidgetVideoWithReviews,
  WidgetFeaturedCompanies,
  WidgetVips,
  Wrapper,
  Faq,
  configure,
  reduxWrapper,
  WidgetAllOrCurrentExhibitorsColumnList,
  MyHead
} from 'eventjuicer-site-components';

import Head from 'next/head'
import WidgetOffer from '../compositions/WidgetOffer';

const settings = require('../settings').default;

const PageExhibit = () => (

 <>

  <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693817519/Website/ebe24_og_home.jpg" url="/exhibit">
      {(data) => <Head>{data}</Head>}
    </MyHead>
  <Wrapper>
  <WidgetSalesMap
    label="exhibitors.map.title"
    secondaryLabel="exhibitors.map.opensales"
 
    first
  />
  <WidgetOffer />
  <WidgetIconGrid setting="exhibitors.benefits" icons={{
  }}/>
    </Wrapper>

  {/* <WidgetVideoWithReviews /> */}

  <WidgetVips limit={12} mobile={4} />

  <Wrapper label="exhibitors.faq.name">
    <Faq
      baseLabel="exhibitors.faq.become"
      items={[
        {
          label: 'included_services',
          important: true,
          buttons: [],
        },
        {
          baseLabel: 'exhibitors.faq.before_event',
          label: 'additional_paid_services',
        },
        { label: 'payment' },
        { label: 'onboarding' },
        { label: 'resignation' },
        { label: 'promo_benefits' },
        {
          baseLabel: 'exhibitors.faq.before_event',
          label: 'public_profile',
        },
      ]}
    />
  </Wrapper>

  <WidgetFeaturedCompanies />

  <WidgetAllOrCurrentExhibitorsColumnList/>

</>

)



export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["bookingmap", "ticketgroups"]
  })

 

})

export default connect()(PageExhibit);
