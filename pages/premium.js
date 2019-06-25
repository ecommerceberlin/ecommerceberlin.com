import {
  connect,
  LayoutMain as Layout,
  WidgetTickets,
  Wrapper,
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
        <WidgetTickets
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
