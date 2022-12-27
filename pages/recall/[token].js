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
  
  const Recall = ({token, goto}) => {

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
    
        if(token){
            dispatch(setUserToken(token))
            router.push(goto)
        }
    })

     return  (
     <Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}>
         {token ? <Loading /> : <h1>Error. Bad URL.</h1>}
    </Wrapper>
    )

  }

Recall.disableLayout = true;

export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {

    const {query: {token = "", goto = "/account"}} = props;

    const user = await getUserByToken(settings.system.service_api, token)

    //action when userrrrr is bad?

    await configure(props, {
        settings: settings
    })
    return {
        props: {
            token: "token" in user ? user.token: "",
            goto
        },
    }  
})
  
  
export default connect()(Recall);
  
  
  
  