import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
} from 'eventjuicer-site-components';

import { PageVisit } from '.';
 
const settings = require('../../settings').default;

export async function getStaticPaths() {
  
  return {
    paths: [],
    fallback: "blocking"
  };
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  return await configure(props, {
    settings : settings,
    preload : []
  })
})

 
export default connect()(PageVisit);
