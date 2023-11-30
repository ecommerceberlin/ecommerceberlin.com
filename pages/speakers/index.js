import { 
  connect, 
  WidgetRegForm,
  WidgetVideoWithEventInfo,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import { FilteredPresenters, WidgetVisitorWithVip } from '../../compositions';

const settings = require('../../settings').default;

const PagePresenters = () => (
  <>
  <FilteredPresenters />
  <WidgetVisitorWithVip />
  <WidgetVideoWithEventInfo />
  </>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

})

export default connect()(PagePresenters);
