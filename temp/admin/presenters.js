import {
  connect,
  configure,
  reduxWrapper
} from 'eventjuicer-site-components';

import { FilteredPresenters } from '../../compositions';


const settings = require('../../settings').default;


const PageAgendaPreview = () => (
  <FilteredPresenters limit={null} filter={null} />
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })



})
 
export default connect()(PageAgendaPreview);
