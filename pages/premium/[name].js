import React from 'react'

import {
  connect,
  WidgetPremiumTicket,
  WidgetPremiumTickets,
  reduxWrapper,
  configure,
  get
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;


const PagePremiumSingle = ({name}) => {


  return (

    <div>
      <WidgetPremiumTicket name={name} resolve={item => item.translation_asset_id.indexOf(name)!==-1} />
      <WidgetPremiumTickets />
  
    </div>
  )

} 


 export async function getStaticPaths() {
  
  return {
    paths: [], // Let less common paths be generated at runtime
    fallback: 'blocking'
  }
   
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  const {params} = props

  await configure(props, {
    settings : settings,
    preload: ['tickets'],
  })

  return {
    props : {
      name : "name" in params ? params.name : ""
    },
    revalidate: 3600
  }

})

export default connect()(PagePremiumSingle);
