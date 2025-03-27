import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const footerData = {
  aboutCompany: {
    heading: "About Company",
    content:
      "At Saraswate, we turn ideas into products, solving key problems for businesses with end-to-end solutions, including consultancy, design, development, testing, and maintenance.",
    icons: [
      {
        name: "LinkedIn",
        icon: <FaLinkedin className="h-8 w-8" />,
        link: "https://www.linkedin.com",
      },
      {
        name: "WhatsApp",
        icon: <FaWhatsapp className="h-8 w-8" />,
        link: "https://wa.me/9950488637",
      },
    ],
  },
  address: {
    heading: "Address",
    content: [
      {
        text: "+91 500088 55",
        icon: <FaPhoneAlt className="inline-block mr-2" />,
      },
      {
        text: "webteck@gmail.com",
        icon: <FaEnvelope className="inline-block mr-2" />,
      },
      {
        text: "162-A, Surya Nagar, Gopalpura Bypass, Jaipur, Rajasthan",
        icon: <FaMapMarkerAlt className="inline-block mr-2" />,
      },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { text: "Terms and Conditions", link: "#" },
      { text: "Privacy Policy", link: "#" },
    ],
  },
  pages: {
    heading: "Pages",
    links: [
      { text: "Home", link: "#" },
      { text: "About", link: "#" },
      { text: "Services", link: "#" },
      { text: "Gallery", link: "#" },
      { text: "Blog", link: "#" },
      { text: "Contact", link: "#" },
    ],
  },
};