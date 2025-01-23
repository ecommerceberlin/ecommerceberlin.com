import {
  connect,
  _get as get,
  Divider,
  MyLink as Link,
  getPresenterFbAd,
  generateLinkParams,
  MyTypography as Typography,
  TwoColsLayout as Section,
  Wrapper,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;

class PageSpeakerSocial extends React.Component {


  render() {
    const { presenters, asPath } = this.props;

    return (
     <div>

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
        </div>
    );
  }
}


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["presenters"]
  })

  return {
    props: {
      // ... props
    },
    revalidate: 3600 // 1 minute
  }

  // return {
  //   props : {
  //     id : "id" in params ? params.id : 0 , 
  //     keyword : "keyword" in params ? params.keyword : ""
  //   }
  // }

})




 
export default connect(state => ({ presenters: state.resources.presenters }))(
  PageSpeakerSocial
);
