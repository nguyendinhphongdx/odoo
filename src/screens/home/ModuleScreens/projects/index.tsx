import React from "react";
import ContainerScreen from "../../../../common/components/ContainerScreen";
import HeaderScreen from "../../../../common/components/headerScreen";
interface PropsScreens {

}
const ProjectScreen:React.FC<PropsScreens> = ({navigation,route})=>{
    return(
        <ContainerScreen bottomTab={true}>
            <HeaderScreen title={'Project Screen'} goBack={true}/>
        </ContainerScreen>
    );
}
export default ProjectScreen;