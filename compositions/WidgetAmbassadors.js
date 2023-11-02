
import { Grid, Person, Wrapper, useSettings, getSpeakerAvatar, get } from "eventjuicer-site-components"



const FullJobInfo = ({ company, job }) => {

    if(!company && !job){
      return null
    }
  
  
    return (
      <span>
        {job} @ <strong>{company}</strong>
      </span>
    );
  }

  

const defaultProps = {

    wrapperProps: {
        label : "ambassadors.list_all",
        secondaryLabel : "ambassadors.list_description",
    },
    people: [],
    gridData : { xs: 6, sm: 6, md: 4, lg: 3, xl: 3 },
}



const WidgetAmbassadors = ({setting="ambassador", ...props}) => {

    const settings = useSettings(setting)
    const {wrapperProps, people, gridData} = Object.assign({}, defaultProps, settings, props)

    return (<Wrapper {...wrapperProps}>
        <Grid container spacing={6}>{people.map(item => <Grid key={get(item, 'name')} item {...gridData}>
    <Person
      avatar={ getSpeakerAvatar(item) }
      title={get(item, 'name', "name")  }
      subtitle={ <FullJobInfo company={get(item, 'cname2', "cname2")} job={get(item, 'position', "position") } /> }
      text={ null }
      link={ null }
      moreLabel={ null }
    />
  </Grid>)
  }
</Grid></Wrapper>)


}


export default WidgetAmbassadors