
import {GridBenefits, Wrapper} from 'eventjuicer-site-components'

import {
    FaPoll as Poll,
    FaSearch as Start,
    FaTrophy as Speaker,
} from 'react-icons/fa';

//target - for whom

const _items = [

    {
        icon : Start,
        label :  'assessment',
    },

    {
        icon : Poll,
        label : 'contest'
    },

    {
        icon : Speaker,
        label : 'speaker'
    }

]


const SpeakerBenefits = ({items, ...rest}) => (
    <Wrapper {...rest}>
        <GridBenefits baseLabel="presenters.steps" items={items} />
    </Wrapper>
)

SpeakerBenefits.defaultProps = {
    items : _items
}

export default SpeakerBenefits
