import React from 'react'

import { 
  connect, 
  reduxWrapper,
  configure,
  DynamicPage 
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageSchedule = () => (

<DynamicPage name="schedule" />

)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {props: {}, revalidate: 1}

})

export default connect()(PageSchedule);
