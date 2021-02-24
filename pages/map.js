import React from 'react'

import {
  connect,
  Bookingmap,
  //WidgetVisitor,
  configure,
  reduxWrapper
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageMap = () => (

  <Bookingmap zoom={3} disabled={true} />

)

 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 10}


})

export default connect()(PageMap);
