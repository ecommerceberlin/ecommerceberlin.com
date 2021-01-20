
import {
  connect,
  reduxWrapper,
  fetch
} from 'eventjuicer-site-components';

import settings from '../settings';

const Redirect = () => null

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ params }) => {

  //get the list of companies

  const {slug} = params
  const matches = /[^,]+,c,(?<id>[0-9]+)/g.exec(slug)
  const {id} = matches.groups;
  const resource = `companies/${id}`;
  const request = await fetch(`${settings.system.api}/${resource}`)
  const {data} = await request.json();

  // res.statusCode = 302
  // res.setHeader('Location', `/`) // Replace <link> with your url link
  // res.end();

  return {
    redirect: {
      permanent: true,
      destination: `/exhibitors/${data.slug}`,
    },
    props: {

    }
  }

})

export default connect()(Redirect);
