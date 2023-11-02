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
  Markdown
} from 'eventjuicer-site-components';

import settings from '../settings';

const PageAmbassador = () => (

<div>

<Wrapper first label="ambassador.title">
<Markdown label="ambassador.description" />
  
</Wrapper>
<WidgetIconGrid setting="ambassador.benefits" icons={{
}} />
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
