import React, {useState,useEffect} from 'react';
import rgbToHex from './utils';
function SingleColor({rgb,weight,index,hexColor}){
	const [alert,setAlert]=useState(false);
	let bcg=rgb.join(',');
	let hex=rgbToHex(...rgb);
	let hexValue=`#${hexColor}`
	useEffect(()=>{
		let timeOut=setTimeout(()=>{
			setAlert(false);
		},1000);
		return ()=>clearTimeout(timeOut);
	},[alert])
	return (
		<article 
		className={`color ${index>8 &&'color-light'}`} 
		style={{backgroundColor:`rgb(${bcg})`}}
		onClick={()=>{
			setAlert(true);
			navigator.clipboard.writeText(hexValue);
		}}
		>
			<p className='percent-value'>{weight}</p>
			<p className='color-value'>{hexValue}</p>
			{alert && <p className='alert'>copied to clipboard!</p> }
		</article>
	)
}
export default SingleColor;