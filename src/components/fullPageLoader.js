import { ThreeCircles } from "react-loader-spinner"

function FullPageLoader() {
    return <div id="full_page_loader">
        <ThreeCircles
            height="80"
            width="80"
            color="skyblue"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
            />
    </div>
}

export default FullPageLoader;