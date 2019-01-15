import {
    WidgetPresenters
} from 'eventjuicer-site-components';


const FeaturedPresenters = (props) => (

    <WidgetPresenters {...props} />
  
)

FeaturedPresenters.defaultProps = {

    filter: function(item) {
        return  [84207,84485,84486,84493,84496,84820,84821,85319].indexOf(item.id) > -1;

        //   item.avatar.indexOf("http") > -1 &&
        //   item.logotype.indexOf("http") > -1 &&
        //   item.bio.length > 20
        
    },
    bio : false,
    limit : 8
}

export default FeaturedPresenters;