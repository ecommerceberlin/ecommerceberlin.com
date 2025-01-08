import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetRoleButtons,
  reduxWrapper,
  configure,
  WidgetBanner
} from 'eventjuicer-site-components';

import { FilteredPresenters, AllPartners } from '../compositions';

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>

  <FilteredPresenters link={(presenter)=>`presenters/${presenter.id}`} />
  
  <WidgetVideoWithEventInfo />

  <WidgetFeaturedCompanies />

  <AllPartners />

  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: ['presenters']
  })

  return {props: {}, revalidate: 10}

  
})

export default connect()(PageIndex);
