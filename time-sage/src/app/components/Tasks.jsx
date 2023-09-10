'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await axios.get('http://localhost:3001/task');
				setTasks(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchTasks();
	}, []);

	const handleAddTask = async () => {
		try {
			const newTaskData = { description: newTask };
			const response = await axios.post(
				'http://localhost:3001/task',
				newTaskData
			);
			const newTaskId = { ...newTaskData, id: response.data.id };
			setTasks([...tasks, newTaskId]);
			setNewTask('');
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteTask = async taskId => {
		try {
			await axios.delete(`http://localhost:3001/task/${taskId}`);
			const updatedTasks = tasks.filter(task => task.id !== taskId);
			setTasks(updatedTasks);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section id='tasks' className='min-h-screen w-full wallpaper-task'>
			<div className='mx-4 mb-4'>
				<input
					type='text'
					placeholder='New Task'
					required
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					className='input input-bordered input-success max-w-xs w-fit text-colorSix'
				/>
			</div>
			<div className='mx-4'>
				<button onClick={handleAddTask} className='btn btn-outline btn-success'>
					Add Task
				</button>
			</div>
			<div className='grid grid-cols-1 gap-4 p-4'>
				{tasks.map(task => (
					<div
						className='card w-fit bg-colorOne text-colorFive shadow-xl'
						key={task.id}
					>
						<div className='card-body'>
							<h2 className='text-center'>{task.description}</h2>
							<div className='card-actions justify-end'>
								<button
									onClick={() => handleDeleteTask(task.id)}
									className='btn btn-outline btn-error'
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tasks;
