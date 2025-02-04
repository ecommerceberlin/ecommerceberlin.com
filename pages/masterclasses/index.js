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
  BottomNavi,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';



import settings from '../../settings';
import { WidgetVisitorNonVip } from '../../compositions';


const PageMasterclasses = () => (

<div>

<Wrapper first label="masterclasses.apply.title">
<Markdown label="masterclasses.apply.description" />
<WidgetFaq setting="masterclasses.faq_participant" />    
</Wrapper>


<WidgetSchedule setting="masterclasses.schedule" 
      day="day1" 
      wrapperProps={{
        id: "masterclasses-day1",
        label:"masterclasses.schedule.day1.title",
        secondaryLabel: "masterclasses.day1.subtitle"
      }} 
/>
<WidgetSchedule setting="masterclasses.schedule" 
      day="day2" 
      wrapperProps={{
        id: "masterclasses-day2",
        label:"masterclasses.schedule.day2.title",
        secondaryLabel: "masterclasses.day2.subtitle"
      }} 
/>
<WidgetPhotostream setting="masterclasses.photostream" />
{/* <WidgetVisitorNonVip wrapperProps={{
  label: "masterclasses.public_registration.title"
  }} /> */}
<WidgetSchedule 
      day="day1" 
      wrapperProps={{
        id: "schedule-day1",
        label:"masterclasses.public_schedule.title",
        secondaryLabel: "masterclasses.public_schedule.subtitle"
      }} 
    />

<WidgetSchedule 
      day="day2" 
      wrapperProps={{
        id: "schedule-day2",
        label:"schedule.day2.title"
      }} 
    />
<WidgetAllOrCurrentExhibitorsColumnList />

<BottomNavi targets={[
      {target: "masterclasses-day1", label: "masterclasses.day1.bottomnavi.title"},
      {target: "masterclasses-day2", label: "masterclasses.day2.bottomnavi.title"}
    ]} />

</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageMasterclasses);
