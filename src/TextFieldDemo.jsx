import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

export default function TextFieldDemo() {
	const [petName, setPetName] = useState('');
	const [volume, setVolume] = useState(50);
	const updateName = (e) => {
		setPetName(e.target.value);
	};
	const handleChange = (e, newVal) => {
		setVolume(newVal);
	};

	return (
		<div>
			<h2>Your pet name is: {petName}</h2>
			<TextField
				id="outlined-basic"
				label="Pet name"
				variant="outlined"
				placeholder="Ex.: Reginaldo"
				value={petName}
				onChange={updateName}
			/>
			<h2>Volume: {volume}</h2>
			<Stack
				spacing={2}
				direction="row"
				sx={{ mb: 1, mt: 3 }}
				alignItems="center"
			>
				<VolumeDown />
				<Slider
					aria-label="Volume"
					value={volume}
					onChange={handleChange}
				/>
				<VolumeUp />
			</Stack>
		</div>
	);
}
