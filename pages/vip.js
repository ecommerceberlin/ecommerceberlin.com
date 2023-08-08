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
  WidgetVips,
  WidgetPhotostream,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';

import settings from '../settings';

import { Search, Poll } from '@material-ui/icons';

const PageVip = () => (

<div>

<Wrapper first label="vips.programme.title">
<Markdown label="vips.programme.description" />
  
</Wrapper>
<WidgetIconGrid setting="vip.benefits" icons={{
}} />
<Wrapper first label="vips.apply.title">
<WidgetRegForm
  wrapperProps={{label: null}}
  setting="vip.registration"

  right={
    <>
    <MyTypography template="subtitle1" label="vips.rules.title" /> 
    <Markdown label="vips.rules.description" />
    </>
  }
  />
</Wrapper>
<WidgetVips limit={12} mobile={4} />
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
