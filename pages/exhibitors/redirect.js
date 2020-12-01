import {
  connect,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageExhibitors = ({companies}) => (

  <>

    <div>redirecting...</div>
    {companies.length}
    
  </>

)


export const getServerSideProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ['companies']
  })

  return {props: {}, revalidate: 1}


})


export default connect(

    (state, props) => ({companies: state.resources.companies})

)(PageExhibitors);
