import {
  connect,
  MyHead as Head,
 // WidgetSalesMap,
  WidgetVoteStatus,
  // WidgetRoleButtons,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  reduxWrapper,
  configure,
  Centered
} from 'eventjuicer-site-components';


import VotingCategories from '../../compositions/VotingCategories'

const settings = require('../../settings').default;

const PageVote  = () => (

  <VotingCategories intro={
    
    <Centered>
        <div style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto", marginBottom: 50}}>
    <WidgetVoteStatus max_votes={20} />
      <Typography template="benefitsText">
        <Markdown label="callforpapers.voting.general-rules.description" />
      </Typography>
      </div>
      </Centered>
   
  } />) 

 

export const getStaticProps = reduxWrapper.getStaticProps(async ( props ) => {

  await configure(props, {
    settings : settings,
    preload : ["callforpapers"]
  })

  return {
    props : {},
    revalidate: 10
  }

})

export default connect()(PageVote);
