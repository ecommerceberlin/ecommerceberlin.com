
import {
    connect,
    MyLink as Link,
    WidgetVideoWithEventInfo,
    WidgetVisitor,
    WidgetCompany,
    WidgetAllExhibitorsColumnList,
    WidgetSalesMap,
    // WidgetPresenters,
    // WidgetSchedule,
    WidgetRoleButtons,
    configure,
    reduxWrapper,
    fetch
  } from 'eventjuicer-site-components';
  
  const settings = require('../../settings').default;

  const PageCompany = ({slug, dispatch}) => {
    
  return (
    <div>
 
      <WidgetCompany slug={slug} />
  
      <WidgetVideoWithEventInfo />

       <WidgetSalesMap
        label="exhibitors.map.title2"
        secondaryLabel="exhibitors.map.opensales"
      /> 
      
      <WidgetRoleButtons />
      
      <WidgetVisitor secondaryLabel="event.parties" />
  
      {/* <WidgetPresenters /> */}
  
      {/* <WidgetSchedule />*/}
  
      {/* <WidgetVisitor />  */}
  
     
  
      <WidgetAllExhibitorsColumnList />
    </div>
  );
  
  }
  
  

  export async function getStaticPaths() {
  
    const request = await fetch(`${settings.system.api}/company-slugs`)
    const slugs = await request.json();

    if(!"data" in slugs){
      return
    }

    return {
      paths: slugs.data.map(row => ({ 
          params: {
            slug : row.slug
          }
        })),
      fallback: true 
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {
  
    const {slug} = params;

    const company = `companies/${slug}`;

    await configure(store, {
      settings : settings,
      preload : [company, "exhibitors", "bookingmap"]
    })

    return {
        props : {
            slug : "slug" in params ? params.slug : ""
        },
        revalidate : 10
    }
  
  })
  

  
  
  export default connect()(PageCompany);
  