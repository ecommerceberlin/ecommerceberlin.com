import dynamic from 'next/dynamic';

import {
  get as _get,
  connect,
  MyHead as Head,
  WidgetSupport,
  MyTypography as Typography,
  // Faq,
  // FaqLink,
  Wrapper,
  Benefits,
  TwoColsLayout as Section,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const Bookingmap = dynamic(
  import('eventjuicer-site-components/dist/components/Bookingmap/Bookingmap'),
);

class PagePremium extends React.Component {
  static async getInitialProps({
    err,
    req,
    res,
    pathname,
    query,
    asPath,
    isServer,
    store,
  }) {
    return {
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Wrapper first label="exhibitors.premium.title">
          <Typography
            template="SUBH2CH"
            label="exhibitors.premium.networking.name"
          />

          <Section
            spacing={true}
            leftSize={7}
            left={
              <div style={{ marginTop: 20 }}>
                <div>
                  <img
                    src="/static/pl_networking1.jpg"
                    alt=""
                    style={{ maxWidth: 600 }}
                  />
                </div>

                <div>
                  <img
                    src="/static/pl_networking2.jpg"
                    alt=""
                    style={{ maxWidth: 600 }}
                  />
                </div>
              </div>
            }
            leftCentered={true}
            right={
              <div style={{ marginTop: 50 }}>
                <Benefits
                  labels={[
                    'exhibitors.premium.presentation',
                    'exhibitors.premium.networking.area',
                    'exhibitors.premium.networking.arrangement',

                    'exhibitors.premium.networking.branding',
                    'exhibitors.premium.networking.attractions',
                    'exhibitors.premium.networking.fullservice',
                  ]}
                  orientation="v"
                />

                <div style={{ marginTop: 40 }}>
                  <WidgetSupport
                    title="exhibitors.premium.contact.title"
                    text="exhibitors.premium.contact.description"
                  />
                </div>
              </div>
            }
          />
        </Wrapper>

        <Wrapper
          label={[
            'common.map',
            {
              // cname2 : name,
              // loc : selectedBoothNames.join(","),
              // smart_count : selectedBoothNames.length
            },
          ]}
        >
          <Bookingmap
          //  selected={selectedBoothIds}
          />
        </Wrapper>

        {/* <Wrapper title="FAQ">

      <Faq url={url} baseLabel="exhibitors.faq.premium" items={[

          {label : "representatives"},
          {label : "additional_paid_services"},
          {label : "shipping_of_materials"},
          {label : "standard_offering"},
          {label : "how_to_promote"},
          {label : "promo_benefits"},
          {label : "public_profile"},
      ]} />


    </Wrapper> */}
      </Layout>
    );
  }
}

export default connect()(PagePremium);
