import React from 'react';

import {
    connect,
    Wrapper,
    reduxWrapper,
    configure,
    WidgetRegForm,
    Loading,
    MyTypography,
    useUserData,
    SubPageButton,
    TextSection
  } from 'eventjuicer-site-components';
  
import settings from '../settings';
  
const PageAccount = () => {

    const user = useUserData();
    
   if(user){
    return (<Wrapper><WidgetRegForm 
        setting="speakers.callforpapers_update"
         data={user.fields} 
         token={user.token}
  
         right={
            <div style={{marginTop: 30}}>
            
            <SubPageButton target={{href: `/speakers/${user.id}`}} label="common.preview" />

            <TextSection margin={2} record={user.fields} name="cname2" />
            {/* <TextSection margin={2} record={user.fields} name="presenter" /> */}

            </div>
          }

         />
         </Wrapper>)
   }

   return (<Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}><Loading /></Wrapper>)
   
}
  
  
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    await configure(store, {
        settings: settings,
        //preload: ['contestant_companies_all']
    })

    return {
        props: {},
        revalidate: 1
    }  
  })
  
  
 export default connect()(PageAccount);
  