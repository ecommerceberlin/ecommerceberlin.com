import {
  connect,
  LayoutMain as Layout,
  WidgetTickets,
  Wrapper,
  TwoColsLayout,
  DatasourceTickets,
  Markdown,
  TicketBuyButton,
  TicketPrice,
  Chatlio,
  MyTypography,
  resizeCloudinaryImage,
} from 'eventjuicer-site-components';


const getTicket = (alltickets, ticket) =>
  alltickets.find(item => item.translation_asset_id.indexOf(ticket) > -1);

class PagePremium extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['tickets', 'ticketgroups'],
      asPath: asPath,
      
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
                        src={resizeCloudinaryImage(
                          matchedTicket.image,
                          800,
                          800,
                        )}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    }
                    right={
                      <div style={{ marginLeft: 20 }}>
                        <Markdown
                          label={`resources.upgrades.misc.${ticket}.text`}
                        />

                        <div style={{ marginBottom: 20 }}>
                          <MyTypography template="price">
                            <TicketPrice price={matchedTicket.price} />
                          </MyTypography>
                        </div>

                        <TicketBuyButton
                          id={matchedTicket.id}
                          bookable={matchedTicket.bookable}
                          label="common.buy"
                          right={<Chatlio label="common.request_more_info" />}
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
            return ticket.group_id == 331;
          }}
        />
      </Layout>
    );
  }
}

PagePremium.settings = require('../settings').default;


export default connect()(PagePremium);
