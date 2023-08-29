import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Data Insights',
		description: 'Extract valuable insights from your data using our contract-based machine learning services, enabling data-informed decisions.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Automated Work',
		description: 'Implement machine learning to automate repetitive tasks and processes, increasing efficiency and reducing errors.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Predictive means',
		description: 'Utilize advanced machine learning algorithms to make accurate predictions, enhancing strategic planning and resource allocation.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
