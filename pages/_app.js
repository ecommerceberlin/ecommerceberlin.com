import { NextApp, MyHead } from 'eventjuicer-site-components';
import Head from 'next/head'

const MyCustomApp = (props) => <NextApp {...props} head={
    <MyHead url="/">{(data) => <Head>{data}</Head>}</MyHead> 
} />

export default MyCustomApp