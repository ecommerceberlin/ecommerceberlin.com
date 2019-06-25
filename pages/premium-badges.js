import {
  connect,
  LayoutMain as Layout,
  WidgetTickets,
  Wrapper,
  DatasourceTickets,
  TwoColsLayout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PagePremium extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['tickets', 'ticketgroups'],
      asPath: asPath,
      settings: settings,
    };
  }

  render() {
    const { asPath } = this.props;

    return (
      <Layout>
        <Wrapper
          label="resources.upgrades.misc.badges.name"
          secondaryLabel="resources.upgrades.misc.badges.description"
        >
          <DatasourceTickets>
            {tickets =>
              tickets
                .filter(
                  ticket => JSON.stringify(ticket.names).indexOf('badges') > -1,
                )
                .map(ticket => (
                  <img
                    src={ticket.thumbnail}
                    alt=""
                    style={{ width: '100%' }}
                  />
                ))
            }
          </DatasourceTickets>
        </Wrapper>

        <WidgetTickets
          label="resources.upgrades.misc.list"
          filter={function(ticket) {
            return ticket.group_id == 305;
          }}
        />
      </Layout>
    );
  }
}

export default connect()(PagePremium);
