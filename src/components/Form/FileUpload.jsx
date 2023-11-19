import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { inputImage, showList } from "../../redux-toolkit/slices/imageSlices";


const FileUpload = (data) => {
  const dispatch = useDispatch();

  const { type } = data;

  const handleUpload = (event) => {
    event.preventDefault();

    if (!event.target.files[0]) {
      return;
    }
    dispatch(inputImage(URL.createObjectURL(event.target.files[0])));
    dispatch(showList(URL.createObjectURL(event.target.files[0])));
  };

  return (
    <React.Fragment>
      <div className={type + "-form-box"}>
        <span className="images-form-title">Click to select</span>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          onChange={handleUpload}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
      </div>
    </React.Fragment>
  );
};

export default FileUpload;
