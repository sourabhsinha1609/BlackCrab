import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Concept to Reality',
		description: 'Bring your product ideas to life with our contract-based manufacturing services, guiding you from concept to market-ready products.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Quality Assurance',
		description: 'Ensure high-quality products through rigorous quality control processes during every stage of manufacturing.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Cost Efficiency',
		description: 'Streamline the manufacturing process to save time and reduce costs, helping you achieve a competitive edge.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
