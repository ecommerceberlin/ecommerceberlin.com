import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetIconGrid,
  // WidgetPresenters,
  // WidgetSchedule,
  // WidgetAllExhibitorsAvatarlist,
  DatasourcePhotos as Photos,
 
  WidgetVips,
  reduxWrapper,
  configure,
  //WidgetFeaturedPresenters
} from 'eventjuicer-site-components';

 
const settings = require('../settings').default;

const PageVisit = () => (

        <div>
      

        <WidgetVisitor label="visitors.register_alt" first />

        {/* <WidgetSchedule /> */}

        {/* <WidgetFeaturedPresenters bio={false} /> */}

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        {/* <WidgetPresenters /> */}

        <WidgetIconGrid setting="visitor.benefits" />

        <WidgetVisitor label="visitors.register" />

        {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}

        {/* <WidgetVisitor label="visitors.register" first /> */}

       
  
        </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors", 'presenters']
  })

  return {props: {}, revalidate: 1}

  
})

 
export default connect()(PageVisit);
