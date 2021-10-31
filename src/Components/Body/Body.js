import AidProject from "./AidProject";
import Cover from "./Cover";
import RecentImpact from "./RecentImpact";
import Roadmap from "./Roadman";
import TokeNomies from "./TokeNomies";

const Body = () => {
    return(
        <>
            <Cover/>
            <AidProject/>
            <RecentImpact/>
            <TokeNomies/>
            <Roadmap/>
        </>
    )
}

export default Body;