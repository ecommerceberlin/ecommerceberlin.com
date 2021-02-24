import React from 'react'

import {
  connect,
  reduxWrapper,
  configure,
  WidgetPremiumTickets
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PagePremium = () => (
  
    <WidgetPremiumTickets />
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

  return {
    props : {},
    revalidate: 10
  }

})

export default connect()(PagePremium);
