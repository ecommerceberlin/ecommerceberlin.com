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
  
import { regFormProps } from '../../compositions';

import settings from '../../settings';
  
const PageAccount = () => {

    const user = useUserData();
    
   if(user){
    return (<Wrapper>
        <WidgetRegForm 
            setting="visitor.update"
            options={regFormProps}
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
  
  
  
  