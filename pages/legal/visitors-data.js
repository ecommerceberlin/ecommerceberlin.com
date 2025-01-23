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

import contents from '../../texts/visitors-data.md'

const PageLegalVisitorsData = () => (


<Wrapper first label="visitors.data-agreement.title">
<Markdown>{contents}</Markdown>
</Wrapper>

) 


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

await configure(props, {
settings: settings,
//preload: [""]
});

return {props: {}, revalidate: 3600}


})

export default connect()(PageLegalVisitorsData);
