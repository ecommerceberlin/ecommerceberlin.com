import React from 'react'

import {
  connect,
  // MyLink as Link,
  WidgetVisitor,
  WidgetOffers,
  // Wrapper,
  // ColumnList,
  WidgetRoleButtons,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../settings').default;

const PageOffers = () => (

  <>

       <WidgetOffers
          divider={
            <WidgetVisitor setting="visitor.register" />
          }
        />

      <WidgetVisitor setting="visitor.register" />
        <WidgetRoleButtons />
    </>
)
 


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 10}


})


export default connect()(PageOffers);
