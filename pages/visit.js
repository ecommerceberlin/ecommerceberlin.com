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
  configure
} from 'eventjuicer-site-components';

//import FeaturedPresenters from '../src/FeaturedPresenters';

const settings = require('../settings').default;

const PageVisit = () => (

        <div>
      

        <WidgetVisitor label="visitors.register_alt" first />

        {/* <WidgetSchedule /> */}

        {/* <FeaturedPresenters bio={false} /> */}

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        {/* <WidgetPresenters /> */}

        <WidgetIconGrid setting="visitor.benefits" />

        <WidgetVisitor label="visitors.register" first />

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
