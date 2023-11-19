import React from "react";
import FormFacts from "../Form/FormFacts";
import FileUpload from "../Form/FileUpload";
import List from "../Sections/List";
import "./panel.css";

const USID = require("usid");
const usid = new USID();

const Panel = () => {
  return (
    <React.Fragment>
      <div className="facts-box">
        <FormFacts key={usid.rand()} type={"facts"} />
        <List key={usid.rand()} type={"facts"}></List>
      </div>
      <div className="gallery-box">
        <FileUpload key={usid.rand()} type={"images"} />
        <List key={usid.rand()} type={"images"}></List>
      </div>
    </React.Fragment>
  );
};
export default Panel;
/**  */
