import {
  connect,
  Wrapper,
  Stage,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageStage = ({name}) => (<>
<Wrapper first label={`Scena ${name.toUpperCase()}`}>
    {/* <Stage stage={name} /> */}
  </Wrapper>
</>)

export async function getStaticPaths() {
  
  return {
      paths: [
        { params: { name: "a" } },
        { params: { name: "b" } },
        { params: { name: "c" } },
        { params: { name: "d" } },
        { params: { name: "e" } },
      ],
      fallback: true 
    };
  }  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {
  
    await configure(props, {
      settings : settings,
      preload : ["exhibitors", "presenters"]
    })

    return {
        props : {
            name : params.name
        }
    }
  
  })
  


export default connect()(PageStage);
