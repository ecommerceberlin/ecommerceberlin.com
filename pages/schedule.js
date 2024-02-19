import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  MyHead,
  WidgetBanner
} from 'eventjuicer-site-components';

import { WidgetVisitorNonVip } from '../compositions';
import Head from 'next/head'

const settings = require('../settings').default;

const PageSchedule = () => (

  <>
  <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693818763/Website/og_ebe24_speaking.png" url="/schedule">
      {(data) => <Head>{data}</Head>}
    </MyHead>


  
    <WidgetSchedule />
    {/* <WidgetBanner setting="metaverse" /> */}
    {/* <WidgetVisitor setting="visitor.register"  /> */}
    <WidgetVisitorNonVip />
    <WidgetVideoWithEventInfo />
  </>

)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {props: {}, revalidate: 10}

})

export default connect()(PageSchedule);
