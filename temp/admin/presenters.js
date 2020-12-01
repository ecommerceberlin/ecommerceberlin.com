import {
  connect,
  WidgetPresenters,
  configure,
  reduxWrapper
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageAgendaPreview = () => (
  <WidgetPresenters limit={null} filter={null} link={true} />
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  // return {
  //   props : {
  //     id : "id" in params ? params.id : 0 , 
  //     keyword : "keyword" in params ? params.keyword : ""
  //   }
  // }

})
 
export default connect()(PageAgendaPreview);
