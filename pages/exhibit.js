

import {
  connect,
  MyHead as Head,
  MyLink as Link,
  WidgetSalesMap,
  WidgetExhibitorBenefits,
  //WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  //DatasourceExhibitors,
  WidgetVips,
  DatasourcePhotos,
  Wrapper,
  
  Faq,
  // Avatarlist,
  // Typography,
  // WidthAwareInfo,
  // People,
  // GridBenefits
  LayoutMain as Layout,
  resourceFetchRequest,
  END,
  reduxWrapper,
  setSettings
   
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageExhibit = () => (

 <>

  <WidgetSalesMap
    label="exhibitors.map.title"
    secondaryLabel="exhibitors.map.opensales"
 
    first
  />

  <WidgetExhibitorBenefits label="exhibitors.benefits.title" />

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



export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  store.dispatch(setSettings(settings))
  store.dispatch(resourceFetchRequest(['allexhibitors', 'exhibitors']))
  store.dispatch(END)
  await store.sagaTask.toPromise()

})

export default connect()(PageExhibit);
