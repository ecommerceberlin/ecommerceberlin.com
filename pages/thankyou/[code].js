import {
    connect,
    MyHead as Head,
    get as _get,
    WidgetVisitor,
    Typography,
    Wrapper,
    // WhoIsGonnaBeThere,
    MyTypography,
    WidgetSchedule,
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
            date: '5th May 2022',
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
  



  <WidgetVisitor setting="visitor.register" />

  <WidgetSchedule />
  

    </>)
  
  } 

  ThankyouPage.defaultProps = {
    person : {}
  }


  
export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {

  const {params: {code}} = props;
  const resource = `code/${code}`;

  const request = await fetch(`${settings.system.api}/${resource}`)
  const response = await request.json();

  await configure(props, {
    settings : settings,
    preload : [resource]
  })

  return {props: {
    code: code,
    person: "data" in response ? response.data : {}
  }, revalidate: 10}

})

  export default connect()(ThankyouPage);
  