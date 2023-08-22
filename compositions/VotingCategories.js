import React from 'react'
import { WidgetContestantCategories } from 'eventjuicer-site-components';  
import TrendingUp from '@material-ui/icons/TrendingUp';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Power from '@material-ui/icons/Power';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LanguageIcon from '@material-ui/icons/Language';

const settings = require('../settings').default;
  
const VotingCategories  = (props) => ( <WidgetContestantCategories
    limit={350}
    keyword_source="presentation_category"
    label='callforpapers.categories.title'
    show_votes={false}
    icons={{
      conversion: TrendingUp,
      logistics: LocalShippingIcon,
      fintech: EuroSymbol,
      trends: EmojiObjects,
      marketing: VolumeUp,
      it: Power,
      crossborder: LanguageIcon,
    }}
    {...props}
  />) 
  
export default VotingCategories;