import React from "react";


const Details = (props) => {
    const myRobot = props.robots.filter((robot) => {
        return robot.id === parseInt(props.id, 10);
    })[0]
    if (myRobot) {
        console.log(myRobot)
        return (
            <div style={{ display: "flex", justifyContent: "center", marginRight: "200px" }}>
                <img alt='robots' src={`https://robohash.org/${props.id}?size=300x400`} />
                <div style={{ marginTop: "100px" }}>
                    <h3>Hi, my name is {myRobot.name}! </h3>
                    <h3>I live in {myRobot.address.street} street. It's in {myRobot.address.city}! </h3>
                    <h3>If you wanna contact me, my number is {myRobot.phone} </h3>
                    <h3>Or via email, {myRobot.email} </h3>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Loading...</h1>
            </div>
        )
    }
}

export default Details;