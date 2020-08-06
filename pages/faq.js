import {
  connect,
  get as _get,
  Typography,
  Faq,
  FaqLink,
  Wrapper, 
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageFaq = () => (

  <Wrapper title="FAQ" first>
  <Faq
    url="/exhibit"
    baseLabel="exhibitors.faq.before_event"
    items={[
      {
        label: 'representatives',
        important: true,
        buttons: [],
      },
      { label: 'additional_paid_services' },
      { label: 'shipping_of_materials' },
      { label: 'standard_offering' },
      { label: 'how_to_promote' },
      { label: 'promo_benefits' },
      { label: 'public_profile' },
    ]}
  />

  <Faq
    url="/exhibit"
    baseLabel="exhibitors.faq.event"
    items={[
      { label: 'hours' },
      { label: 'welcoming' },
      { label: 'badges' },

      { label: 'parking_setupday' },

      { label: 'assembly_caution' },
      { label: 'catering' },
      { label: 'after_party' },

      { label: 'parking_eventday' },
      { label: 'problems_equipment' },
      { label: 'problems_services' },
      { label: 'badge_scanner' },
    ]}
  />

  <Faq
    url="/exhibit"
    baseLabel="exhibitors.faq.after_event"
    items={[{ label: 'scans' }, { label: 'next_booth_sales' }]}
  />

</Wrapper>

)

 


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    // preload: ['allexhibitors', 'companies', 'presenters_all']
  })
  
})

export default connect()(PageFaq);
