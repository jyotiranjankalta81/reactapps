import React from "react";
import Common from "./Common";
import web from "../src/images/img3.jpg";

const About = () => {
    return (
        <>
            <Common name="Welcome to" imgsrc={web} visit="/Contact" btname="Contact Now" />
        </>
    )
}

export default About;