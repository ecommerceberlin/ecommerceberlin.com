import React from 'react'

import {
  MyHead as Head,
  connect,
  WidgetVisitor,
 
  reduxWrapper,
  configure,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PagePartner = () => (

  <WidgetVisitor label="visitors.register_alt" />
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 10}

})



export default connect()(PagePartner);
