import {
  connect,
  _get as get,
  Divider,
  MyHead as Head,
  MyLink as Link,
  getPresenterFbAd,
  generateLinkParams,
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSpeakerSocial extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters'],
      asPath: asPath,
      settings: settings,
    };
  }

  render() {
    const { presenters, asPath } = this.props;

    return (
      <Layout>
        <Head url={asPath} />

        <Wrapper first label="">
          {presenters.map((presenter, idx) => {
            const name = `${_get(presenter, 'fname')} ${_get(
              presenter,
              'lname',
            )}`;
            const job = `${_get(presenter, 'position')} ${_get(
              presenter,
              'cname2',
            )}`;
            const bio = `${_get(presenter, 'bio')}`;
            const title = `${_get(presenter, 'presentation_title')}`;
            const description = `${_get(
              presenter,
              'presentation_description',
            )}`;

            const ogImage = getPresenterFbAd(
              presenter,
              'template_speaker_teh15_square',
            );
            const linkParams = generateLinkParams(
              name,
              'speaker',
              presenter.id,
            );

            return (
              <div key={presenter.id}>
                <Section
                  key={presenter.id}
                  leftSize={4}
                  left={
                    <div style={{ marginTop: 10 }}>
                      <div style={{ marginBottom: 10 }}>
                        <Typography template="presenter1">{name}</Typography>

                        <Typography template="presenter2">{job}</Typography>

                        <Typography template="presenterText">{bio}</Typography>
                      </div>

                      <Divider />

                      <div style={{ marginTop: 10 }}>
                        <Typography template="presenter2">{title}</Typography>

                        <Typography template="presenterText">
                          {description}
                        </Typography>

                        <Link {...linkParams} label="common.details" />
                      </div>
                    </div>
                  }
                  leftCentered={false}
                  right={
                    <img
                      src={ogImage}
                      alt=""
                      style={{ marginTop: 10, marginLeft: 20, maxWidth: 770 }}
                    />
                  }
                />

                <Divider />
              </div>
            );
          })}
        </Wrapper>
      </Layout>
    );
  }
}

export default connect(state => ({ presenters: state.resources.presenters }))(
  PageSpeakerSocial,
);
