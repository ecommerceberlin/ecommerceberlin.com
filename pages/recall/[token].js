import React, {useEffect} from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    getUserByToken,
    Wrapper,
    Loading,
    useDispatch,
    setUserToken
  } from 'eventjuicer-site-components';
  
import {useRouter} from 'next/router'

  import settings from '../../settings';
  
  const Recall = ({token}) => {

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
    
        if(token){
            dispatch(setUserToken(token))
            router.push("/account")
        }
    })

     return  (
     <Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}>
         {token ? <Loading /> : <h1>Error. Bad URL.</h1>}
    </Wrapper>
    )

  }

Recall.defaultProps = {
    token: ""
}

Recall.disableLayout = true;

export const getServerSideProps = reduxWrapper.getServerSideProps(async ({ store, query }) => {

    const {token} = query;

    const user = await getUserByToken(settings.system.service_api, token)

    await configure(store, {
        settings: settings
    })
    return {
        props: {
            token: "token" in user ? user.token: ""
        },
    }  
})
  
  
export default connect()(Recall);
  
  
  
  