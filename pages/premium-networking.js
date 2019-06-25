import {
  connect,
  LayoutMain as Layout,
  WidgetTickets,
  Wrapper,
  DatasourceTickets,
  TwoColsLayout,
  Markdown,
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
          label="resources.upgrades.misc.networking.name"
          secondaryLabel="resources.upgrades.misc.networking.description"
        >
          <TwoColsLayout
            left={
              <DatasourceTickets>
                {tickets =>
                  tickets
                    .filter(
                      ticket =>
                        JSON.stringify(ticket.names).indexOf('networking') > -1,
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
            }
            right={<Markdown label="resources.upgrades.misc.networking.text" />}
          />
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
