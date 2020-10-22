import {
  connect,
  MyHead,
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
  configure,
  HeadVote
} from 'eventjuicer-site-components';

import dynamic from 'next/dynamic'
import Head from 'next/head'

const settings = require('../../settings').default;

const DynamicWidgetVoteWithLinkedIn = dynamic(
  () => import('../../proxy/WidgetVoteWithLinkedIn'),
  { ssr: false }
)


const PageVote  = ({id}) => (

  
  <div>

  <HeadVote id={id}>{(data) => <Head>{data}</Head>}</HeadVote> 
   
  <WidgetVotable
      id={id}
      asPath={`/vote/${id}`}
      // vote={<DynamicWidgetVoteWithLinkedIn id={id} max_votes={6} />}
      status={<WidgetVoteStatus max_votes={6} />}
      show_votes={false}
    />

  <WidgetCallForPapers
    intro={
      <div style={{ width: '80%' }}>
        <WidgetVoteStatus max_votes={6} />
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
    show_votes={true}
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
