import * as React from 'react';

function SvgSmokeFree(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 24 24'
			width='1em'
			className='svg-icon'
			{...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm.85-8.27c.62-.61 1-1.45 1-2.38h-1.5c0 1.02-.83 1.85-1.85 1.85v1.5c2.24 0 4 1.83 4 4.07V12H22V9.76c0-2.22-1.28-4.14-3.15-5.03zM14.5 8.65h1.53c1.05 0 1.97.74 1.97 2.05V12h1.5v-1.64c0-1.81-1.6-3.16-3.47-3.16H14.5c-1.02 0-1.85-.98-1.85-2s.83-1.75 1.85-1.75v-1.5a3.35 3.35 0 000 6.7zM17 13h-2.34L17 15.34zM3.41 4.59L2 6l7 7H2v3h10l7 7 1.41-1.41z' />
		</svg>
	);
}

export default SvgSmokeFree;
