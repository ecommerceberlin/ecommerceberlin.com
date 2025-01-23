

import {
  connect,
  Settings,
  LayoutMain as Layout,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../settings').default


const PageSpeaking = () =>  (
   
  
   <Settings>

   {get => get("footer.iconStyle")}

  </Settings>
  
 
 )




//export async function getServerSideProps

/**
  store: {
    dispatch: [Function],
    subscribe: [Function: subscribe],
    getState: [Function: getState],
    replaceReducer: [Function: replaceReducer],
    [Symbol(observable)]: [Function: observable]
  }

 */


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors"]
  })

  return {
    props: {
      // ... props
    },
    revalidate: 3600 // 1 minute
  }
})


export default connect((state, props)=>({
    locale : state.app.locale
}))(PageSpeaking);
