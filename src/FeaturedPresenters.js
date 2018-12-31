import {
    WidgetPresenters
} from 'eventjuicer-site-components';


const FeaturedPresenters = (props) => (

    <WidgetPresenters {...props} />
  
)

FeaturedPresenters.defaultProps = {

    filter: function(item) {
        return (
          item.avatar.indexOf("http") > -1 &&
          item.logotype.indexOf("http") > -1 &&
          item.bio.length > 20
        );
    },
    bio : false,
    limit : 8
}

export default FeaturedPresenters;