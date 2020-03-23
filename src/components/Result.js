import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import "./../Components.css";

const useStyles = makeStyles({
    root: {
        color: "black",
        flexGrow: 1,
        fontWeight: "bolder",
        fontSize: "14.5rem",
        height: 216,
        maxWidth: 400,
    },
});


export const Result = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        setSelected(nodeIds);
    };
    const uploadedFile = JSON.parse(window.localStorage.getItem("jsonBluePrint"))["ADA"];

    console.log(uploadedFile);

     return (
        <React.Fragment>
            <div className="uploadBody">
                <Typography
                    align="center"
                    variant={"h5"}

                >
                    Results
                </Typography>
                {/*TODO: Reverse after finished*/}
                {!uploadedFile && <LinearProgress/>}
                {/*{uploadedFile &&*/}
                <div className={"resultsBody"}>
                    <TreeView
                        className={classes.root}
                        defaultCollapseIcon={<ExpandMoreIcon/>}
                        defaultExpandIcon={<ChevronRightIcon/>}
                        expanded={expanded}
                        selected={selected}
                        onNodeToggle={handleToggle}
                        onNodeSelect={handleSelect}
                    >
                        {/*<TreeItem nodeId="1" label={uploadedFile[0]}>*/}
                        {/*    <TreeItem nodeId="2" label={uploadedFile[0][0]}>*/}
                        {/*        <TreeItem nodeId="3" label={uploadedFile[0][0]}/>*/}
                        {/*    </TreeItem>*/}
                        {/*</TreeItem>*/}
                        {/*<TreeItem nodeId="4" label={uploadedFile[1]}>*/}
                        {/*    <TreeItem nodeId="5" label={uploadedFile[1][0]}>*/}
                        {/*        <TreeItem nodeId="6" label={uploadedFile[1][0]}/>*/}
                        {/*    </TreeItem>*/}
                        {/*</TreeItem>*/}
                    </TreeView>
                </div>
                {/*}*/}
            </div>
        </React.Fragment>)
};
