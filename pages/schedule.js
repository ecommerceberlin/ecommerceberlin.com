import { connect, DynamicPage } from 'eventjuicer-site-components';


class PageSchedule extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters'],
    
    };
  }

  render() {
    const { url } = this.props;

    return <DynamicPage name="schedule" url={url} />;
  }
}

PageSchedule.settings = require('../settings').default;


export default connect()(PageSchedule);
