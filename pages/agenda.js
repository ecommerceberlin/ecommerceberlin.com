
import Head from '../next/MyHead'
import reduxPage from '../redux/store'




import {
  Typography,
  Wrapper,
  WhoIsGonnaBeThere,
//  Googlemap,
  People
} from '../components';

import Layout from '../layouts/main';
import Visitor from '../components/roles/Visitor'


class Visit extends React.Component {


static async getInitialProps({err, req, res, pathname, query, asPath, isServer, store})
{

  // const _company = await fetch(`https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/companies/${query.id}`)
  // const company = await _company.json()
  //
  // const _booths = await fetch('https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/bookingmap')
  // const bookingmap = await _booths.json()
  //
  //
  // store.dispatch(
  //   resourceFetchSuccess("bookingmap", bookingmap.data)
  // )
  //
  // return {
  //   company : company.data,
  //   eventId: _get(company, "meta.active_event_id")
  // }

}

render()
{

  const { url } = this.props;

  return (<Layout>

    <Head />


    <Wrapper label="presenters.list_featured">
      <People filter={function(item){ return item.featured; }} />
    </Wrapper>


    <Wrapper label="visitors.register_alt">

      <Visitor />

    </Wrapper>


    <Wrapper label="visitors.attendees">

      <WhoIsGonnaBeThere />

    </Wrapper>


    <Wrapper>

      <Visitor />

    </Wrapper>


    {/* <Googlemap /> */}


  </Layout>)
}

}


export default reduxPage(Visit, (state) => ({foo: state.foo}) )