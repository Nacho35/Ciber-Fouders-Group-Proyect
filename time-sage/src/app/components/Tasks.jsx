'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import trash from '../../../public/images/trash.svg';
import write from '../../../public/images/write.svg';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState('');

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await axios.get('http://localhost:3001/task');
				const tasksFromServer = response.data.map(task => ({
					...task,
					isEditing: false,
					editedDescription: task.description,
				}));
				setTasks(tasksFromServer);
			} catch (error) {
				console.log(error);
			}
		};

		fetchTasks();
	}, []);

	const handleAddTask = async () => {
		if (newTask.trim() === '') {
			return;
		}

		try {
			const newTaskData = {
				id: uuidv4(),
				description: newTask,
				isEditing: false,
				editedDescription: newTask,
				completed: false,
			};
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

	const handleEditDescription = (taskId, newDescription) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {
					...task,
					editedDescription: newDescription,
				};
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const toggleEditTask = taskId => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {
					...task,
					isEditing: !task.isEditing,
				};
			}
			return task;
		});
		setTasks(updatedTasks);
	};

	const handleSaveEdit = async taskId => {
		try {
			const taskToUpdate = tasks.find(task => task.id === taskId);
			const updatedTask = {
				...taskToUpdate,
				description: taskToUpdate.editedDescription,
			};

			await axios.put(`http://localhost:3001/task/${taskId}`, updatedTask);

			const updatedTasks = tasks.map(task =>
				task.id === taskId
					? {
							...task,
							isEditing: false,
							description: taskToUpdate.editedDescription,
					  }
					: task
			);
			setTasks(updatedTasks);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleCompleteTask = async taskId => {
		try {
			const taskToUpdate = tasks.find(task => task.id === taskId);
			const updatedTask = {
				...taskToUpdate,
				completed: !taskToUpdate.completed,
			};

			await axios.put(`http://localhost:3001/task/${taskId}`, updatedTask);

			const updatedTasks = tasks.map(task =>
				task.id === taskId ? updatedTask : task
			);
			setTasks(updatedTasks);
		} catch (error) {
			console.log(error);
		}
	};

	const onDragEnd = result => {
		if (!result.destination) {
			return;
		}

		const updatedTasks = [...tasks];
		const [movedTask] = updatedTasks.splice(result.source.index, 1);
		updatedTasks.splice(result.destination.index, 0, movedTask);

		setTasks(updatedTasks);
	};

	return (
		<section id='tasks' className='wallpaper-task'>
			<div className='min-h-screen font-Poppins break-words p-2 w-full '>
				<div className='mx-4 mb-4'>
					<input
						type='text'
						placeholder='New Task'
						required
						value={newTask}
						onChange={e => setNewTask(e.target.value)}
						className='input input-bordered max-w-xs w-fit text-colorSix'
					/>
					<button onClick={handleAddTask} className='general-btn mx-3 my-3'>
						Add Task
					</button>
				</div>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId='taskList' direction='vertical'>
						{provided => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className='p-4'
							>
								{tasks.map((task, index) => (
									<Draggable key={task.id} draggableId={task.id} index={index}>
										{provided => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<div className='w-auto h-fit p-2 my-4 glass text-colorEleven block items-center justify-between md:block lg:flex'>
													<div className='flex items-center my-3'>
														<input
															type='checkbox'
															checked={task.completed}
															onChange={() => toggleCompleteTask(task.id)}
															className='checkbox checkbox-primary'
														/>
														<label className='ml-2 break-all'>
															{task.description}
														</label>
													</div>
													<div className='flex items-center'>
														{task.isEditing ? (
															<div>
																<input
																	type='text'
																	className='input input-bordered w-fit max-w-xs text-colorSix'
																	value={task.editedDescription}
																	onChange={e =>
																		handleEditDescription(
																			task.id,
																			e.target.value
																		)
																	}
																/>
																<button
																	onClick={() => {
																		toggleEditTask(task.id);
																		handleSaveEdit(task.id);
																	}}
																	className='btn btn-ghost mx-3 lg:my-2'
																>
																	SAVE
																</button>
															</div>
														) : (
															<div className='card-actions'>
																<button
																	onClick={() => toggleEditTask(task.id)}
																	className='btn btn-ghost'
																>
																	<Image src={write} alt='icon' />
																</button>
																<button
																	onClick={() => handleDeleteTask(task.id)}
																	className='btn btn-ghost'
																>
																	<Image src={trash} alt='icon' />
																</button>
															</div>
														)}
													</div>
												</div>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</section>
	);
};

export default Tasks;
