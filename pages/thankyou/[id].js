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
  
  
  const ThankyouPage = ()=> {
  
    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
  
    return (  <>
      <Head
        url={asPath}
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
  
  
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  await configure(store, {
    settings : settings,
    //preload : ["callforpapers"]
  })


})

  export default connect()(ThankyouPage);
  