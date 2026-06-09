import React from 'react';
import './FieldHeader.scss';
import { CrownIcon } from '../../../Utils/icons';

const FieldHeader = ({ title, icon, isFull = false }) => {
	return (
		<>
			<style>
				{!isFull &&
					`
          .bplvf-container {
            justify-content: unset;
            gap: 20px;
          }
          ` }
			</style>
			<div className="bplvf-header">
				<span className="bplvf-header-icon">{icon}</span>
				<h3 className="bplvf-field-title">{title}</h3>
			</div>
		</>
	);
};

export default FieldHeader;
