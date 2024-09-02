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
  Markdown,
  Wrapper,
 
  Faq,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';
import WidgetReportRequest from '../compositions/WidgetReportRequest';


const settings = require('../settings').default;

const PageAbout = () => (

  <div>

<Wrapper>
  <Wrapper first label="about.title">
  <Markdown label="about.description" />
  </Wrapper>
    {[
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1725263707/Website/about/www_previous_edition.svg'
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1725014399/Website/about/www_visitor_profile.svg'
      },
    ].map(item => (
      <img
        key={item.image}
        src={item.image}
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'block', 
          margin: '0 auto',
        }}
      />
    ))}

    <WidgetReportRequest />

    {[
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1725014398/Website/about/www_visitor_feedback.svg'
      },
      {
        image:
          'https://res.cloudinary.com/ecommerceberlin/image/upload/v1725014425/Website/about/www_exhb_voices.svg'
      },
    ].map(item => (
      <img
        key={item.image}
        src={item.image}
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'block', 
          margin: '0 auto',
        }}
      />
    ))}
    <WidgetReportRequest />
  </Wrapper>


  {/* <WidgetSalesMap
    label="exhibitors.map.title"
    secondaryLabel="exhibitors.map.opensales"
 
  /> */}

  {/* <WidgetVips limit={12} mobile={4} /> */}



  {/* <WidgetIconGrid setting="exhibitors.benefits" icons={{

  }}/> */}



  {/* <WidgetVideoWithReviews /> */}

  {/* <Wrapper label="exhibitors.faq.name">
    
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
  </Wrapper> */}

  {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}

 
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
