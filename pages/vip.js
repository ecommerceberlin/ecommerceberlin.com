import React from 'react'

import { 
  connect, 
  DynamicPage,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings  = require('../settings').default;


const PageVip = () => (

<DynamicPage name="vip" />

) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors", 'presenters']
  })

  return {props: {}, revalidate: 10}


})

export default connect()(PageVip);
