
import React from 'react'

import {
  connect,
  MyHead as Head,
  MyLink as Link,
  WidgetSalesMap,
  WidgetIconGrid,
  //WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  WidgetVips,
  Wrapper,
  Faq,
  // Avatarlist,
  // Typography,
  // WidthAwareInfo,
  // People,
  // GridBenefits
  LayoutMain as Layout,
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

  <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />

  

</>

)



export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["bookingmap", "ticketgroups"]
  })

  return {
    props: {},
    revalidate: 10
  }

})

export default connect()(PageExhibit);
