import {
  connect,
  MyHead as Head,
  // MyLink as Link,
  WidgetVisitor,
  WidgetOffers,
  // Wrapper,
  // ColumnList,
  LayoutMain as Layout,
  WidgetRoleButtons,
} from 'eventjuicer-site-components';


class PageSpecials extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors'],
     
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetOffers
          divider={
            <WidgetVisitor
              first
              label="visitors.register_alt"
              secondaryLabel="event.parties"
            />
          }
        />

        <WidgetVisitor
          first
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetRoleButtons />
      </Layout>
    );
  }
}

PageSpecials.settings = require('../settings').default;


export default connect()(PageSpecials);
