
import {WidgetPartners} from 'eventjuicer-site-components'


const AllPartners = () => {


    return ( <><WidgetPartners
      label="partners.association.title"
      filter={item =>
        item['scopes(deprecated)'].indexOf('association') > -1 &&
        item.logotype.indexOf('cloudinary') > -1
      }
      limit={50}
    />
  
    <WidgetPartners
      label="partners.media.title"
      filter={item =>
        item['scopes(deprecated)'].indexOf('media') > -1 &&
        item.logotype.indexOf('cloudinary') > -1
      }
      limit={50}
    />
  
    <WidgetPartners
      label="partners.community.title"
      filter={item =>
        item['scopes(deprecated)'].indexOf('community') > -1 &&
        item.logotype.indexOf('cloudinary') > -1
      }
      limit={50}
    />
  
    <WidgetPartners
      label="partners.communication.title"
      filter={item =>
        item['scopes(deprecated)'].indexOf('communication') > -1 &&
        item.logotype.indexOf('cloudinary') > -1
      }
      center={true}
      limit={50}
    /> 
    </>
    )

}


export default AllPartners