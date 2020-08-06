import {
  connect,
  WidgetVisitor,
  MyHead as Head,
  MyLink as Link,
  Wrapper,
  Avatarlist,
  Typography,
  Gallery,
  WidthAwareInfo,
  People,
  MyTable as Table,
  LayoutMain as Layout,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../settings').default;


const PageArchive = ({eventId}) => {

  if(eventId){
    return (
      
      <>

      <Wrapper
      first
      label="presenters.archive"
      secondaryTitle=""
      // links={[
      //   <Link href="/agenda" label="presenters.list_full" variant="flat" color="secondary" />
      // ]}
    >
      <People
        link={false}
        random={false}
        eventId={eventId}
        filter={n => n.presentation_time}
      />
    </Wrapper>
  

  <Wrapper first label="archive.events" secondaryTitle="">
    <Table
      data={events}
      cols={{
        name: {},
        loc: {},
        starts: { transform: v => v },
        show: { button: true, label: 'common.details' },
      }}
    />
  </Wrapper>

  <Gallery label="event.gallery" />

  </>

    )
  }

  return null

} 




export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  //const presenters = `presenters?event_id=${query.id}`;

  await configure(store, {
    settings : settings,
    preload : ["events"]
  })

  return {
    props : {
      eventId : "XXXXX"
    }
  }

})



export default connect()(PageArchive);
