import { 
  connect, 
  WidgetPresenters,
  WidgetRegForm,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PagePresenters = () => (
  <>
  <WidgetPresenters />
  <WidgetRegForm setting="visitor.register"  />
  <WidgetVideoWithEventInfo />
  </>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {props: {}, revalidate: 10}


})

export default connect()(PagePresenters);
