import React from 'react'

import {
  connect,
  Wrapper,
  WidgetRegForm,
  WidgetIconGrid,
  reduxWrapper,
  configure,
  TwoColsLayout as Section,
  MyTypography,
  MyHead,
  Markdown
} from 'eventjuicer-site-components';

import { WidgetAmbassadors } from '../compositions';

import settings from '../settings';
import Head from 'next/head'

const PageAmbassador = () => (

<div>

<MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693817519/Website/ebe24_og_home.jpg" url="/ambassador">{(data) => <Head>{data}</Head>}</MyHead> 

<Wrapper first label="ambassador.title">
<Markdown label="ambassador.description" />
</Wrapper>
<WidgetIconGrid setting="ambassador.benefits" icons={{
}} />


<WidgetAmbassadors />

<Wrapper first label="ambassador.apply.title">
<WidgetRegForm
  wrapperProps={{label: null}}
  setting="ambassador.registration"

  right={
    <>
    <MyTypography template="subtitle1" label="ambassador.rules.title" /> 
    <Markdown label="ambassador.rules.description" />
    </>
  }
  />
</Wrapper>

</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageAmbassador);
