import React from 'react'

import {
    connect,
    reduxWrapper,
    configure,
    // Wrapper,
    WidgetPlanner,
    WidgetSchedule,
    WidgetAllOrCurrentExhibitorsColumnList
} from 'eventjuicer-site-components';


import settings from '../../settings'

const PagePlanner = ({email}) => (

    <div>


    
    <WidgetPlanner email={email} />

    <WidgetSchedule />

    <WidgetAllOrCurrentExhibitorsColumnList threshold={70} />


    </div>

)


export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {


await configure(props, {
    settings : settings,
    preload : []
})

return {props: props.query}

})


export default connect()(PagePlanner);
