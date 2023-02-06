import React from 'react'

import {
  connect,
  Wrapper,
  WidgetVisitor,
  WidgetFaq,
  reduxWrapper,
  configure,
  WidgetSchedule,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';



import settings from '../../settings';


const PageMasterclasses = () => (

<div>

<Wrapper first label="masterclasses.apply.title">
<Markdown label="masterclasses.apply.description" />
<WidgetFaq setting="masterclasses.faq_participant" />    
</Wrapper>


<WidgetSchedule setting="masterclasses.schedule" />

<WidgetVisitor setting="visitor.register" wrapperProps={{
  label: "masterclasses.public_registration.title"
  }} />
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
