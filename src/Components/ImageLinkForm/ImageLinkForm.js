import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) =>{
	return (
		<div>
			<p className = 'f3'>
				{'This is a Magic Brain. Just enter image and see the magic.'}
			</p>
			<div className = 'center '>
				<div className = 'center form pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' onChange={onInputChange} type='text' />
					<button onClick={onButtonSubmit} className='w-30  br3 grow f4 link ph2  dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;