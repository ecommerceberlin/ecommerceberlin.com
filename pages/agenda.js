import React from 'react'

import {
  connect,
  WidgetVisitor,
  WidgetPresenters,
 
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageAgenda = () => (
 

  

<WidgetVisitor setting="visitor.register" />
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors", "presenters"]
  })

  return {props: {}, revalidate: 10}
})


export default connect(
  null,
  null,
)(PageAgenda);
