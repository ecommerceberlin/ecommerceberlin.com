import {
    LayoutMain
} from 'eventjuicer-site-components';

const Layout = ({children}) => (
    <LayoutMain>
        {children}
    </LayoutMain>
)

Layout.defaultProps = {
    
}

export default Layout;