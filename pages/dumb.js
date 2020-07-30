

import {
  connect,
  Settings,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';



const PageSpeaking = () => {
  
 // static async getInitialProps({ query, asPath, isServer, store }) {
  //   return {
  //     //preload : ["exhibitors", "presenters"],
 
  //   };
  // }

 return  (
   
   <Layout>
   <Settings>

{get => get("footer.iconStyle")}

 </Settings>
 </Layout>)

}

// export async function getStaticProps(context) {
//   return {
//     props: {
//       settings : require('../settings').default
//     },
//   }
// }

PageSpeaking.settings = require('../settings').default

export default connect((state, props)=>({
    locale : state.app.locale
}))(PageSpeaking);
