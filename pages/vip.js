import { 
  connect, 
  DynamicPage,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings  = require('../settings').default;


const PageVip = () => (

<DynamicPage name="vip" />

) 

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors", 'presenters']
  })

})

export default connect()(PageVip);
