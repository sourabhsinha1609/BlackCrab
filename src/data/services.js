import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPrecisionManufacturing, MdAndroid, MdSecurity } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsWrenchAdjustable } from "react-icons/bs";

const services = [
    {
      "icon": MdAndroid,
      "title": "AI Solutions",
      "disc": "We leverage AI, including machine and deep learning, to convert data to valuable insights, enhancing business operations.",
      "dir": "left",
      link: "/aisolutions"
    },
    {
      "icon": BsWrenchAdjustable,
      "title": "Machine Learning",
      "disc": " Seamlessly transform raw data into valuable insights, enabling informed decision-making and predictive accuracy.",
      "dir": "left",
      link: "/mlsolutions"
    },
    {
      "icon": MdSecurity,
      "title": "Cyber Security",
      "disc": "Our cutting-edge solutions ensure your digital assets are protected, guarding against threats in an increasingly connected world.",
      "dir": "left",
      link: "/cybersecurity"
    },
    {
      "icon": FiDatabase,
      "title": "Database Management",
      "disc": "We create and manage scalable databases, ensuring your data is accessible, secure, and well-organized.",
      "dir": "left",
      link: "/databasemanagement",
    },
    {
      "icon": MdPrecisionManufacturing,
      "title": "Product Manufacturing",
      "disc": "Our technology products are born from passion and expertise, designed to revolutionize how you interact with tech.",
      "dir": "right",
      link: "/productmanufacturing",
    },
    {
      "icon": AiOutlineCloudServer,
      "title": "Cloud Services",
      "disc": "Embrace the flexibility and scalability of the cloud with our tailored solutions that drive efficiency and innovation.",
      "dir": "right",
      link: "/cloudservices",
    },
    {
      "icon": FaChalkboardTeacher,
      "title": "Training and Workshops",
      "disc": "Enhance team skills through our empowering training programs, delivering up-to-date tech knowledge.",
      "dir": "right",
      link: "/trainingandworkshops",
    },
    {
      "icon": GiArchiveResearch,
      "title": "Research and Development",
      "disc": "We're pioneers in tech research, driving innovation through exploration and experimentation.",
      "dir": "right",
      link: "/researchanddevelopment",
    }
  ];

  export default services;