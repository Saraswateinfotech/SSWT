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
        link: "https://www.linkedin.com/company/saraswate",
      },
      {
        name: "WhatsApp",
        icon: <FaWhatsapp className="h-8 w-8" />,
        link: "https://wa.me/+919950488637",
      },
    ],
  },
  address: {
    heading: "Contact Us",
    content: [
      {
        text: "+91 9950488637",
        icon: <FaPhoneAlt className="inline-block mr-2" />,
      },
      {
        text: "contact@saraswate.com",
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
      { text: "Terms and Conditions", link: "/terms-and-conditions" },
      { text: "Privacy Policy", link: "/privacy-policy" },
      { text: "Contact", link: "#home-contact" },
    ],
  },
  pages: {
    heading: "Resources",
    links: [
      { text: "Home", link: "#home" },
      { text: "About", link: "#home-about" },
      { text: "Services", link: "#home-services" },
      { text: "Portfolio", link: "#home-portfolio" },
      { text: "Testimonials", link: "#home-testimonials" },
    ],
  },
};