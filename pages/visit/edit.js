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
  
import settings from '../../settings';
  
const PageAccount = () => {

    const user = useUserData();
    
   if(user){
    return (<Wrapper>
        <WidgetRegForm 
            setting="visitor.update"
            options={{
                participant_type: [
                    "retailer_wholesaler",
                    "brand_manufacturer",
                    "service_provider",
                    "consultant",
                    "developer",
                    "media",
                    "student"
                ],
                company_role: [
                    "student",
                    "entry",
                    "manager",
                    "professional",
                    "head_of_department",
                    "director",
                    "c_level",
                    "board_member",
                    "other"
                ],
                location: [
                    "yes",
                    "no",
                ]
            }}
            data={user.fields} 
            token={user.token}
            right={null}
         />
         </Wrapper>)
   }

   return (<Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}><Loading /></Wrapper>)
   
}
  
  
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {
  
    return await configure(store, {
        settings: settings,
    })

  })
  
  
 export default connect()(PageAccount);
  
  
  
  