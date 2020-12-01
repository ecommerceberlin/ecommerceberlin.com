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

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors", "presenters"]
  })

  return {props: {}, revalidate: 1}
})


export default connect(
  null,
  null,
)(PageAgenda);
