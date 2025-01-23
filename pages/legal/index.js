import {
  connect,
  get as _get,
  Wrapper,
  Markdown,
  reduxWrapper,
  configure,
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageLegalIndex = () => (
 
  <Wrapper first label="">

    

  </Wrapper>
 

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    //preload: [""]
  });

  return {props: {}, revalidate: 36000}

  
})

export default connect()(PageLegalIndex);
