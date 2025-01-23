import {
connect,
get as _get,
// Typography,
// Faq,
// FaqLink,
Wrapper,
Markdown,
reduxWrapper,
configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

import contents from '../../texts/exhibitors.md'

const PageLegalExhibitors = () => (

<Wrapper first label="exhibitors.agreement.title">
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

export default connect()(PageLegalExhibitors);
