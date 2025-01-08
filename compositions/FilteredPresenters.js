
import { WidgetPresenters } from "eventjuicer-site-components"

const FilteredPresenters = ({limit=100, ...props}) => {


    const filter = (item) => !("limited" in item) || !item.limited > 0

    const link= (presenter)=>`presenters/${presenter.id}` 

    return  <WidgetPresenters limit={limit} {...props} link={link} filter={filter} />

}

export default FilteredPresenters