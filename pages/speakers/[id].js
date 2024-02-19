import {
    connect,
    WidgetRegForm,
    WidgetPresenterNew,
    WidgetPresenters,
    WidgetVideoWithEventInfo,
    // WidgetRoleButtons,
    reduxWrapper,
    configure,
    HeadSpeaker,
    WidgetSchedule,
    WidgetSalesMap
  } from 'eventjuicer-site-components';

  import { WidgetVisitorWithVip, WidgetVisitorNonVip } from '../../compositions';
  
  import Head from 'next/head'


  const settings = require('../../settings').default;


  const PageSpeaker = ({id}) => (<>

      <HeadSpeaker setting="speakers" id={id} path="/speakers">{(data)=><Head>{data}</Head> }</HeadSpeaker>
      
      <WidgetPresenterNew id={id} path="/speakers" />

      <WidgetVideoWithEventInfo  />

      <WidgetVisitorNonVip />

      <WidgetSchedule />

      <WidgetPresenters setting="speakers" link={(item) => `/speakers/${item.id}` } />

      <WidgetVisitorNonVip />

  </>
)

export async function getStaticPaths() {
    
    return {
      paths: [],
      fallback: "blocking"
    }
}

  
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

    const {params: {id}} = props;

    const resource = `presenters/${id}`;

    return await configure(props, {
      settings : settings,
      preload : [resource, "presenters"]
    })
  
  })
  
  
  export default connect()(PageSpeaker);
  