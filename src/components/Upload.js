import React, {useState} from 'react';
import PropTypes from 'prop-types';

import withRoot from "../modules/withRoot";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import styles from "./components.css";


function Upload(props) {
	let history = useHistory();
	const [file, setFile] = useState(null);
	const [isButtonDisabled, togglebutton] = useState(true);

	function handleFileChange(selectorFiles){
		if(selectorFiles.length > 0){
			togglebutton(false);
			setFile(selectorFiles);
		}
	}

	function submitResults(){
		if(!isButtonDisabled){
			props.submitFile(file);
			history.push("/results");
		}
	}

	console.log(isButtonDisabled, "disabledButton")

	return (
		<React.Fragment>
			<div className={styles.body}>
				<span>Upload a blueprint</span>
				<div>If you don't have one, download one
					<a target="_blank"
						 rel="noopener noreferrer"
						 href={"https://www.mediafire.com/file/6afpymbxs9g37zn/blueprintTest.json/file"}
					> here</a></div>
				<input type={"file"}
							 onChange={ (e) => handleFileChange(e.target.files) }/>
				<Button
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
