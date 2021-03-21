import React, { Component, useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoIcon = (props) => {
	const text = props.text;
	const id = props.id;
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<span>
			<FontAwesomeIcon icon="info-circle" className="text-xs-center mx-1" size="1x" id={ "Tooltip-" + id }/>
			<Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target={"Tooltip-" + id} toggle={toggle}>
				{text}
			</Tooltip>
		</span>
	);
};

export default InfoIcon;