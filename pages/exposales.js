import {
  connect,
  WidgetSalesMap,
  WidgetIconGrid,
  WidgetFeaturedCompanies,
  WidgetVips,
  Wrapper,
  Faq,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageTopEarlyBird = () => (

  <div>

  <WidgetSalesMap
    wrapperProps={{
      label: "exhibitors.map.exposales_title",
      secondaryLabel: "exhibitors.map.exposales_description"
    }}
    disabled={false}
    first={true}
    setting="bookingmap_exposales"
  />


  <WidgetIconGrid setting="exhibitors.benefits" icons={{

  }}/>

  {/* <WidgetVideoWithReviews /> */}

  <WidgetVips limit={12} mobile={4} />

  <Wrapper label="exhibitors.faq.name">
    <Faq
      url="/exhibit"
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

 
</div>
)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["bookingmap"]
  })

  return {
    props: {},
    revalidate: 3600000
  }

})


export default connect()(PageTopEarlyBird);
