import {
  connect,
  
  WidgetVisitor,
  WidgetPresenters,
 
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageAgenda = () => (
 

  

  <WidgetVisitor label="visitors.register_alt" />
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors", "presenters"]
  })

})


export default connect(
  null,
  null,
)(PageAgenda);
