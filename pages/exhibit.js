
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
  reduxWrapper
   
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageExhibit = () => (

 <>

  <WidgetSalesMap
    label="exhibitors.map.title"
    secondaryLabel="exhibitors.map.opensales"
 
    first
  />

  <WidgetIconGrid setting="exhibitors.benefits" icons={{

  }}/>

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

  

</>

)



export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["bookingmap", "ticketgroups"]
  })

 

})

export default connect()(PageExhibit);
