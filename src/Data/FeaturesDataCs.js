import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Scalability',
		description: 'Harness the power of the cloud with our contract-based services, enabling seamless scalability and adaptability to changing needs.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Optimized Work',
		description: 'Maximize cloud performance through architecture updates and optimization strategies tailored to your workload.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Cost Efficiency',
		description: 'Benefit from cost-effective cloud solutions, optimizing resource allocation and reducing unnecessary expenses.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
