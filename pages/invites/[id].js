import {
  connect,
  MyHead,
  get as _get,
  getInviteOgImage,
  WidgetVisitor,
  WidgetSchedule,
  WidgetEventInfo,
  Wrapper,
  WidgetSalesMap,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import Head from 'next/head'


const settings = require('../../settings').default;

const PageInvite = ( { id, person, exhibitors } ) => {

  const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
    const cname = `${_get(person, 'cname2', '')}`;

  return (
    <div>
  
    <MyHead
      url={`/invites/${id}`}
      image={getInviteOgImage(`CU! ${_get(person, 'fname', '')} from ${_get(person, 'cname2',"")}`, "ebe7_template_visitor", "000000")}
      titleLabel={[
        'visitors.opengraph.title',
        {
          name: name,
          cname: cname,
          location: 'STATION Berlin',
          date: '23rd Feb 2023',
        },
      ]}
    >{(data=> <Head>{data}</Head>)}</MyHead>

    <Wrapper
      first
      label={['visitors.invite.title', { name, cname }]}
      secondaryLabel="visitors.invite.description"
    >
      {/* <Typography
        template="visitor_invite_join"
        label={['visitors.invite.will_you_join', { name, cname }]}
      />
 */}
     
    </Wrapper>

   <WidgetVisitor setting="visitor.register"  right={

<WidgetEventInfo  orientation="v" style={{ marginTop: 50 }} primaryStyle={null} secondaryStyle={null}  iconStyle="black" />
   }/>

    <WidgetSchedule />

 <WidgetVisitor setting="visitor.register"  right={
<WidgetEventInfo  orientation="v" style={{ marginTop: 50 }} primaryStyle={null} secondaryStyle={null}  iconStyle="black" />

   }/>



 </div>

  )
}



 
export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {


  const {params: {id}} = props
  const resource = `visitors/${id}`;

  await configure(props, {
    settings : settings,
    preload : [resource]
  })

  return {
    props: {
      id: id.toString(),
      resource: resource
    }}
})


export default connect(
  (state, props) => ({
    person:
      'resource' in props && props.resource in state.resources
        ? state.resources[props.resource]
        : {},
  }),
  null,
)(PageInvite);
