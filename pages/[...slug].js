import React from 'react'

import {
  connect,
  reduxWrapper,
  fetch
} from 'eventjuicer-site-components';

import settings from '../settings';

const Redirect = () => null

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ params }) => {

  //get the list of companies

  const {slug} = params
  const matches = /[^,]+,c,(?<id>[0-9]+)/g.exec(slug)

  if(!matches){
    return {
      redirect: {
        permanent: false,
        destination: "/",
      }
    }
  }

  const {groups: {id}} = matches;
  const resource = `companies/${id}`;
  const request = await fetch(`${settings.system.api}/${resource}`)
  const {data} = await request.json();

  if(!data || !("slug" in data)){
    return {
      redirect: {
        permanent: false,
        destination: "/"
      },
      props: {}
    }
  }
  
  return {
    redirect: {
      permanent: true,
      destination: `/exhibitors/${data.slug}`,
    },
    props: {}
  }

})

export default connect()(Redirect);
