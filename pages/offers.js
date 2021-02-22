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
            <WidgetVisitor
              first
              label="visitors.register_alt"
              secondaryLabel="event.parties"
            />
          }
        />

        <WidgetVisitor
          first
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetRoleButtons />
    </>
)
 


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 1}


})


export default connect()(PageOffers);
