import {
    connect,
    MyHead as Head,
    get as _get,
    WidgetVisitor,
    Typography,
    Wrapper,
    // WhoIsGonnaBeThere,
    MyTypography,
    Googlemap,
    reduxWrapper,
    configure
  } from 'eventjuicer-site-components';
  
  const settings = require('../../settings').default;
  
  
  const ThankyouPage = ({code, person})=> {
  
    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
  
    return (  <>
      <Head
        url="/thankyou"
        titleLabel={[
          'visitors.opengraph.title',
          {
            name: name,
            location: 'STATION Berlin',
            date: '18 Februrary 2021',
          },
        ]}
      />
  
      <Wrapper
        first
        label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}
      />
  
      {/* <Wrapper label="visitors.attendees">
        <WhoIsGonnaBeThere />
      </Wrapper> */}
  
      <WidgetVisitor label="visitors.register_alt" />
  
      {/* <Googlemap /> */}
    </>)
  
  } 

  ThankyouPage.defaultProps = {
    person : {}
  }


  
export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ req, res, store, params, query}) => {

  const {code} = params;
  const resource = `code/${code}`;

  const request = await fetch(`${settings.system.api}/${resource}`)
  const response = await request.json();

  await configure(store, {
    settings : settings,
    preload : [resource]
  })

  return {props: {
    code: code,
    person: "data" in response ? response.data : {}
  }, revalidate: 1}

})

  export default connect()(ThankyouPage);
  