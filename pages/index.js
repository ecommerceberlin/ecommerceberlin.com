import React from 'react'

import {
  connect,
  reduxWrapper,
} from 'eventjuicer-site-components';

function PageIndex(){
  return null
}

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ params }) => {

  return {
    redirect: {
      permanent: false,
      destination: "https://ecommerceberlin.com",
    }
  }
    
})


export default connect()(PageIndex);
