import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
  WidgetPlanner
} from 'eventjuicer-site-components';

import Head from 'next/head'
const settings = require('../../settings').default;

const PagePlanner = ({email}) => (

        <div>
        <Head></Head>
        <WidgetPlanner email={email} />
        </div>

)



export async function getStaticPaths() {
  
  return {
    paths: [],
    fallback: "blocking" //do not throw 404 when not cached....
  };
   
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings,
    preload : []
  })
  
})

 
export default connect()(PagePlanner);
