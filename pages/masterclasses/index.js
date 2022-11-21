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

import { Search, Poll } from '@material-ui/icons';



import settings from '../../settings';


const PageMasterclasses = () => (

<div>
    
{/* <WidgetSchedule setting="masterclasses.schedule" /> */}

<Wrapper first label="masterclasses.hello.title">
<Section   
left={
  <div style={{marginTop: '5rem'}}>
  <MyTypography template="h4" label="masterclasses.hello.submit" />
  <Markdown label="masterclasses.hello.details" />
  </div>
}
right={      
  <WidgetRegForm
  wrapperProps={{label: null}}
  setting="masterclasses.registration"
  />
}
/>
</Wrapper>

<WidgetFaq setting="masterclasses.faq" />     


{/**
 * 
 <Box mt={2} p={2} style={{border: "2px solid red"}}>
  <Markdown label="masterclasses.form.closed" />
  </Box>

*/}

{/* <WidgetIconGrid setting="masterclasses.benefits" icons={{
  FaSearch: Search, 
  FaPoll: Poll, 
  FaTrophy: Poll
}} /> */}

<WidgetPhotostream setting="masterclasses.photostream" />

{/* <WidgetPresentersAll 
filter={(item)=> parseInt(item.featured_cfp) } limit="24" 
label="cfp.featured_presenters"
/> */}


{/* <WidgetVideoWithEventInfo
setting="heroExpo"
title="presenters.claim.title"
subtitle="presenters.claim.description"
/> */}

</div>

)





export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  return await configure(store, {
    settings : settings,
    // preload : ["exhibitors"]
  })


})

export default connect()(PageMasterclasses);
