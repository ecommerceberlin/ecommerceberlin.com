import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  // WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllOrCurrentExhibitorsColumnList,
  WidgetRoleButtons,
  reduxWrapper,
  configure,
  // WidgetBanner,
  WidgetPresenters,
  WidgetSalesMap,
  // WidgetSchedule,
  // WidgetBanner,
  MyHead,
  Wrapper,
  WidgetFeaturedPresenters,
  Box,
  MyButton,
} from 'eventjuicer-site-components';

import {AllPartners, WidgetVisitorNonVip, WidgetVisitorWithVip} from '../compositions'
import RecapVideo from '../compositions/RecapVideo';
import Head from 'next/head'
import WidgetOffer from '../compositions/WidgetOffer';

// import VotingCategories from '../compositions/VotingCategories'

const settings = require('../settings').default;

function PageIndex(){
  return null
}

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ params }) => {

  return {
    redirect: {
      permanent: false,
      destination: "https://ecommerceberlin.com",
    }
  }
    
})


export default connect()(PageIndex);
