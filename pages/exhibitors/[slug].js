
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
    fetch,
    MyHead as Head
  } from 'eventjuicer-site-components';
  
  const settings = require('../../settings').default;

  const PageCompany = ({slug, dispatch}) => {
    
  return (
    <div>

      <Head />
 
      <WidgetCompany id={slug} />
  
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
  
  PageCompany.defaultProps = {
    company: {}
  }
  

  export async function getStaticPaths() {
  
    const request = await fetch(`${settings.system.api}/company-slugs`)
    const slugs = await request.json();

    if(!"data" in slugs){
      return
    }


    const filtered = slugs.data.filter(item => item.featured)

    return {
      paths: filtered.map(row => ({ 
          params: {
            slug : row.slug
          }
        })),
      fallback: true //do not throw 404 when not cached....
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {
  
    const {slug} = params;

    const resource = `companies/${slug}`;

    await configure(store, {
      settings : settings,
      preload : [resource, "exhibitors", "bookingmap"]
    })

    return {
        props : {
            slug :slug,
            resource: resource
        },
        revalidate : 1
    }
  
  })
  

  // export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ store, context }) => {
  
  //   const {params, req, res, query} = context;
  //   const {slug} = params;

  //   const resource = `companies/${slug}`;

  //   await configure(store, {
  //     settings : settings,
  //     preload : [resource]
  //   })

  //   return {
  //       props : {
  //           slug :slug,
  //           resource: resource
  //       },
  //       revalidate : 10
  //   }
  
  // })

  
  export default connect()(PageCompany);
  