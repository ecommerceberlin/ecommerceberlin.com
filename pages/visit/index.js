import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetIconGrid,
  WidgetSchedule,
  WidgetVips,
  reduxWrapper,
  configure,
  WidgetFeaturedPresenters,
  WidgetBanner
} from 'eventjuicer-site-components';

import { FilteredPresenters } from '../../compositions';
 
const settings = require('../../settings').default;


export const PageVisit = () => (

        <div>
      

        <WidgetVisitor setting="visitor.register" first />

        <WidgetSchedule />

        <WidgetBanner setting="metaverse" />

        <WidgetFeaturedPresenters bio={false} />

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        <FilteredPresenters />

        <WidgetIconGrid setting="visitor.benefits" />

        <WidgetVisitor setting="visitor.register" />

        {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}


        </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : []
  })
  
})

 
export default connect()(PageVisit);
