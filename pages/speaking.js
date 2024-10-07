import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVideoWithEventInfo,
  WidgetSpeaking,
  WidgetRoleButtons,
  Markdown,
  WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  WidgetJurors,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetVerticalTimeline,
  TwoColsLayout as Section,
  MyTypography,
  MyHead,
  RecentSubmissions
} from 'eventjuicer-site-components';
import Head from 'next/head'
import NoteAdd from '@material-ui/icons/NoteAdd'
import HowToVote from '@material-ui/icons/HowToVote'
import Public from '@material-ui/icons/Public'
import Mic from '@material-ui/icons/Mic'
import Assessment from '@material-ui/icons/Assessment'
import SpeakersVideo from '../compositions/SpeakersVideo';


const settings = require('../settings').default;



const PageSpeaking = () => (

  <div>

      <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693818763/Website/og_ebe24_speaking.png" url="/speaking">{(data) => <Head>{data}</Head>}</MyHead> 

       <Wrapper first label="cfp.hello.title">
       
       <Section 
        
        left={  <div style={{marginTop: '5rem'}}>

          <MyTypography template="h4" label="cfp.hello.submit" />
         
          <MyTypography template="subtitle1" label="cfp.hello.needs" />
  
          <Markdown label="cfp.hello.details" />
  
    {/* <RecentSubmissions /> */}
  
          </div> }
        right={ 
          <WidgetVerticalTimeline 
          setting="cfptimeline" 
          icons={{
            NoteAdd: NoteAdd,
            HowToVote: HowToVote,
            Public: Public,
            Mic: Mic,
            Assessment: Assessment
          }} />
        }

      leftCentered={true}

      />





  {/* <WidgetSpeaking setting="speakers.callforpapers" options={{
        "categories": [
          'ai',
          'futuretech',
          'shopsystems',
          'logistics',
          'crossborder',
          'fintech',
          'marketing',
          'customerjourney',
          'leadership',
        ]
      }} 

      right={
        <>
        <MyTypography template="subtitle1" label="presenters.contest-rules.title" /> 
        <Markdown label="presenters.contest-rules.description" />
        </>
      }

      summary={<div>asd</div>}

      /> */}


   

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

      
        
  
        <Wrapper first label="speakers.cfpcategories.title">
        <WidgetIconGrid setting="speakers.cfpcategories" icons={{
        }}
        />
        <WidgetFaq setting="speakers.faq" />

        <>
        <MyTypography template="subtitle1" label="presenters.contest-rules.title" /> 
        <Markdown label="presenters.contest-rules.description" />
        </>

        {/* <WidgetIconGrid setting="speakers.benefits" icons={{

        }}/> */}

        {/* <SpeakersVideo /> */}
        </Wrapper>
        <WidgetPresentersAll 
          filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
          label="cfp.featured_presenters"
        />
        </Wrapper>
        <WidgetJurors minToShow={4} limit={50} />
        <WidgetPhotostream setting="cfpphotostream" />
        {/* <WidgetVideoWithEventInfo */}
          {/* //  background="https://res.cloudinary.com/eventjuicer/image/upload/v1552428524/teh_presenters_video.png"
          //  showEventDetails={false}
          //  videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1552428525/teh_presenters_video.mp4"
          title="presenters.claim.title"
          subtitle="presenters.claim.description" */}
        {/* /> */}

        <WidgetRoleButtons first={false} />
       
  </div>
)





export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {
    props: {},
    revalidate: 10
  }

})

export default connect()(PageSpeaking);
