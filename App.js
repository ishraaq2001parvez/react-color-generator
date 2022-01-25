import React,{ useState, useEffect } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App(){
	const [color,setColor]=useState('');
	const [error,setError]=useState(false);
	const [list,setList]=useState(new Values('#f12345').all(10));
	function handleSubmit(event){
		event.preventDefault();
		try{
			let colors=new Values(color).all(10);
			setList(colors);
		}
		catch(error){
			setError(true);
			console.log(error);
		}
	}
	return (
		<>
		<section className='container'>
			<h3>Color Generator</h3>
			<form onSubmit={handleSubmit}>
				<input 
				type='text' 
				value={color} 
				onChange={(event)=>{setColor(event.target.value)}}
				placeholder='#f12345'
				className={`${error?'error':null}`}
				/>
				<button type='submit' className='btn'>Submit</button>
			</form>
		</section>
		<section className='colors'>
			
			{list.map((color,index)=>{
				console.log(color);
				return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
				
				
			})}
		</section>
		
		</>
	)
}
export default App;