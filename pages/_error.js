import { NextError } from 'eventjuicer-site-components';

const settings = require('../settings').default;

class CustomError extends React.Component {
  static async getInitialProps(props) {
    const parentGetInitialProps = await NextError.getInitialProps(props);

    return { ...parentGetInitialProps, settings: settings };
  }

  render() {
    return <NextError {...this.props} />;
  }
}

export default CustomError;
