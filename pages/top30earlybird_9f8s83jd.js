import {
  connect,
  WidgetSalesMap,
  WidgetIconGrid,
  //WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  //DatasourceExhibitors,
  WidgetVips,
  Wrapper,
  Faq,
  // Avatarlist,
  // Typography,
  // WidthAwareInfo,
  // People,
  // GridBenefits
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageTopEarlyBird = () => (

  <div>

  <WidgetSalesMap
    label="exhibitors.map.title"
    secondaryLabel="exhibitors.map.closedsales"
    disabled={false}
    first={true}
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

  <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />

 
</div>
)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors", "allexhibitors"]
  })

})


export default connect()(PageTopEarlyBird);
