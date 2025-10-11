<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-1 text-sm text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Company</h3>
      <Link to="/about-us" className="hover:text-yellow-600 transition">About Us</Link>
<<<<<<< HEAD
      <Link to="/delivery-information" className="hover:text-yellow-600 transition">Delivery Information</Link>
      <Link to="/privacy-policy" className="hover:text-yellow-600 transition">Privacy Policy</Link>
      <Link to="/terms-and-conditions" className="hover:text-yellow-600 transition">Terms & Conditions</Link>
<<<<<<< HEAD
      <Link to="/contact-us" className="hover:text-yellow-600 transition">Contact Us</Link>
=======
      <Link to="/contact" className="hover:text-yellow-600 transition">Contact Us</Link>
>>>>>>> 95d1a6d (update breadcrumb -  policy - terms)
=======
      <Link to="/delivery" className="hover:text-yellow-600 transition">Delivery Information</Link>
      <Link to="/privacy" className="hover:text-yellow-600 transition">Privacy Policy</Link>
      <Link to="/terms" className="hover:text-yellow-600 transition">Terms & Conditions</Link>
      <Link to="/contact" className="hover:text-yellow-600 transition">Contact Us</Link>
>>>>>>> c76c4e6 (AboutusPage)
    </div>
  );
}
=======
=======
>>>>>>> 23ed9b7 (footer)
import React from "react";

const FooterLinks: React.FC = () => {
  const links = ["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us"];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center md:text-left">Company</h3>
      <ul className="space-y-2 text-sm text-gray-600 text-center md:text-left">
        {links.map((link) => (
          <li key={link} className="hover:text-yellow-600 cursor-pointer transition-colors">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
<<<<<<< HEAD
>>>>>>> 211c9df (footer)
=======
>>>>>>> 23ed9b7 (footer)
