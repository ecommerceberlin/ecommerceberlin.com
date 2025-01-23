import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
  WidgetSalesMap
} from 'eventjuicer-site-components';



const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>


    <WidgetSalesMap
        first
        label="exhibitors.map.title"
        secondaryLabel="exhibitors.map.opensales"
        name="hall3"
    />




  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: []
  })

  return {props: {}, revalidate: 3600}

  
})

export default connect()(PageIndex);
