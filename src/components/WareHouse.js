import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import check from '../table/check_box.svg';
import useWindowDimensions from './Width';
import NavMob from './NavbarMobile';

const styles = makeStyles({
	cont: {
		width: '100%',
		margin: '0',
		padding: '0',
	},
	body: {
		width: '95%',
		margin: 'auto',
	},
	pageInfo: {
		width: '95%',
		margin: 'auto',
		display: 'flex',
		columnGap: '2rem',
		'@media(max-width:800px)': {
			flexDirection: 'column',
		},
	},
	infoLeft: {
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		height: '5rem',
		// border: '1px solid black',
		'& p': {
			flex: 1,
			textAlign: 'center',
			/* border: 1px solid black; */
			height: '100%',
			display: 'flex',
			alignItems: 'center',
			width: '4rem',
			// border: '1px solid black',
		},
		'& p:nth-child(1)': {
			fontSize: '2rem',
			fontWeight: '600',
			color: '#333333',
			// border: '1px solid black',

			'@media(max-width:1000px)': {
				fontSize: '1.2rem',
			},
		},
		'& p:nth-child(2)': {
			fontSize: '1rem',
			color: '#366ef1',
			padding: '0.2rem',
			justifyContent: 'center',
			// border: '1px solid black',
			'@media(max-width:800px)': {
				fontSize: '0.7rem',
				justifyContent: 'center',
			},
		},
		'& p:nth-child(3)': {
			'@media(max-width:800px)': {
				justifyContent: 'right',
			},
			'& p': {
				fontSize: '0.8rem',
				fontWeight: '500',
				background: '#ff002b 0% 0% no-repeat padding-box',
				color: '#fff',
				padding: '0.5rem 0rem',
				height: 'auto',
				justifyContent: 'center',
				/* border: 1px solid black; */
				marginLeft: '0.5rem',
				borderRadius: '10px',
				// color: '#ff002b',
				'&:hover': {
					boxShadow: '0px 0px 16px #ff002b50',
				},
				'@media(max-width:800px)': {
					fontSize: '0.7rem',
				},
			},
		},
		'@media(max-width:800px)': {
			justifyContent: 'space-between',
			width: '100%',
		},
	},
	infoRight: {
		flex: '1',
		display: 'flex',
		alignItems: 'center',
		columnGap: '1rem',
		justifyContent: 'flex-end',
		// border: '1px solid black',

		'@media(max-width:800px)': {
			justifyContent: 'space-between',
			width: '100%',
		},
		'@media(max-width:375px)': {
			flexWrap: 'wrap',
			rowGap: '0.5rem',
		},
	},
	create: {
		'&:hover': {
			boxShadow: '0px 0px 16px #366ef150',
		},
	},
	calander: {
		position: 'absolute',
		height: 'auto',
		width: '30vw',
		backgroundColor: '#fff',
		right: '0',
		top: '100%',
		zIndex: '100',
		borderRadius: '10px',
		display: 'flex',
		padding: '1rem',
		columnGap: '1rem',
		'& div': {
			flex: 1,
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			'& label': {
				display: 'block',
				fontSize: '0.8rem',
				fontWeight: '300',
			},
		},
		'@media(max-width:1000px)': {
			width: 'auto',
		},

		'@media(max-width:800px)': {
			flexDirection: 'column',
			width: 'auto',
			right: '-400%',
			rowGap: '1rem',
		},
	},
	head: {
		'&:first-child div': {
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundImage: `url(${check})`,
		},
	},
	table: {
		overflow: 'auto',
		fontSize: '1rem',
		fontWeight: '700',

		'& tr': {
			textAlign: 'left !important',
		},
		'& td': {
			textAlign: 'left !important',
			'& p': {
				maxWidth: '11rem',
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			},
		},
		'& th': {
			borderLeft: '1px solid #477EFF',
		},
	},
	mail: {
		'& p': {
			fontWeight: '500',
			fontSize: '0.7rem',
			textAlign: 'left',
		},
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '80%',
		margin: 'auto',

		'& span': {
			height: '2rem',
			width: '2rem',
			display: 'block',
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'& span:nth-child(1)': {
			backgroundColor: '#CCDBFF',
		},
		'& span:nth-child(2)': {
			backgroundColor: '#FFCCD5',
		},
		'@media(max-width:1200px)': {
			width: '100%',
		},
	},
});
const WareHouse = () => {
	const classes = styles();
	const { height, width } = useWindowDimensions();
	const [totalChecked, setTotalChecked] = useState(0);
	const [calander, setCalander] = useState(false);
	const [ready, setReady] = useState(false);

	const [data, setData] = useState([
		{
			id: '#121212',
			WareName: 'Banglore-Mother Warehouse',
			state: 'Maharastra',
			Address: 'Thane',
			pincode: '123456',
			name: 'aman Kumar',
			phone: '+911234567890',
			mail: 'aman123456@gmail.com',
		},
		{
			id: '#121212',
			WareName: 'Banglore-Mother Warehouse',
			state: 'Maharastra',
			Address: 'Thane',
			pincode: '123456',
			name: 'aman Kumar',
			phone: '+911234567890',
			mail: 'aman123456@gmail.com',
		},
	]);

	const findChecked = () => {
		const temp = [];
		data.forEach((item, index) => {
			if (document.getElementById(`${'id' + index}`).checked) temp.push(index);
		});
		console.log(temp.length);
		setTotalChecked(temp.length);
	};

	useEffect(() => {
		setReady(true);
	}, []);

	return (
		<div className={classes.cont}>
			{width > 800 && <Navbar />}
			{width <= 800 && <NavMob width={width} />}
			<div className={classes.body}>
				<div className={classes.pageInfo}>
					<div className={classes.infoLeft}>
						<p>Manage Warehouse</p>
						<p>{totalChecked > 0 ? totalChecked + ' Orders Selected' : ''}</p>
						<p>
							{totalChecked > 0 && <p style={{ cursor: 'pointer' }}>Delete</p>}
						</p>
					</div>
					<div className={classes.infoRight}>
						<div style={{ position: 'relative' }}>
							<div
								style={{
									height: '2rem',
									width: '2rem',
									backgroundColor: '#fff',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: '8px',
									backgroundColor: `${calander ? '#366ef1' : '#fff'}`,
								}}
								onClick={() => {
									if (!calander) setCalander(true);
									else setCalander(false);
								}}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 24 24'
								>
									<path
										d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z'
										fill={calander ? '#fff' : '#366ef1'}
									/>
								</svg>
							</div>
							{calander && (
								<div className={classes.calander}>
									<div>
										<label htmlFor='calc1'>Starting Date</label>
										<input type='date' name='calc1' id='calc1' />
									</div>
									<div>
										<label htmlFor='calc2'>Last Date</label>
										<input type='date' name='calc2' id='calc2' />
									</div>
								</div>
							)}
						</div>
						<input
							type='text'
							style={{
								height: '2rem',
								borderRadius: '8px',
								border: 'none',
								padding: '0.2rem 0.2rem',
								color: '#707070',
							}}
							name='text'
							id='text'
							placeholder='Search'
						/>

						<div
							style={{
								height: '2rem',
								width: '2rem',
								backgroundColor: '#fff',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: '8px',
							}}
						>
							<svg
								id='export_icon'
								data-name='export icon'
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path
									id='container'
									d='M4,0H20a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z'
									transform='translate(24) rotate(90)'
									fill='#fff'
									opacity='0'
								/>
								<path
									id='Icon_material-file-upload'
									data-name='Icon material-file-upload'
									d='M10.357,13.676h4.286V9.441H17.5L12.5,4.5l-5,4.941h2.857ZM7.5,15.088h10V16.5H7.5Z'
									transform='translate(-0.5 1.5)'
									fill='#366ef1'
								/>
							</svg>
						</div>
						<div>
							<button
								className={classes.create}
								style={{
									height: '2rem',
									backgroundColor: '#366EF1',
									color: '#fff',
									border: 'none',
									padding: '0 1rem',
									borderRadius: '8px',
								}}
							>
								Add Warehouse
							</button>
						</div>
					</div>
				</div>
				<div className={classes.table}>
					<table className='tb'>
						<tr className={classes.head}>
							<th
								style={{
									padding: '0.2rem',
								}}
							>
								<div
									style={{
										width: '1.2rem',
										height: '1.2rem',
										// backgroundColor: 'red',
										borderRadius: '4px',
										transform: 'translateX(0.2rem)',
										// backgroundImage: `url${check}`,
									}}
								></div>
							</th>
							<th>Refernece Id</th>
							<th>Name</th>
							<th>State</th>
							<th>Address</th>
							<th>Pincode</th>
							<th>Contact Person</th>
							<th>Contact Number</th>
							<th>Actions</th>
						</tr>
						<tr></tr>
						{data.map((data, index) => {
							return (
								<tr key={index}>
									<td>
										<span style={{ display: 'flex', alignItems: 'center' }}>
											<input
												type='checkbox'
												name={'id' + index}
												id={'id' + index}
												style={{ display: 'none' }}
												onChange={() => findChecked()}
											/>
											<label
												htmlFor={'id' + index}
												style={{
													borderRadius: '5px',
													border: '1px solid #366EF1',
													height: '1.2rem',
													width: '1.2rem',
												}}
											></label>
										</span>
									</td>
									<td>{data.id}</td>
									<td>
										<p style={{ maxWidth: '8rem' }}>{data.WareName}</p>
									</td>
									<td>{data.state}</td>
									<td>{data.Address}</td>
									<td>{data.pincode}</td>
									<td>
										<p>{data.name}</p>
									</td>
									<td className={classes.mail}>
										<p style={{ display: 'flex', alignItems: 'center' }}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='10'
												height='10'
												viewBox='0 0 24 24'
											>
												<path
													d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z'
													fill='#366EF1'
												/>
											</svg>{' '}
											{data.phone}
										</p>
										<p style={{ display: 'flex', alignItems: 'center' }}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='10'
												height='10'
												viewBox='0 0 24 24'
											>
												<path
													d='M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z'
													fill='#366EF1'
												/>
											</svg>{' '}
											&nbsp;
											{data.mail}
										</p>
									</td>
									<td>
										<div className={classes.actions}>
											<span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='15'
													height='15'
													viewBox='0 0 24 24'
												>
													<path
														d='M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z'
														fill='#366EF1'
													/>
												</svg>
											</span>
											<span>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='15'
													height='15'
													viewBox='0 0 24 24'
												>
													<path
														d='M3 6v18h18v-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.731 2 1.631 2h5.712z'
														fill='#FF002B'
													/>
												</svg>
											</span>
										</div>
									</td>
								</tr>
							);
						})}
					</table>
				</div>
			</div>
		</div>
	);
};

export default WareHouse;
