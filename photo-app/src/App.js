/** @format */

import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Drawer, Divider, ThemeProvider } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { AppBar, Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { CssBaseline } from '@material-ui/core';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Error from './components/Error';
import { theme, useStyles, menu } from './constants';
import { NavLink, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import './App.css';

const App = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div id='home' className={classes.grow}>
			<CssBaseline>
				<ThemeProvider theme={theme}>
					<AppBar
						id='appbar'
						position='fixed'
						className={clsx(classes.appBar, {
							[classes.appBarShift]: open,
						})}
					>
						<Toolbar>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								onClick={handleDrawerOpen}
								edge='start'
								className={clsx(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography className={classes.title} variant='h6' noWrap>
								<span style={{ color: '#595959' }}>Mint </span>Rogers
							</Typography>
							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
								<IconButton color='inherit'>
									<FacebookIcon />
								</IconButton>
								<IconButton color='inherit'>
									<TwitterIcon />
								</IconButton>
								<IconButton color='inherit'>
									<InstagramIcon />
								</IconButton>
							</div>
						</Toolbar>
					</AppBar>
					<Toolbar/>
					<Drawer
						className={classes.drawer}
						variant='persistent'
						anchor='left'
						open={open}
						classes={{
							paper: classes.drawerPaper,
						}}
					>
						<div className={classes.drawerHeader}>
							<IconButton onClick={handleDrawerClose}>
								<ChevronLeftIcon style={{ color: 'white' }} />
							</IconButton>
						</div>
						<Divider light />
						<List>
							{menu.map(({ item, url, icon }) => (
								<NavLink
									to={url}
									activeStyle={{
										backgroundColor: '#009900',
										display: 'block',
									}}
								>
									<ListItem button key={item}>
										<ListItemIcon>{icon}</ListItemIcon>
										<ListItemText primary={item} style={{ color: 'white' }} />
									</ListItem>
								</NavLink>
							))}
						</List>
					</Drawer>
					<div
						id='content-wrapper'
						className={clsx(classes.content, {
							[classes.contentShift]: open,
						})}
					>
						<Switch>
							<Route exact path='/' render={() => <Redirect to="/home" />} />
							<Route exact path='/home' render={() => <Home />} />
							<Route exact path='/about' render={() => <About />} />
							<Route
								exact
								path='/work'
								render={(props) => <Work {...props} />}
							/>
							<Route exact path='/contact' render={() => <Contact />} />
							<Route render={() => <Error />} />
						</Switch>
					</div>
				</ThemeProvider>
			</CssBaseline>
		</div>
	);
};
export default App;
