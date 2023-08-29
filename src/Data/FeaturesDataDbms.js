import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Data Organization',
		description: 'Ensure data integrity and accessibility through contract-based database management, optimizing data organization and storage.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Optimized Work',
		description: 'Keep your databases running smoothly with ongoing performance optimization and tuning.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Troubleshooting',
		description: 'Resolve issues promptly and minimize downtime with our expert troubleshooting and maintenance support.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
