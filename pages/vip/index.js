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
  WidgetRoleButtons,
  WidgetPartners,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';

import settings from '../../settings';


const PageVip = () => (

<div>

<Wrapper first label="vips.programme.title">
<Markdown label="vips.programme.description" />
<WidgetRoleButtons
  first={false}
  setting="vip"
  items={[
    { label: "vip.application.button", url: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1730980806/VIP%20zone/3426_ecommerce-berlin-berlin-tomek-DSC02456-eventshooters--2048px.jpg", target: "/vip-application", width: "50%" },
    { label: "vip.registration.button", url: "https://res.cloudinary.com/ecommerceberlin/image/upload/v1730980803/VIP%20zone/3279_ecommerce-berlin-berlin-tomek-DSC02389-eventshooters--2048px.jpg", target: "/vip/regular", width: "50%" },
  ]}
/>
{/* <WidgetIconGrid setting="vip.benefits" icons={{
}} /> */}
{/* <MyTypography template="title" label="vips.rules.title" />  */}
{/* <Wrapper first label="vips.rules.title"></Wrapper>
<Markdown label="vips.rules.description" />
<WidgetPremiumTickets setting="vipticket" /> */}
  
</Wrapper>
{/* <WidgetIconGrid setting="vip.benefits" icons={{
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
</Wrapper> */}
{/* <WidgetVips limit={12} mobile={4} /> */}
<WidgetPartners
      label="partners.vips.title"
      filter={item =>
        item['scopes(deprecated)'].indexOf('vips') > -1 &&
        item.logotype.indexOf('cloudinary') > -1
      }
      limit={200}
    />
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
