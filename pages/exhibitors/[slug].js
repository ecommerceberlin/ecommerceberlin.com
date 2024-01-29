
import {
    connect,
    MyLink as Link,
    WidgetVideoWithEventInfo,
    WidgetVisitor,
    WidgetCompany,
    WidgetAllExhibitorsColumnList,
    // WidgetSalesMap,
    WidgetSchedule,
    WidgetRoleButtons,
    configure,
    reduxWrapper,
    fetch,
    HeadCompany,
    WidgetCompanyMeetup,
    WidgetCompanyVip,
    Promoninja
  } from 'eventjuicer-site-components';
  
  import Head from 'next/head'
import { WidgetVisitorNonVip } from '../../compositions';

  const settings = require('../../settings').default;

  const PageCompany = ({slug, dispatch}) => {
    
  return (
    <div>

      <HeadCompany slug={slug}>{(data) => <Head>{data}</Head>}</HeadCompany> 
 
      <WidgetCompanyMeetup />
      <WidgetCompanyVip regFormProps={{
        options: {
          participant_type: [
              "retailer_wholesaler",
              "brand_manufacturer",
              "service_provider",
              "consultant",
              "developer",
              "media",
              "student"
          ],
          company_role: [
              "student",
              "entry",
              "manager",
              "professional",
              "head_of_department",
              "director",
              "c_level",
              "board_member",
              "other"
          ],
          location: [
              "yes",
              "no",
          ]}
      }}/>

      <WidgetCompany slug={slug} />

      {/* <WidgetVisitor setting="visitor.register" /> */}
      <WidgetVisitorNonVip />
  
      <WidgetSchedule />
  
      <WidgetVideoWithEventInfo />

       {/* <WidgetSalesMap
        label="exhibitors.map.title2"
        secondaryLabel="exhibitors.map.opensales"
      />  */}
      
      <WidgetRoleButtons /> 
     
      <Promoninja id={slug} />


      <WidgetAllExhibitorsColumnList />
    </div>
  );
  
  }
  
  PageCompany.defaultProps = {
    company: {}
  }
  

  export async function getStaticPaths() {
  
    // const request = await fetch(`${settings.system.api}/company-slugs`)
    // const slugs = await request.json();

    // if(!"data" in slugs){
    //   return
    // }


    // const filtered = slugs.data.filter(item => item.featured)

    return {
      // paths: filtered.map(row => ({ 
      //     params: {
      //       slug : row.slug
      //     }
      //   })),
      paths: [],
      fallback: "blocking" //do not throw 404 when not cached....
    };
     
  }

  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
    
    const {params} = props;
    const {slug} = params;

    const resource = `companies/${slug}`;

    await configure(props, {
      settings : settings,
      preload : [resource, "exhibitors", "bookingmap"]
    })

    return {
        props : {
            slug :slug,
            resource: resource
        },
        revalidate : 60
    }
  
  })
  

  // export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {
  
  //   const {params={slug}, req, res, query} = props;


  //   const resource = `companies/${slug}`;

  //   await configure(props, {
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
  