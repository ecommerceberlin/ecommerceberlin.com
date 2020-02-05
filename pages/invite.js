import {
  connect,
  MyHead as Head,
  get as _get,
  getInviteOgImage,
  WidgetVisitor,
  WidgetFeaturedExhibitors,
  WidgetSchedule,
  WidgetEventInfo,
  Typography,
  Wrapper,
  // Gallery,
  // EventInfo,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageInvite extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    const resource = `code/${query.id}`;

    return {
      preload: [resource, 'exhibitors'],
      asPath: asPath,
      resource: resource,
      settings: settings,
    };
  }

  render() {
    const { url, person, exhibitors, asPath } = this.props;

    /*     
      resource: "code/90329",
      person : {}
    */

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
    const cname = `${_get(person, 'cname2', '')}`;

    return (
      <Layout>
        <Head
          url={asPath}
          image={getInviteOgImage(
            `See You! ${_get(person, 'fname', '')} from ${_get(
              person,
              'cname2',
            )}`,
          )}
          titleLabel={[
            'visitors.opengraph.title',
            {
              name: name,
              cname: cname,
              location: 'Berlin STATION',
              date: '13th February 2020',
            },
          ]}
        />

        <Wrapper
          first
          label={['visitors.invite.title', { name, cname }]}
          secondaryTitle="visitors.invite.description"
        >
          <Typography
            template="visitor_invite_join"
            label={['visitors.invite.will_you_join', { name, cname }]}
          />

          <WidgetEventInfo orientation="h" style={{ marginTop: 50 }} />
        </Wrapper>

        <WidgetVisitor label="visitors.register" />

        {/* <WidgetSchedule /> */}

        <WidgetFeaturedExhibitors
          label="exhibitors.list_featured"
          secondaryTitle=""
        />
      </Layout>
    );
  }
}

export default connect(
  (state, props) => ({
    person:
      'resource' in props && props.resource in state.resources
        ? state.resources[props.resource]
        : {},
  }),
  null,
)(PageInvite);
