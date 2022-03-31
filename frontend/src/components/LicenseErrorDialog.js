import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { connect } from 'react-redux';

const LicenseErrorDialog = ({ license }) => {
	const handleClose = () => {
		// setOpen(false);
	};

	let error = null;
	if (license && license.error) {
		error = license.error;
	} else if (license && license.integrations?.error) {
		error = license.integrations.error;
	}

	return (
		<Dialog
			open={error}
			// onClose={handleClose}
			aria-labelledby="license-error-dialog-title"
			aria-describedby="license-error-dialog-description"
		>
			<DialogTitle align="center" id="license-error-dialog-title">
				{ error?.type }
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="license-error--dialog-description">
				{ error?.message }
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

const mapStateToProps = (state) => {
	return {
		license: state.license?.license,
	};
};

export default connect(mapStateToProps)(LicenseErrorDialog);
