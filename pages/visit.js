import {
  connect,
  //Gallery,

  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetVisitorBenefits,
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

        <WidgetVisitorBenefits label="visitors.benefits.title" />

        <WidgetVisitor label="visitors.register" first />

        {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}

        {/* <WidgetVisitor label="visitors.register" first /> */}

        {/* <Photos>
          {(photos, size) => (
            <Gallery data={photos} size={size} label="event.gallery" />
          )}
        </Photos> */}
  
        </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    preload : ["exhibitors", 'presenters']
  })

})

 
export default connect()(PageVisit);
