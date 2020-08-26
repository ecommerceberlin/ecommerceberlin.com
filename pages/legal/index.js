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


export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    //preload: [""]
  });

})

export default connect()(PageLegalIndex);
