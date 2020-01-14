import {
  connect,
  LayoutMain as Layout,
  //WidgetGallery,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetSpeaking,
  WidgetSalesMap,
  MyHead as Head,
  Markdown,
  WidgetPresentersAll,
  WidgetSpeakerBenefits,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSpeaking extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      //preload : ["exhibitors", "presenters"],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <Wrapper first label="presenters.competition.title">
          <img
            src="https://res.cloudinary.com/ecommerceberlin/image/upload/v1566860070/cfp-schedule.png"
            style={{ width: '100%', maxWidth: 1600 }}
          />
        </Wrapper>

        {/* <div>

        Why speak at the E-commerce Berlin Expo?
Over 7,000 e-commerce professionals
90% average session capacity
3,000+ CEOs, Directors & Heads of Departments
Relevant visitors, 65% of whom come from retailers & brands


        </div> */}

        {/*

Website Conversion Rate
Marketing in E-commerce
eLogistics / International Expansion
ePayments
IT for E-commerce
New Developments in E-commerce

 */}
        <WidgetSpeaking
          categories={[
            'conversion',
            'marketing',
            'logistics',
            'payments',
            'it',
            'trends',
          ]}
        />

        <WidgetSpeakerBenefits label="presenters.steps.title" />

        <WidgetPresentersAll />

        <Wrapper label="presenters.contest-rules.title">
          <Markdown label="presenters.contest-rules.description" />
        </Wrapper>

        <WidgetSalesMap
          label="exhibitors.map.title3"
          secondaryLabel="exhibitors.map.opensales"
          disabled={false}
          disabledTicketIds={[
            1562,
            1566,
            1557,
            1570,
            1574,
            1578,
            1563,
            1567,
            1571,
            1579,
            1575,
            1581,
          ]}
        />

        <WidgetVideoWithEventInfo
          //  background="https://res.cloudinary.com/eventjuicer/image/upload/v1552428524/teh_presenters_video.png"
          //  showEventDetails={false}
          //  videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1552428525/teh_presenters_video.mp4"
          title="presenters.claim.title"
          subtitle="presenters.claim.description"
        />

        {/* <Photos>{
        (photos, size) => <Gallery data={photos} size={size} label="event.gallery" />
      }</Photos> */}
      </Layout>
    );
  }
}

export default connect()(PageSpeaking);
