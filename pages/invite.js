import {
  connect,
  MyHead as Head,
  get as _get,
  getInviteOgImage,
  WidgetVisitor,
  WidgetFeaturedExhibitors,
  WidgetSchedule,
  Typography,
  Wrapper,
  Gallery,
  EventInfo,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageInvite extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    const resource = `code/${query.id}`;

    return {
      preload: [resource, 'exhibitors'],
      asPath: asPath,
      resource: resource,
    };
  }

  render() {
    const { url, person, exhibitors, asPath } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
    const cname = `${_get(person, 'cname2', '')}`;

    return (
      <Layout>
        <Head
          url={asPath}
          image={getInviteOgImage(
            `Będę. ${_get(person, 'fname', '')} z ${_get(person, 'cname2')}`,
          )}
          titleLabel={[
            'visitors.opengraph.title',
            {
              name: name,
              cname: cname,
              location: 'Kraków',
              date: '17 kwietnia 2019',
            },
          ]}
        />

        <Wrapper
          first
          label={['visitors.invite.title', { name, cname }]}
          secondaryTitle="22 Prezentacje, 130 Wystawców i prawdziwy networking!"
        >
          <Typography
            template="visitor_invite_join"
            label={['visitors.invite.will_you_join', { name, cname }]}
          />

          <EventInfo
            items={[
              {
                icon: 'location',
                secondary: 'event.location',
                primary: 'EXPO Kraków, Galicyjska 9',
              },

              {
                icon: 'date',
                secondary: 'event.date',
                primary: '17 kwietnia 2019',
              },

              {
                icon: 'alarm',
                secondary: 'event.hours',
                primary: '10:00-17:00',
              },
            ]}
            orientation="h"
            style={{ marginTop: 50 }}
          />
        </Wrapper>

        <Visitor label="visitors.register" />

        <Schedule />

        <FeaturedExhibitors
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
