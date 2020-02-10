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
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageTicket extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    const person = `code/${query.hash}`;

    return {
      preload: [person, 'exhibitors'],
      code: query.hash,
      settings: settings,
    };
  }

  render() {
    const { url, code, person, exhibitors } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;

    return (
      <Layout>
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
              date: '13th February 2020',
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
      </Layout>
    );
  }
}

export default connect(
  (state, props) => ({
    person:
      'code' in props && props.code && `code/${props.code}` in state.resources
        ? state.resources[`code/${props.code}`]
        : {},
  }),
  null,
)(PageTicket);
