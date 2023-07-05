import React from 'react'

import {
  connect,
  WidgetSalesMap,
  WidgetIconGrid,
  //WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  //DatasourceExhibitors,
  WidgetVips,
  DatasourcePhotos,
  Wrapper,
 
  Faq,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../settings').default;

const PageAbout = () => (

  <div>

  <Wrapper>
    {[
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485646/about/ABOUT%202023/INFOGRAFIKA-pocieta-01.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1595594477/about/visitor_growth.svg',
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485646/about/ABOUT%202023/INFOGRAFIKA-pocieta-02.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566475962/about/visitors-profile.svg',
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485648/about/ABOUT%202023/INFOGRAFIKA-pocieta-03.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566476431/about/visitors-branches.svg',
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485646/about/ABOUT%202023/INFOGRAFIKA-pocieta-04.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1597739548/about/theDivisionIntoJobPosition.svg',
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485646/about/ABOUT%202023/INFOGRAFIKA-pocieta-05.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1597392552/about/top_10_nationalities.svg',
      },

      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485648/about/ABOUT%202023/INFOGRAFIKA-pocieta-06.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1566476431/about/exhibitors-nationality.svg',
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485646/about/ABOUT%202023/INFOGRAFIKA-pocieta-07.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1595594477/about/exhibitor_growth.svg',
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1688485646/about/ABOUT%202023/INFOGRAFIKA-pocieta-08.svg'
          // 'https://res.cloudinary.com/ecommerceberlin/image/upload/v1595594477/about/promotion.svg',
      },
    ].map(item => (
      <img
        key={item.image}
        src={item.image}
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      />
    ))}
  </Wrapper>

  {/* <WidgetSalesMap
    label="exhibitors.map.title"
    secondaryLabel="exhibitors.map.opensales"
 
  /> */}

  <WidgetVips limit={12} mobile={4} />



  <WidgetIconGrid setting="exhibitors.benefits" icons={{

  }}/>



  {/* <WidgetVideoWithReviews /> */}

  <Wrapper label="exhibitors.faq.name">
    
    <Faq
      url="/about"
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

 
  </div>

) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors", "allexhibitors"]
  })

  return {props: {}, revalidate: 30}

})


export default connect()(PageAbout);
