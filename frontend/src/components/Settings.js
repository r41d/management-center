import React, { useContext } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import UserIcon from "@material-ui/icons/Person";
import { Link as RouterLink } from "react-router-dom";

import { WebSocketContext } from '../websockets/WebSocket';

const useStyles = makeStyles((theme) => ({
}));

const Settings = ({ settings, sendMessage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const context = useContext(WebSocketContext);
  const [connection, setConnection] = React.useState("");

  return (
	  <div>
		<Breadcrumbs aria-label="breadcrumb">
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/system">System</RouterLink>
			<Typography color="textPrimary">Settings</Typography>
		</Breadcrumbs>
		<br />
		Settings
	  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    settings: {},
  };
};

export default connect(mapStateToProps)(Settings);
