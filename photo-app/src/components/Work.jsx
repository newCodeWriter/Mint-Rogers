/** @format */

import { Grid } from '@material-ui/core';
import React from 'react';
import { workImages } from '../constants';

const Work = () => {
	return (
		<Grid container spacing={2}>
			{workImages.map(({ url, description }) => (
				<Grid item xs={12} sm={6}>
					<img src={url} alt={description} width='100%' />
				</Grid>
			))}
		</Grid>
	);
};
export default Work;
