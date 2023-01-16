import React from 'react'

import {
  connect,
  Wrapper,
  // WidgetVideoWithEventInfo,
  WidgetRegForm,
  // WidgetRoleButtons,
  // WidgetPresentersAll,
  WidgetIconGrid,
  WidgetFaq,
  reduxWrapper,
  configure,
  WidgetPhotostream,
  WidgetSchedule,
  TwoColsLayout as Section,
  MyTypography,
  Markdown
} from 'eventjuicer-site-components';



import settings from '../../settings';


const PageMasterclasses = () => (

<div>

<Wrapper first label="masterclasses.apply.title">
<Markdown label="masterclasses.apply.description" />
<WidgetFaq setting="masterclasses.faq_participant" />    
</Wrapper>

 

<WidgetSchedule setting="masterclasses.schedule" />

{/* <WidgetPhotostream setting="masterclasses.photostream" /> */}

</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageMasterclasses);
