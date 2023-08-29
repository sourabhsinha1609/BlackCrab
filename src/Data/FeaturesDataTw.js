import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Skill Enhancement',
		description: 'Empower your team with contract-based training and workshops, enhancing their skills and expertise in critical areas.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Learning Paths',
		description: 'Tailor training programs to your organizations specific needs, ensuring maximum relevance and effectiveness.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Competitive Edge',
		description: 'Equip your team with up-to-date knowledge and skills, giving your organization a competitive advantage in the fast-paced business landscape.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
