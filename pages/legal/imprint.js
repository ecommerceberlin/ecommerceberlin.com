import {
  connect,
  get as _get,
  // Typography,
  // Faq,
  // FaqLink,
  Wrapper,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageLegalImprint = () => (

 
  <Wrapper first label="common.pages.imprint">
    <div
      dangerouslySetInnerHTML={{
        __html: `
  
        <div>
        <h3>Company:</h3>
        <p>E-commerce Capitals Sp. z o.o. Sp. k.</p>
        <p>Jana Matejki 52/4</p>
        <p>60-770, Poznan, Poland</p>
        <h3>Place of administration</h3>
        <p>STATION BERLIN</p>
        <p>Luckenwalder Str. 4–6</p>
        <p>10963, Berlin</p>
        <h3>Executive Management</h3>
        <p>Marek Tomaszewski and Piotr Szczepaniak</p>
        <h3>Commercial Registration Court/Registration Number </h3>
        <p>City of Poznań/KRS 0000592712</p>
        <h3>VAT ID No. (per Value-Added Tax Act Section 27a)</h3>
        <p>PL 7792439665</p>
        &nbsp;
        <h3>Liability Disclaimer</h3>
        <p>Despite diligent control over content, we assume no liability for the content of any external links found here. The operators of those linked sites are solely and exclusively responsible for their content.</p>
        <h3>Terms and Conditions of Use</h3>
        <p>These Terms and Conditions of Use govern the use of the website for E-commerce Berlin Expo (hereinafter, “E-commerce Expo”), as well as the use of the contents found there, including but not limited to the use of descriptions, designations, etc. (hereinafter collectively, “CONTENTS”)</p>
        <p>By using the website of E-commerce Expo, you acknowledge that you have read and understand the following Terms and Conditions of Use. Please read these terms and conditions carefully before you use our site:</p>
        <p>The website of E-commerce Expo and the CONTENTS available through it are protected by copyright. Their usage is subject to prevailing copyright laws.</p>
        <p>The E-commerce Expo website may not be modified, copied, republished, transmitted, circulated or stored. The CONTENTS found on the E-commerce Expo website are intended to facilitate the leasing of the products listed. We hereby expressly state that despite careful selection, no liability whatsoever can be assumed for the contents that are accessed via third party (external) links.</p>
        <p>E-commerce Expo bears no responsibility for the contents of a site that is reached through such a link or by indirect reference to it. Information and data on the E-commerce Expo website are made available by means of hyperlink, as are the information and data of other websites. These information and data are intended for general informational purposes. E-commerce Expo makes no warranty as to the currency, accuracy and completeness of said information or data. E-commerce Expo expressly distances itself from the contents of ALL sites linked to our website.</p><p>
        </p><p>E-commerce Expo reserves the right to apply modifications to these Terms and Conditions of Use at any time without notice, and you hereby affirm that you accept these modified Terms and Conditions of Use. Please keep yourself regularly informed of any modifications to these Terms and Conditions of Use.</p>
        </div>

`,
      }}
    />
  </Wrapper>
 

)




export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    //preload: [""]
  });

  return {props: {}, revalidate: 1}


})

export default connect()(PageLegalImprint);
