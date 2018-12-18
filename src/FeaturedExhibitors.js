
import {
    WidgetFeaturedExhibitors,
    MyLink
} from 'eventjuicer-site-components';

const FeaturedExhibitors = () => (

    <React.Fragment>
          <WidgetFeaturedExhibitors
          center={true}
          label="exhibitors.premium.networking.name"
          filter={function(item) {
            return [1325].indexOf(item.id) > -1;
          }}
        />

        <WidgetFeaturedExhibitors
          label="common.stage-patrons"
          filter={function(item) {
            return [1366, 1023, 1365, 1398].indexOf(item.id) > -1;
          }}
        />

        <WidgetFeaturedExhibitors
          label="exhibitors.list_featured"
          links={[
            <MyLink
              key="all"
              href="/exhibitors"
              label="common.menu.visitors.exhibitors"
              variant="text"
              color="secondary"
            />,
          ]}
        />
    </React.Fragment>
)

export default FeaturedExhibitors