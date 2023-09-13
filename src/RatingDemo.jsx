import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo() {
	const [rating, setRating] = useState(null);
	return (
		<div>
			<h1>Rating Demo. Current Score: {rating}</h1>
			<Rating
				name="simple-controlled"
				value={rating}
				onChange={(event, newValue) => {
					setRating(newValue);
				}}
			/>
		</div>
	);
}
