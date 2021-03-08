/** @format */

import { Grid } from '@material-ui/core';
import React from 'react';
import image from '../images/about-img.jpg';

const About = () => {
	return (
		<Grid id="about" container justify='center'>
			<Grid id='bio' item xs={12} sm={5}>
				<p>
					In photography there is a reality so subtle that it becomes more real
					than reality. It is a way of feeling, of touching, of loving. What I
					love about photographs is that they capture a moment that is gone
					forever, impossible to reproduce.
				</p>
				<hr width='6%' />
				<p>
					I am a Jacksonville native, a graduate of University of South Florida
					with a bachelor's in Sociology and Criminology. With over 6 years of
					professional photography experience, I fell in love with photographing
					weddings and taking portraits. My work is featured in numerous
					magazines and online publications.
				</p>
			</Grid>
            <Grid item xs={0} sm={1}/>
			<Grid id='bio-img' item xs={12} sm={5}>
				<img src={image} alt='a woman holding a camera' width='100%' />
			</Grid>
		</Grid>
	);
};
export default About;
