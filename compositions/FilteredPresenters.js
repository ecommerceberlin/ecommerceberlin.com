
import { WidgetPresenters } from "eventjuicer-site-components"

const FilteredPresenters = ({limit=100, ...props}) => {

    const excluded_id = [
        166323,
        163534,
        163533,
        166265,
        
        //masterclasses
        161879,
        161709,
        155652,
        152998,
        152882,
        152808,
        152794,
        152770,
        152545,
        152121

    ];


    const filter = (item) => !excluded_id.includes(item.id)

    return  <WidgetPresenters limit={limit} {...props} filter={filter} />

}

export default FilteredPresenters