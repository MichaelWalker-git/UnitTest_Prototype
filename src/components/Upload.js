import React, {useState} from 'react';
import PropTypes from 'prop-types';

import withRoot from "../modules/withRoot";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import styles from "./components.css";

const styleUpload = {
	body: {
		display: "flex",
		flexDirection: "column",
	},

	uploadElements: {
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
	},
};

function Upload(props) {
	let history = useHistory();
	const [file, setFile] = useState(null);
	const [isButtonDisabled, toggleButton] = useState(true);

	function handleFileChange(selectorFiles){
		if(selectorFiles.length > 0){
			toggleButton(false);
			setFile(selectorFiles);
		}
	}

	function submitResults(){
		if(!isButtonDisabled){
			props.submitFile(file);
			history.push("/results");
		}
	}

	return (
		<React.Fragment>
			<div className={styleUpload.body}>
				<span className={styleUpload.uploadElements}>Upload a blueprint</span>
				<div className={styleUpload.uploadElements}>If you don't have one, download one
					<a target="_blank"
						 rel="noopener noreferrer"
						 href={"https://www.mediafire.com/file/6afpymbxs9g37zn/blueprintTest.json/file"}
					> here</a></div>
				<input type={"file"}
							 className={styleUpload.uploadElements}
							 onChange={ (e) => handleFileChange(e.target.files) }/>
				<Button
					className={styleUpload.uploadElements}
					color="secondary"
					size="large"
					variant="contained"
					onClick={submitResults}
					disabled={isButtonDisabled}
				>
					Upload
				</Button>
			</div>
		</React.Fragment>
	);
}

Upload.propTypes = {
	submitFile: PropTypes.func,
};

export default withRoot(Upload);
