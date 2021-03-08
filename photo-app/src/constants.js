/** @format */
import { createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import homeImg1 from './images/home-img5.jpg';
import homeImg2 from './images/home-img1.jpg';
import homeImg3 from './images/home-img8.jpg';
import homeImg4 from './images/home-img4.jpg';
import workImg1 from './images/work-img7.jpg';
import workImg2 from './images/work-img2.jpg';
import workImg3 from './images/work-img3.jpg';
import workImg4 from './images/work-img4.jpg';
import workImg5 from './images/work-img5.jpg';
import workImg6 from './images/work-img6.jpg';

export const theme = createMuiTheme({
	palette: {
		action: {
			hover: '#009900',
		},
	},
});

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
	root: {
		'&$checked': {
			color: 'green',
		},
	},
	checked: {},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundColor: '#00b300',
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	paper: {
		marginTop: theme.spacing(5),
		marginLeft: theme.spacing(10),
		width: '70%',
		[theme.breakpoints.up('md')]: {
			width: '50%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '40%',
		},
	},
	button: {
		color: 'white',
		backgroundColor: '#00b300',
		'&:hover': {
			 backgroundColor: '#00b300',
		},
		margin: '2em 0'
	},
	color: {
		color: '#00b300',
	},
	drawerPaper: {
		width: drawerWidth,
		color: 'white',
		backgroundColor: '#595959',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		padding: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: drawerWidth,
	},
}));

export const menu = [
	{ item: 'Home', url: '/home', icon: <HomeIcon style={{ color: 'white' }} /> },
	{
		item: 'About',
		url: '/about',
		icon: <InfoIcon style={{ color: 'white' }} />,
	},
	{
		item: 'Work',
		url: '/work',
		icon: <WorkIcon style={{ color: 'white' }} />,
	},
	{
		item: 'Contact',
		url: '/contact',
		icon: <MailIcon style={{ color: 'white' }} />,
	},
];

export const homeImages = [
	{
		url: homeImg1,
		description: 'slide 1',
		index: 1,
	},
	{
		url: homeImg2,
		description: 'slide 2',
		index: 2,
	},
	{
		url: homeImg3,
		description: 'slide 3',
		index: 3,
	},
	{
		url: homeImg4,
		description: 'slide 4',
		index: 4,
	},
];

export const workImages = [
	{
		url: workImg1,
		description: 'slide 1',
	},
	{
		url: workImg2,
		description: 'slide 1',
	},
	{
		url: workImg3,
		description: 'slide 1',
	},
	{
		url: workImg4,
		description: 'slide 1',
	},
	{
		url: workImg5,
		description: 'slide 1',
	},
	{
		url: workImg6,
		description: 'slide 1',
	},
];
