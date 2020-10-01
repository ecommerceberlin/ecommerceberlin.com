import {
  connect,
  MyHead as Head,
  WidgetCallForPapers,
 // WidgetSalesMap,
  WidgetVoteStatus,
  WidgetRoleButtons,
  LayoutMain as Layout,
  MyTypography as Typography,
  Markdown,
  reduxWrapper,
  configure,
  tagsUsed
} from 'eventjuicer-site-components';


const settings = require('../../../settings').default;


const PageVote  = ({category}) => {

    return (
  
        <div>
      
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
          keyword={category}
          label="callforpapers.list.title"
          show_votes={false}
        />
      
       
        <WidgetRoleButtons />
       
        </div>
        
      ) 

}

// export const getStaticPaths = () => {

//   return {paths: [

//   ], fallback: true}

// }
 


export async function getStaticPaths() {

  const request = await fetch(`${settings.system.api}/callforpapers`)
  const callforpapers = await request.json();

  const cats = tagsUsed(callforpapers.data, "presentation_category")
  const paths = cats.map(c => ({params: {category: c}}))

  return {
      paths: paths,
      fallback: true 
    };
}  



export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    preload : ["callforpapers"]
  })

  const {category} = params;

  return {
    props : {
        category : category
    },
    revalidate: 1
  }

})



export default connect()(PageVote);
