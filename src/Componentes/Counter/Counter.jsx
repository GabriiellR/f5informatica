import CountUp from "react-countup";

export default ((props) => {

    return (<>
        <CountUp
            start={0}
            duration={5}
            end={props.numero}
            enableScrollSpy={true}
            separator="."
        />
    </>)

})