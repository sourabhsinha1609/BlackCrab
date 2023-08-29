import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Innovation Partner',
		description: 'Collaborate with us as your contract-based R&D partner, driving innovation and pushing the boundaries of your industry.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Advancements',
		description: 'Access cutting-edge technologies and expertise to develop revolutionary products and solutions.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Differentiation',
		description: 'Stand out in the market by leveraging our R&D services to develop unique and pioneering offerings.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
