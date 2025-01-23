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

import { WidgetVisitorNonVip } from '../compositions';


const settings = require('../settings').default;

const PageOffers = () => (

  <>

       <WidgetOffers
          divider={
            <WidgetVisitorNonVip />
          }
        />

      <WidgetVisitorNonVip />
        <WidgetRoleButtons />
    </>
)
 


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 3600}


})


export default connect()(PageOffers);
