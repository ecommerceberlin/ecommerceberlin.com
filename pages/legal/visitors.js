import {
connect,
get as _get,
Wrapper,
reduxWrapper,
configure,
Markdown
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

import contents from '../../texts/visitors.md'

const PageLegalVisitors = () => (
<Wrapper first label="visitors.agreement.title">
<Markdown>{contents}</Markdown>
</Wrapper>
)

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
return await configure(props, {
settings: settings,
cache: 3600
});
})

export default connect()(PageLegalVisitors);
