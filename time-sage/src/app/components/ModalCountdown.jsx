import React, { useState } from 'react';
import Countdown from './Countdown';

const ModalCountdown = () => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [showModal, setShowModal] = useState(true);
	const [showCountdown, setShowCountdown] = useState(false);

	const handleInputChangeHours = e => {
		setHours(parseInt(e.target.value));
	};

	const handleInputChangeMinutes = e => {
		setMinutes(parseInt(e.target.value));
	};

	const handleStart = () => {
		setShowCountdown(true);
		setShowModal(false);
	};

	const handleBackToInput = () => {
		setShowCountdown(false);
		setShowModal(true);
	};

	return (
		<div className='w-max'>
			{showModal && (
				<form
					onSubmit={e => e.preventDefault()}
					className='modal-box text-colorSix font-Poppins font-medium flex flex-col items-center m-auto'
				>
					<label htmlFor='hours' className='font-bold text-lg text-colorOne'>
						Hours
					</label>
					<input
						type='number'
						name='hours'
						id='hours'
						value={hours}
						onChange={handleInputChangeHours}
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<label htmlFor='minutes' className='font-bold text-lg text-colorOne'>
						Minutes
					</label>
					<input
						type='number'
						name='minutes'
						id='minutes'
						value={minutes}
						onChange={handleInputChangeMinutes}
						required
						className='input input-bordered w-full max-w-xs my-3'
					/>
					<div className='modal-action'>
						<div>
							<button
								className='btn btn-outline btn-success'
								type='button'
								onClick={handleStart}
							>
								Start
							</button>
						</div>
					</div>
				</form>
			)}

			{showCountdown && (
				<div>
					<Countdown initialHours={hours} initialMinutes={minutes} />
					<div className='flex flex-row'>
						<div>
							<button
								className='btn btn-wide btn-error'
								onClick={handleBackToInput}
							>
								Reset
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ModalCountdown;
