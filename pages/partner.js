import {
  MyHead as Head,
  connect,
  WidgetVisitor,
 
  reduxWrapper,
  configure,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PagePartner = () => (

  <WidgetVisitor label="visitors.register_alt" />
)

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 1}

})



export default connect()(PagePartner);
