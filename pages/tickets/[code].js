import {
  get as _get,
  MyHead as Head,
  connect,
  getInviteOgImage,
  WidgetVisitor,
  WidgetSchedule,
  WidgetEventInfo,
  TicketDownload,
  Resignation,
  Wrapper,
  EventInfo,
  Invite,
  reduxWrapper,
  configure,
  WidgetSalesMap,
  TwoColsLayout
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;

const PageTicket = ({code, person, exhibitors }) => {

  return (

<>

<Wrapper first label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}>

<TwoColsLayout 

left={<>
<TicketDownload code={code} />
<Resignation code={code} />
</>}

right={
<WidgetEventInfo orientation="v" style={{ marginTop: 50 }} primaryStyle={null} secondaryStyle={null}  iconStyle="black" />
}

/>

<Invite person={person} text="CU!" from="from" template="ebe7_template_visitor" color="000000"/>
</Wrapper>

<WidgetSchedule />

</>)

}

export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {

  const {params: {code}} = props;
  const resource = `code/${code}`;

  const request = await fetch(`${settings.system.api}/${resource}`)
  const response = await request.json();

  await configure(props, {
    settings : settings,
    preload : [resource]
  })

  return {props: {
    code: code,
    person: "data" in response ? response.data : {}
  }}

})

export default connect(
  (state, props) => ({
    person:
      'code' in props && props.code && `code/${props.code}` in state.resources
        ? state.resources[`code/${props.code}`]
        : {},
  }),
  null,
)(PageTicket);
