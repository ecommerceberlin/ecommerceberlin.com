import {
  get as _get,
  MyHead as Head,
  connect,
  getInviteOgImage,
  WidgetVisitor,
  WidgetSchedule,
  WidgetAllExhibitorsColumnList,
  WidgetSalesMap,
  WidgetEventInfo,
  TicketDownload,
  Resignation,
  Wrapper,
  EventInfo,
  Invite,
  LayoutMain as Layout,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;

const PageTicket = ({code, person, exhibitors }) => {

  const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;

  return (

    <>
    <Head
      url={`/invite,${_get(person, 'id', 0)}`}
      image={getInviteOgImage(
        `See You! ${_get(person, 'fname', '')} from ${_get(
          person,
          'cname2',
        )}.`,
      )}
      titleLabel={[
        'visitors.opengraph.title',
        {
          name: name,
          location: 'STATION Berlin',
          date: '18th February 2021',
        },
      ]}
    />

    <Wrapper
      first
      label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}
    >
      <TicketDownload code={code} />
      <Resignation code={code} />

      <WidgetEventInfo orientation="h" style={{ marginTop: 50 }} />

      <Invite person={person} />
    </Wrapper>

    <WidgetSchedule />

    {/* <WidgetSalesMap
      label="exhibitors.map.title2"
      secondaryLabel="exhibitors.map.opensales"
    /> */}

    <WidgetAllExhibitorsColumnList />

    <WidgetVisitor label="visitors.register_alt" />
  </>

    )
}

export const getStaticPaths = () => {
  return {paths : [
    {params : {code: "adxzye"}}
    ],
    fallback: false
  }
}

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params = {}}) => {

  const {hash} = params;
  const person = `code/${hash}`;

  await configure(store, {
    settings : settings,
    preload : [person, "exhibitors"]
  })


  return {
    props : {
      code: hash ?? ""
    }
  }

})

export default connect(
  (state, props) => ({
    person:
      'code' in props && props.code && `code/${props.code}` in state.resources
        ? state.resources[`code/${props.code}`]
        : {},
  }),
  null,
)(PageTicket);
