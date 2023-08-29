import React from "react";

import { FcKey } from "react-icons/fc";
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from "react-icons/fc";
import { FcSettings, FcAssistant } from "react-icons/fc";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Innovation",
    description:
      "We thrive on pushing boundaries, crafting unique solutions that address your specific challenges.",
    icon: iconStyle(FcKey),
    imgClass: "one",
  },
  {
    name: "Collaboration",
    description:
      "Your vision is our starting point. We work closely with you to ensure our solutions align with your goals.",
    icon: iconStyle(FcCheckmark),
    imgClass: "two",
  },
  {
    name: "Expertise",
    description:
      "Our team comprises skilled professionals who excel in their respective fields, ensuring top-notch quality.",
    icon: iconStyle(FcSettings),
    imgClass: "three",
  },
];
