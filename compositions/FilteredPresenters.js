
import { WidgetPresenters } from "eventjuicer-site-components"

const FilteredPresenters = ({limit=100, ...props}) => {

    const excluded_id = [
        211282,
        213654,
        213643,
        
        //masterclasses
        212618,
        198572,
        197973,
        197847,
        197752,
        197083,
        195574,
        194210,
        191938,
        188972,
        188963,
        188783,
        188772,
        188392,
        183182,
        182500

    ];


    const filter = (item) => !excluded_id.includes(item.id)

    return  <WidgetPresenters limit={limit} {...props} filter={filter} />

}

export default FilteredPresenters