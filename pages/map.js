import {
  connect,
  Bookingmap,
  //WidgetVisitor,
  configure,
  reduxWrapper
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageMap = () => (

  <Bookingmap zoom={3} disabled={true} />

)

 

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {props: {}, revalidate: 1}


})

export default connect()(PageMap);
