import React from 'react'
import { WidgetContestantCategories } from 'eventjuicer-site-components';  
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import VolumeUp from '@material-ui/icons/VolumeUp';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LanguageIcon from '@material-ui/icons/Language';
import MemoryIcon from '@material-ui/icons/Memory';
import AppsIcon from '@material-ui/icons/Apps';
import TimelineIcon from '@material-ui/icons/Timeline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const settings = require('../settings').default;
  
const VotingCategories  = (props) => ( <WidgetContestantCategories
    limit={350}
    keyword_source="presentation_category"
    label='callforpapers.categories.title'
    show_votes={false}
    icons={{
      ai: MemoryIcon,
      futuretech: EmojiObjects,
      shopsystems: AppsIcon,
      logistics: LocalShippingIcon,
      crossborder: LanguageIcon,
      fintech: EuroSymbol,
      marketing: VolumeUp,
      customerjourney: TimelineIcon,
      leadership: SupervisorAccountIcon,
    }}
    {...props}
  />) 
  
export default VotingCategories;