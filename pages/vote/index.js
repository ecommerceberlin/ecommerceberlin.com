import {
  connect,
  MyHead as Head,
  WidgetContestantCategories,
 // WidgetSalesMap,
  WidgetVoteStatus,
  WidgetRoleButtons,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;

const PageVote  = () => (

    <div>

  <WidgetContestantCategories
    intro={
      <div style={{ width: '80%' }}>
        <WidgetVoteStatus max_votes={6} />
        <Typography template="benefitsText">
          <Markdown label="callforpapers.voting.general-rules.description" />
        </Typography>
      </div>
    }
    limit={350}
    filter={item => item
    //  item => "presentation_description" in item 
      //&& item.presentation_description.length > 10 
      //&& "avatar" in item 
      //&& item.avatar.indexOf('http') > -1 
      //&& "logotype" in item 
      //&& item.logotype.indexOf('http') > -1
    }
    keyword_source="presentation_category"
    label='callforpapers.categories.title'
    show_votes={false}
    first={true}
  />

 

  <WidgetRoleButtons />
 
  </div>
  
) 

 

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
