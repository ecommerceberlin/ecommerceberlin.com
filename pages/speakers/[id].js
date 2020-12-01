import {
    connect,
    WidgetVisitor,
    WidgetFeaturedExhibitors,
    WidgetPresenter,
    WidgetSchedule,
    WidgetVideoWithEventInfo,
    WidgetRoleButtons,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  const settings = require('../../settings').default;


  const PageSpeaker = ({id}) => (


    <>
    <WidgetPresenter id={id} asPath="/speakers" />

    {/* <WidgetSchedule selected={speakerId} /> */}

    <WidgetVideoWithEventInfo />

    <WidgetVisitor label="visitors.register_alt" />

    <WidgetRoleButtons />

    <WidgetFeaturedExhibitors label="exhibitors.list_featured" />
  </>
  )




  export async function getStaticPaths() {
  
    // const request = await fetch(`${settings.system.api}/presenters_all`)
    // const response = await request.json();

    // if(!"data" in response){
    //   return
    // }

    // //featured OR featured_cfp

    // const filtered = response.data.filter(item => ("featured" in item && parseInt(item.featured)) || ("featured_cfp" in item && parseInt(item.featured_cfp)) )

    // return {
    //   paths: filtered.map(row => ({ 
    //       params: {
    //         id : row.id.toString()
    //       }
    //     })),
    //   fallback: true 
    // };
     

    return {
      paths: [],
      fallback: true
    }
  }

  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

    const {params: {id}} = props;

    const resource = `presenters/${id}`;

    await configure(props, {
      settings : settings,
      preload : [resource, "exhibitors", "presenters"]
    })

    return {
      props : {
          id : id.toString()
      },
      revalidate : 1
  }
  
  })
  
  
  export default connect()(PageSpeaker);
  