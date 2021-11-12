import { makeStyles } from '@mui/styles';
import Navbar from './Navbar';
import useWindowDimensions from './Width';
import NavMob from './NavbarMobile';

const style = makeStyles({
	cont: {
		width: '100%',
		margin: '0',
		padding: '0',
	},
	body: {
		width: '95%',
		margin: 'auto',
		paddingBottom: '4rem',
	},
	textBlock: {
		width: '100%',
		backgroundColor: '#fff',
		padding: '1.5rem 2rem',
		textAlign: 'left',
		borderRadius: '10px',
	},
	subHead: {
		fontSize: '1.5rem',
		fontWeight: '700',
		color: '#366EF1',
		marginTop: '0',
	},
	formCont: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',

		'@media(max-width:800px)': {
			flexDirection: 'column',
		},
	},
	textArea: {
		width: '22%',
		// border: '1px solid black',
		'& label': {
			display: 'block',
			fontSize: '0.8rem',
			color: '#707070',
		},
		'& input': {
			width: '100%',
			border: '1px solid #E4E4E4',
			outline: 'none',
			height: '2rem',
			borderRadius: '4px',
		},
		'@media(max-width:800px)': {
			width: '100%',
			marginBottom: '1rem',
		},
	},
	btns: {
		display: 'flex',
		justifyContent: 'right',
		'& button': {
			height: '2rem',
			padding: '1rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: '1rem 0.5rem',
			border: 'none',
			borderRadius: '8px',
		},
		'& button:nth-child(1)': {
			backgroundColor: 'rgba(0,0,0,0)',
			color: '#0000005C',
		},
		'& button:nth-child(2)': {
			backgroundColor: '#366EF1',
			color: '#fff',
			'&:hover': {
				boxShadow: '0px 0px 40px #366EF180',
			},
		},
	},
});
const AddWarehouse = () => {
	const classes = style();
	const { height, width } = useWindowDimensions();
	return (
		<div className={classes.cont}>
			{width > 800 && <Navbar />}
			{width <= 800 && <NavMob width={width} />}
			<div className={classes.body}>
				<p
					style={{
						margin: '0',
						textAlign: 'left',
						fontSize: '2rem',
						fontWeight: '700',
						marginBottom: '1rem',
						color: '#333333',
					}}
				>
					Add Warehouse
				</p>
				<div className={classes.textBlock}>
					<div className={classes.block1}>
						<p className={classes.subHead}>Warehouse Details</p>
						<div className={classes.formCont}>
							<div className={classes.textArea}>
								<label htmlFor='title'>Title</label>
								<input type='text' name='title' id='title' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='comp'>Company</label>
								<input type='text' name='comp' id='comp' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='compMail'>Company Email</label>
								<input type='text' name='compMail' id='compMail' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='pNum'>Phone Number</label>
								<input type='text' name='pNum' id='pNum' />
							</div>
						</div>
					</div>
					<div className={classes.block1} style={{ marginTop: '4rem' }}>
						<p className={classes.subHead}>Contact Person</p>
						<div
							className={classes.formCont}
							style={{ justifyContent: 'left' }}
						>
							<div className={classes.textArea} style={{ marginRight: '4%' }}>
								<label htmlFor='name'>Contact Person Name</label>
								<input type='text' name='name' id='name' />
							</div>
							<div className={classes.textArea} style={{ marginRight: '4%' }}>
								<label htmlFor='mail'>Email</label>
								<input type='text' name='mail' id='mail' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='phoneNum'>Phone Number</label>
								<input type='text' name='phoneNum' id='phoneNum' />
							</div>
						</div>
					</div>
					<div className={classes.block1} style={{ marginTop: '4rem' }}>
						<p className={classes.subHead}>Address</p>
						<div className={classes.formCont}>
							<div className={classes.textArea}>
								<label htmlFor='add'>Address</label>
								<input type='text' name='add' id='add' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='city'>City</label>
								<input type='text' name='city' id='city' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='pincode'>Pincode</label>
								<input type='text' name='pincode' id='pincode' />
							</div>
							<div className={classes.textArea}>
								<label htmlFor='state'>State</label>
								<input type='text' name='state' id='state' />
							</div>
						</div>
					</div>
				</div>
				<div className={classes.btns}>
					<button>Cancel</button>
					<button>Add Warehouse</button>
				</div>
			</div>
		</div>
	);
};

export default AddWarehouse;
