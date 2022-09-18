import * as React from 'react';

function SvgCaretUpSquare(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z' />
			<path d='M3.544 10.705A.5.5 0 004 11h8a.5.5 0 00.374-.832l-4-4.5a.5.5 0 00-.748 0l-4 4.5a.5.5 0 00-.082.537z' />
		</svg>
	);
}

export default SvgCaretUpSquare;
