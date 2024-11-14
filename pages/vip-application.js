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
  WidgetPremiumTickets,
  WidgetPartners,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';

import settings from '../settings';


const PageVipApplication = () => (

<div>

{/* <Wrapper first label="vips.programme.title">
<Markdown label="vips.programme.description" /> */}
{/* <WidgetIconGrid setting="vip.benefits" icons={{
}} /> */}
{/* <MyTypography template="title" label="vips.rules.title" />  */}
{/* <Wrapper first label="vips.rules.title"></Wrapper>
<Markdown label="vips.rules.description" /> */}
  
{/* </Wrapper> */}
{/* <WidgetIconGrid setting="vip.benefits" icons={{
}} /> */}
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
<WidgetPremiumTickets setting="vipticket_alt" />

<WidgetPartners
      label="partners.vips.title"
      filter={item =>
        item['scopes(deprecated)'].indexOf('vips') > -1 &&
        item.logotype.indexOf('cloudinary') > -1
      }
      limit={200}
    />
<WidgetPhotostream setting="vipphotostream" overlay={null} />
{/* <WidgetFaq setting="vip.faq" />  */}


</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageVipApplication);
