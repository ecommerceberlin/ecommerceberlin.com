
import { WidgetPresenters } from "eventjuicer-site-components"

const FilteredPresenters = ({limit=150, ...props}) => {

    const excluded_id = [
        250095,
        250489,
    ]

    const filter = (item) =>
    !excluded_id.includes(item.id) &&
    (!("limited" in item) || item.limited <= 0);

    const link= (presenter)=>`presenters/${presenter.id}` 

    return  <WidgetPresenters limit={limit} {...props} link={link} filter={filter} />

}

export default FilteredPresenters