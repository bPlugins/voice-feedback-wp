import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import './editor.scss';
import Edit from './Components/Backend/Edit';

registerBlockType( metadata, {
	icon: 'microphone',

	// Build in Functions
	edit: Edit,

	save: () => null,
} );
