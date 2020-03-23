import React, {useState} from 'react';
import PropTypes from 'prop-types';

import withRoot from "../modules/withRoot";
import {useHistory} from "react-router-dom";
import {Button, Typography} from "@material-ui/core";
import "../Components.css";

const callToActionText = `If you don't have one, download one:   `;

function Upload(props) {
	let history = useHistory();
	const [isButtonDisabled, toggleButton] = useState(true);

	function handleFileChange(selectorFiles){
		if(selectorFiles.length > 0){
			toggleButton(false);
			const reader = new FileReader();
			reader.onload = function (e) {
				const stringifiedJson =  JSON.stringify(e.target.result);
				window.localStorage.setItem("jsonBluePrint", stringifiedJson);
			};
			reader.readAsText(selectorFiles[0]);
		}
	}

	function submitResults(){
		if(!isButtonDisabled){
			history.push("/results");
		}
	}

	return (
		<React.Fragment>
			<div className={"uploadBody"}>
				<Typography
					variant="h3"
					className={"uploadElements"}>Upload a blueprint</Typography>
				<div className={"spaceBetweenText"}>
					<Typography variant="body1" className="callToAction">{callToActionText}</Typography>
					<div>{" "}</div>
					<a target="_blank"
						 rel="noopener noreferrer"
						 href={"https://www.mediafire.com/file/6afpymbxs9g37zn/blueprintTest.json/file"}
					>
						<Typography variant="body1">{' here'}</Typography>
					</a>
				</div>
				<div className={"uploadElements"}>
					<input type={"file"}
						   className={"uploadElements"}
						   onChange={ (e) => handleFileChange(e.target.files) }/>
				</div>
				<Button
					className={"uploadElements"}
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
