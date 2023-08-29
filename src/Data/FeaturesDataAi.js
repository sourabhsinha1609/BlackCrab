import React from "react";

import { FcKey } from "react-icons/fc";
import { FcCheckmark, FcMoneyTransfer, FcDatabase } from "react-icons/fc";
import { FcSettings, FcAssistant } from "react-icons/fc";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "AI Integration",
    description:
      "Seamlessly integrate AI into your projects with our contract-based solutions, enhancing functionality and performance.",
    icon: iconStyle(FcKey),
    imgClass: "one",
  },
  {
    name: "Consultancy",
    description:
      "Leverage our AI experts to guide you through complex AI decisions, ensuring you implement the right solutions for your needs.",
    icon: iconStyle(FcCheckmark),
    imgClass: "two",
  },
  {
    name: "Algorithms",
    description:
      "Benefit from our specialized AI algorithms and models to drive innovation and achieve unparalleled results.",
    icon: iconStyle(FcSettings),
    imgClass: "three",
  },
];
