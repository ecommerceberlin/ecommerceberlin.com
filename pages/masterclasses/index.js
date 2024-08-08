import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVisitor,
  WidgetFaq,
  WidgetPhotostream,
  reduxWrapper,
  configure,
  WidgetSchedule,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';



import settings from '../../settings';
import { WidgetVisitorNonVip } from '../../compositions';


const PageMasterclasses = () => (

<div>

<Wrapper first label="masterclasses.apply.title">
<Markdown label="masterclasses.apply.description" />
<WidgetFaq setting="masterclasses.faq_participant" />    
<WidgetPhotostream setting="masterclasses.photostream" />
</Wrapper>


<WidgetSchedule setting="masterclasses.schedule" />

{/* <WidgetVisitorNonVip wrapperProps={{
  label: "masterclasses.public_registration.title"
  }} /> */}
<WidgetSchedule
  wrapperProps={{
  label: "masterclasses.public_schedule.title"
  }}
 />
<WidgetAllOrCurrentExhibitorsColumnList />

</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageMasterclasses);
