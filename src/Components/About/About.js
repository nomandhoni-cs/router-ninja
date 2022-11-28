import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <Button className="btn-warning">
        <Link to="/">Go Back</Link>
      </Button>
    </>
  );
};

export default About;
