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

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {

  await configure(store, {
    settings : settings,
    preload: ['tickets', 'ticketgroups'],
  })

  return {
    props : {
       
    }
  }

})

export default connect()(PagePremium);
