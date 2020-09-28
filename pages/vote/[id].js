import {
  connect,
  MyHead as Head,
  WidgetVoteWithLinkedIn,
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

import dynamic from 'next/dynamic'


const settings = require('../../settings').default;

const DynamicWidgetVoteWithLinkedIn = dynamic(
  () => import('../../proxy/WidgetVoteWithLinkedIn'),
  { ssr: false }
)


const PageVote  = ({id}) => (

  
  <div>

  <WidgetVotable
      id={id}
      asPath="/vote"
      vote={<DynamicWidgetVoteWithLinkedIn id={id} />}
      status={<WidgetVoteStatus />}
    />

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
    filter={item => "presentation_description" in item       
    //&& item.presentation_description.length > 10 
    //&& "avatar" in item 
    //&& item.avatar.indexOf('http') > -1 
    //&& "logotype" in item 
    //&& item.logotype.indexOf('http') > -1
    }
    keyword_source="presentation_category"
    keyword={null}
    label="callforpapers.categories.title"
    show_votes={false}
  />

<WidgetVisitor />

 <WidgetVips limit={12} mobile={4} />

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

export const getStaticPaths = () => {

  return {paths: [

  ], fallback: true}

}
 


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    preload : ["callforpapers"]
  })

  const {id} = params;

  return {
    props : {
      id : id
    },
    revalidate: 1
  }

})



export default connect()(PageVote);
