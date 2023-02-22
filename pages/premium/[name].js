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
  
  // const request = await fetch(`${settings.system.api}/tickets`)
  // const tickets = await request.json();

  // const scope = get(settings, "premium.ticketgroups", []);

  // const filtered = tickets.data.filter(t => scope.includes(t.group_id) );
 
  // const paths = filtered.map(row => ({ 
  //   params: {
  //     name : row.translation_asset_id.replace('resources.upgrades.misc.', '')
  //   }
  // }))

  return {
    paths: [], //paths
    fallback: true 
  };
   
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  const {params} = props

  await configure(props, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

  return {
    props : {
      name : "name" in params ? params.name : ""
    },
    revalidate: 10
  }

})

export default connect()(PagePremiumSingle);
