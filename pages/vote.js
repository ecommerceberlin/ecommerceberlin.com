import {
  connect,
  MyHead as Head,
  VoteWithLinkedIn,
  WidgetVisitor,
  WidgetCallForPapers,
  WidgetVotable,
 // WidgetSalesMap,
  WidgetVoteStatus,
  WidgetRoleButtons,
  LayoutMain as Layout,
  WidgetVips,
  MyTypography as Typography,
  Markdown,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../settings').default;


const PageVote  = ({id, keyword}) => (

  
  <div>

  {id && (
    <WidgetVotable
      id={id}
      asPath={asPath}
      vote={<VoteWithLinkedIn id={id} />}
      status={<WidgetVoteStatus />}
    />
  )}

  <WidgetCallForPapers
    intro={
      <div style={{ width: '80%' }}>
        <WidgetVoteStatus />
        <Typography template="benefitsText">
          <Markdown label="callforpapers.voting.general-rules.description" />
        </Typography>
      </div>
    }
    limit={350}
    filter={item => "presentation_description" in item &&
      item.presentation_description.length > 10 &&
      "avatar" in item &&
      item.avatar.indexOf('http') > -1 &&
      "logotype" in item && 
      item.logotype.indexOf('http') > -1
    }
    keyword_source="presentation_category"
    keyword={keyword}
    label={
      keyword
        ? 'callforpapers.list.title'
        : 'callforpapers.categories.title'
    }
    show_votes={true}
  />

  {id && <WidgetVisitor />}

  {id && <WidgetVips limit={12} mobile={4} />}

  {/* {id && (
    <WidgetSalesMap
      label="exhibitors.map.title2"
      secondaryLabel="exhibitors.map.opensales"
      disabled={false}
    />
  )} */}

  <WidgetRoleButtons />
 
  </div>
  
) 

 


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    preload : ["callforpapers"]
  })

  return {
    props : {
      id : "id" in params ? params.id : 0 , 
      keyword : "keyword" in params ? params.keyword : ""
    }
  }

})



export default connect()(PageVote);
