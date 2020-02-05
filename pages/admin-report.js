import {
  connect,
  MyHead as Head,
  LayoutRaw as Layout,
  Wrapper,
  DatasourceAdminReport,
  MyTypography as Text,
  TwoColsLayout,
} from 'eventjuicer-site-components';

import sortBy from 'lodash/sortBy';

const settings = require('../settings').default;

const Exhibitor = props => {
  const {
    account,
    company,
    profile,
    errors,
    purchases,
    reps,
    party,
    meetups,
  } = props;
  const { name, event_manager, pr_manager, keywords, lang } = company;
  const { booth, fname, lname, phone } = profile;

  return (
    <div style={{ marginTop: 15 }}>
      <Text template="benefitsTitle">
        {name} ({booth}; {account}; {lang})
      </Text>
      <Text template="benefitsText">
        {fname} {lname} {phone}
      </Text>
      <Text template="benefitsText">Reps: {reps}</Text>
      <Text template={party > 2 ? 'benefitsTextError' : 'benefitsText'}>
        Party: {party}
      </Text>
      <Text template="benefitsText">Meetups: {meetups}</Text>
      <ProfileErrors errors={errors} />
      <Purchases purchases={purchases} />
    </div>
  );
};

const ProfileErrors = ({ errors }) => {
  const arr = Object.keys(errors);
  if (!arr.length) {
    return null;
  }
  return (
    <Text template="benefitsTextError">
      Profile errors:{' '}
      {arr.map(field => (
        <strong>{field}, </strong>
      ))}
    </Text>
  );
};

const Purchases = ({ purchases }) => {
  const filtered = purchases.filter(item => item);
  const clear = str => str.replace(/resources.upgrades./gi, '');
  const findName = item =>
    item.translation_asset_id.lenght ? item.translation_asset_id : item.___name;
  return filtered.map(item => {
    return (
      <Text template="benefitsText">
        <strong>{item.quantity} x</strong> {clear(findName(item))}
      </Text>
    );
  });
};

class PageAdminReport extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: [],
      settings: settings,
      load: ['report'],
    };
  }

  render() {
    return (
      <Layout>
        <Head />
        <Wrapper>
          <DatasourceAdminReport>
            {data =>
              data.map(exhibitor => {
                return <Exhibitor key={exhibitor.id} {...exhibitor} />;
              })
            }
          </DatasourceAdminReport>
        </Wrapper>
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageAdminReport);
