import {
connect,
get as _get,
Wrapper,
Markdown,
reduxWrapper,
configure,
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

import contents from '../../texts/app.md'

const PageLegalVisitorsData = () => (
<Wrapper first label="Mobile app for Exhibitors and Visitors Privacy Policy">
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

export default connect()(PageLegalVisitorsData);
