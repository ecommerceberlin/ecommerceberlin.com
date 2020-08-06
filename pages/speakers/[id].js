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
  
    const request = await fetch(`${settings.system.api}/presenters_all`)
    const response = await request.json();

    if(!"data" in response){
      return
    }

    return {
      paths: response.data.map(row => ({ 
          params: {
            id : row.id.toString()
          }
        })),
      fallback: true 
    };
     
  }

  
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {

    const {id} = params;

    await configure(store, {
      settings : settings,
      preload : ["exhibitors", "presenters"]
    })

    return {
      props : {
          id : id.toString()
      },
      revalidate : 10
  }
  
  })
  
  
  export default connect()(PageSpeaker);
  