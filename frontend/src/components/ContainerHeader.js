import Typography from '@material-ui/core/Typography';
import React from 'react';


export default function ConnectionHeader(props) {
	// const theme = useTheme();

	return (
		<div style={{marginBottom: '20px'}}>
			<Typography style={{marginTop: '10px', marginBottom: '5px'}} variant="h6">
				{props.title}
			</Typography>
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<Typography style={{fontSize: '10pt'}}>
					{props.subTitle}
				</Typography>
				<div style={{marginLeft: '15px', minWidth: '160px'}}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

