import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Average Salary',
		description: 'We offer the best data security to our clients, which makes us stand out',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Demand',
		description: 'Our system is easy to use and integrate',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Remote Jobs',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
	{
		name: 'Job Security',
		description: 'Our team is available at all times in case you need us',
		icon: iconStyle(FcAssistant),
		imgClass: 'four',
	},
	{
		name: 'TechStack',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(FcMoneyTransfer),
		imgClass: 'five',
	},
	{
		name: 'Average Salary',
		description:
			'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(FcDatabase),
		imgClass: 'six',
	},
];
