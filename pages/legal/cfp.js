import {
connect,
get as _get,
// Typography,
Wrapper,
Markdown,
reduxWrapper,
configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

import contents from '../../texts/cfp.md'


const PageLegalCfp = () => (   
<Wrapper first label="presenters.contest-rules.title">
<Markdown>{contents}</Markdown>
</Wrapper>
) 





export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

await configure(props, {
settings: settings,
//preload: [""]
});

return {props: {}, revalidate: 36000}


})


export default connect()(PageLegalCfp);



