import {
  connect,
  MyHead as Head,
  LayoutRaw as Layout,
  Wrapper,
  DatasourceAdminReport,
  MyTypography as Text,
  TwoColsLayout,
  Exhibitor,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import {useRouter} from 'next/router'

import sortBy from 'lodash/sortBy';

const settings = require('../../settings').default;


const PageAdminReport = ({dispatch}) => {

  const router = useRouter();
  const {asPath} = router

  //parse params!
  
  return null

//   const { query } = props;
//   const { range, sort, service } = query;

//   const sorting = sort === 'booth' ? 'profile.booth' : 'company.name';

//   let _filter =
//     range && range.length > 0
//       ? function(item) {
//           return (
//             'booth' in item.profile &&
//             item.profile.booth &&
//             range.split(',').includes(item.profile.booth.trim().charAt(0))
//           );
//         }
//       : function() {
//           return true;
//         };

//   const filterByService = function(item) {
//     return (
//       'purchases' in item &&
//       Array.isArray(item.purchases) &&
//       item.purchases.filter(p => p.role === 'service_' + service).length
//     );
//   };




// return (


//   <Wrapper>
//           <DatasourceAdminReport filter={_filter} sort={sorting}>
//             {data =>
//               data.map(exhibitor => (
//                 <Exhibitor key={exhibitor.id} {...exhibitor} />
//               ))
//             }
//           </DatasourceAdminReport>
//         </Wrapper>

// )

}




export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["report"]
  })

  return {
    props : {},
    revalidate: 3600
  }
  // return {
  //   props : {
  //     id : "id" in params ? params.id : 0 , 
  //     keyword : "keyword" in params ? params.keyword : ""
  //   }
  // }

})


 
export default connect(
  null,
  null,
)(PageAdminReport);
