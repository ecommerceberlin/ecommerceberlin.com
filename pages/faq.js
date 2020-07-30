import {
  connect,
  MyHead as Head,
  get as _get,
  Typography,
  Faq,
  FaqLink,
  Wrapper,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';


class PageFaq extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
   
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Wrapper title="FAQ" first>
          <Faq
            url={url}
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
            url={url}
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
            url={url}
            baseLabel="exhibitors.faq.after_event"
            items={[{ label: 'scans' }, { label: 'next_booth_sales' }]}
          />
        </Wrapper>
      </Layout>
    );
  }
}
PageFaq.settings = require('../settings').default;

export default connect()(PageFaq);
