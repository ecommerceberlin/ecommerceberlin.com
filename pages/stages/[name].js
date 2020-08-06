import {
  connect,
  Wrapper,
  Stage,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

const settings = require('../../settings').default;

const PageStage = ({stage}) => (<>
<Wrapper first label={`Scena ${stage.toUpperCase()}`}>
    <Stage stage={stage} />
  </Wrapper>
</>)

export async function getStaticPaths() {
  
  return {
      paths: [
        { params: { name: "A" } },
        { params: { name: "B" } },
        { params: { name: "C" } },
        { params: { name: "D" } },
        { params: { name: "E" } },
      ],
      fallback: true 
    };
  }  
  
  export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {
  
    await configure(store, {
      settings : settings,
      //preload : ["exhibitors"])
    })

    return {
        props : {
            stage : "name" in params ? params.name : ""
        }
    }
  
  })
  


export default connect()(PageStage);
