import {
  connect,
  LayoutMain as Layout,
  WidgetTickets,
  Wrapper,
  TwoColsLayout,
  DatasourceTickets,
  Markdown,
  TicketBuyButton,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const getTicket = (alltickets, ticket) =>
  alltickets.find(item => item.translation_asset_id.indexOf(ticket) > -1);

class PagePremium extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['tickets', 'ticketgroups'],
      asPath: asPath,
      settings: settings,
      ticket: 'slug' in query ? query.slug : null,
    };
  }

  render() {
    const { ticket, asPath } = this.props;

    return (
      <Layout>
        <DatasourceTickets>
          {alltickets => {
            const matchedTicket = getTicket(alltickets, ticket);

            return matchedTicket ? (
              <Wrapper
                first
                label={`resources.upgrades.misc.${ticket}.name`}
                secondaryLabel={`resources.upgrades.misc.${ticket}.description`}
              >
                <div style={{ marginTop: 80 }}>
                  <TwoColsLayout
                    left={
                      <img
                        src={matchedTicket.image}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    }
                    right={
                      <div>
                        <Markdown
                          label={`resources.upgrades.misc.${ticket}.text`}
                        />
                        <TicketBuyButton
                          id={matchedTicket.id}
                          bookable={matchedTicket.bookable}
                          label="common.buy"
                        />
                      </div>
                    }
                  />
                </div>
              </Wrapper>
            ) : null;
          }}
        </DatasourceTickets>

        <WidgetTickets
          first
          label="resources.upgrades.premium.title"
          filter={function(ticket) {
            return ticket.group_id == 305;
          }}
        />
      </Layout>
    );
  }
}

export default connect()(PagePremium);
