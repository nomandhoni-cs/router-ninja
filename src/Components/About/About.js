import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>

        <Link className="btn btn-primary" to="/">Go Back</Link>

    </>
  );
};

export default About;
