/** @format */

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, MenuItem } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { useStyles } from '../constants';
import { withStyles } from '@material-ui/core/styles';

const Contact = () => {
	const CssTextField = withStyles({
		root: {
			'& label.Mui-focused': {
				color: 'green',
			},
			'& .MuiInput-underline:after': {
				borderBottomColor: 'green',
			},
			'& .MuiOutlinedInput-root': {
				'&.Mui-focused fieldset': {
					borderColor: 'green',
				},
			},
		},
	})(TextField);

	const classes = useStyles();

	return (
		<div className={classes.paper}>
			<Typography
				paragraph
				variant='h4'
				color='primary'
				classes={{ colorPrimary: classes.color }}
			>
				Contact
			</Typography>
			<form noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<CssTextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='firstName'
							label='First Name'
							name='firstName'
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<CssTextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='lastName'
							label='Last Name'
							name='lastName'
						/>
					</Grid>
				</Grid>
				<CssTextField
					variant='outlined'
					margin='normal'
					fullWidth
					required
					id='email'
					label='Email Address'
					name='email'
					type='email'
				/>
				<CssTextField
					variant='outlined'
					margin='normal'
					fullWidth
					id='message'
					label='Message'
					name='message'
					multiline
					rows={7}
				/>
				<Typography paragraph>Which service(s) are you looking for?</Typography>
				<FormControlLabel
					control={
						<Checkbox
							value='portrait'
							color='primary'
							size='small'
							classes={{ root: classes.root, checked: classes.checked }}
						/>
					}
					label='Portrait Photos'
				/>
				<br />
				<FormControlLabel
					control={
						<Checkbox
							value='landscape'
							color='secondary'
							size='small'
							classes={{ root: classes.root, checked: classes.checked }}
						/>
					}
					label='Landscape Photos'
				/>
				<br />
				<FormControlLabel
					control={
						<Checkbox
							value='editorial'
							color='primary'
							size='small'
							classes={{ root: classes.root, checked: classes.checked }}
						/>
					}
					label='Editorial/Fashion Photos'
				/>
				<br />
				<FormControlLabel
					control={
						<Checkbox
							value='film'
							color='primary'
							size='small'
							classes={{ root: classes.root, checked: classes.checked }}
						/>
					}
					label='Film Photos'
				/>
				<br />
				<FormControlLabel
					control={
						<Checkbox
							value='wedding'
							color='primary'
							size='small'
							classes={{ root: classes.root, checked: classes.checked }}
						/>
					}
					label='Engagement/Wedding Photos'
				/>
				<p />
				<Typography>How did you hear about me?</Typography>
				<Select style={{minWidth: '175px'}}>
					<MenuItem value={'friend'}>Friend</MenuItem>
					<MenuItem value={'facebook'}>Facebook</MenuItem>
					<MenuItem value={'instagram'}>Instagram</MenuItem>
					<MenuItem value={'twitter'}>Twitter</MenuItem>
				</Select>
				<br />
				<Button
					type='submit'
					variant='contained'
					color='primary'
					size='large'
					classes={{root: classes.button}}
				>
					Submit
				</Button>
			</form>
		</div>
	);
};
export default Contact;
