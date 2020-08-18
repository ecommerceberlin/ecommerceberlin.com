import {
  connect,
  //WidgetGallery,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetSpeaking,
  WidgetSalesMap,
  Markdown,
  WidgetPresentersAll,
  WidgetSpeakerBenefits,
  Faq,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../settings').default;


const PageSpeaking = () => (

  <div>
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
     


          <Wrapper 
              label="cfp.faq.name" 
              descriptionLabel="cfp.faq.description">
          <Faq
            url="/speaking"
            baseLabel="cfp.faq"
            items={[
              {
                label: 'exhibitor-status',
                important: true,
                buttons: [],
              },
              {
            //    baseLabel: 'exhibitors.faq.before_event',
                label: 'fee',
              },
              { label: 'submission-limits' },
              { label: 'co-presenter' },
              { label: 'ranking' },
              { label: 'fair-play' },
              {
              //  baseLabel: 'cfp.faq.before_event',
                label: 'stage',
              },
            ]}
          />
        </Wrapper>

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

        <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        />

        <Wrapper label="presenters.contest-rules.title">
          <Markdown label="presenters.contest-rules.description" />
        </Wrapper>



        <WidgetSalesMap
          label="exhibitors.map.title3"
          secondaryLabel="exhibitors.map.opensales"
 
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

  </div>
)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {
    props: {},
    revalidate: 1
  }

})

export default connect()(PageSpeaking);
