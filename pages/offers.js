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

const settings = require('../settings').default;

class PageSpecials extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors'],
      settings: settings,
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
              secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
            />
          }
        />

        <WidgetVisitor
          first
          label="visitors.register"
          secondaryTitle="Spotkamy się w gronie ponad 3000 osób!"
        />

        <WidgetRoleButtons />
      </Layout>
    );
  }
}

export default connect()(PageSpecials);
