import { 
  connect, 
  DynamicPage,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PagePresenters = () => (

  <DynamicPage name="presenters" url="/presenters" />

)

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["presenters"]
  })

})

export default connect()(PagePresenters);
