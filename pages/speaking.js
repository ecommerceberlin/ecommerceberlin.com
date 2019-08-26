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
} from 'eventjuicer-site-components';

import SpeakerBenefits from '../compositions/SpeakerBenefits';

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

        <WidgetSpeaking />

        <SpeakerBenefits label="presenters.steps.title" />

        <Wrapper label="presenters.contest-rules.title">
          <Markdown>{`
* There are 6 main categories – the presentation that receives the highest number of votes in a given category will be accepted to the Agenda

* The results of the Call for Papers are dependent upon the votes of the online users – each user has 6 votes to cast, one per each category

* To cast a vote, a user has to have a Facebook account

* Once the Call for Papers submissions have been closed, the organisers can cancel down a given category or/and create a new one if the number or quality of the presentation submissions requires any of these actions

* Each company can submit only one presentation proposal in a given category

* Each company can give the maximum of one presentation – if a company wins in more than one category, it has to pick one presentation to deliver. The decision has to be made within a deadline set by the organisers. In this event, in the other category, another company with the second-highest number of votes becomes the winner;

* If a company wins but there is a suspicion regarding the fair participants activity in the contest the Organiser may cancel the submission during or after the contest. In this event, in the other category, another company with the second-highest number of votes becomes the winner

* Submissions can be edited until the deadline, i.e. until the 27th September, 11:59 AM

* By submitting the presentation, the applicant accepts that in the event of winning the Call For Papers contest, they will have to sign a relevant agreement with the organisers to be able to give the presentation

* For information regarding processing CFP participants' personal data read here

* For information regarding processing voters and visitors, personal data read here

* Participation in the Call for Papers and delivering a presentation are FREE OF CHARGE
`}</Markdown>
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
