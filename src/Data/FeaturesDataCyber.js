import React from 'react';

import { FcKey } from 'react-icons/fc';
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from 'react-icons/fc';
import { FcSettings, FcAssistant } from 'react-icons/fc';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Threat Monitoring',
		description: 'Ensure your digital assets are secure with continuous threat monitoring and proactive threat detection.',
		icon: iconStyle(FcKey),
		imgClass: 'one',
	},
	{
		name: 'Incident Response',
		description: 'Our contract-based cybersecurity services include rapid and effective incident response to minimize potential damages.',
		icon: iconStyle(FcCheckmark),
		imgClass: 'two',
	},
	{
		name: 'Security Updates',
		description: 'Stay protected against evolving threats through regular security updates and vulnerability assessments.',
		icon: iconStyle(FcSettings),
		imgClass: 'three',
	},
];
