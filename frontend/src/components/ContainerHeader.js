import Button from '@material-ui/core/Button';
import {useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';


export default Connections = (props) => {
	// const theme = useTheme();

	return (
		<div>
			<Typography style={{marginTop: '10px'}} variant="h6">
				{props.title}
			</Typography>
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
				<Typography style={{fontSize: '10pt'}}>
					{props.subTitle}
				</Typography>
				<div style={{marginLeft: '10px', minWidth: '140px'}}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

