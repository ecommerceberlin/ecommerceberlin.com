import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVisitor,
  WidgetRegForm,
  WidgetFaq,
  WidgetIconGrid,
  reduxWrapper,
  configure,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetPhotostream,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';

import settings from '../settings';

import { Search, Poll } from '@material-ui/icons';

const PageVip = () => (

<div>

<Wrapper first label="vip.programme.title">
<Markdown label="vip.programme.description" />
  
</Wrapper>
<WidgetIconGrid setting="vip.benefits" icons={{
}} />
<Wrapper first label="vip.apply.title">
<WidgetRegForm
  wrapperProps={{label: null}}
  setting="vip.registration"

  right={
    <>
    <MyTypography template="subtitle1" label="vip.rules.title" /> 
    <Markdown label="vip.rules.description" />
    </>
  }
  />
</Wrapper>
<WidgetPhotostream setting="vipphotostream" />
<WidgetFaq setting="vip.faq" /> 


</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageVip);
