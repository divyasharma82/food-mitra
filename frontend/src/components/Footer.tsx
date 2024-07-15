import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  return (
    <div className="bg-amber-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight mb-4 md:mb-0">
          FoodMitra
        </span>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-white font-bold tracking-tight">
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
          </span>
          <span className="text-white font-bold tracking-tight">
            <a href="#" className="hover:text-gray-200">
              Terms of Service
            </a>
          </span>
          <span className="text-white font-bold tracking-tight">
            <a href="#" className="hover:text-gray-200">
              About Us
            </a>
          </span>
          <span className="text-white font-bold tracking-tight">
            <a href="#" className="hover:text-gray-200">
              Contact Us
            </a>
          </span>
          <span className="text-white font-bold tracking-tight">
            <a href="#" className="hover:text-gray-200">
              FAQs
            </a>
          </span>
        </div>
      </div>
      <div className="container mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-200">
            <FontAwesomeIcon icon={faFacebookF} className="text-white" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FontAwesomeIcon icon={faTwitter} className="text-white" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FontAwesomeIcon icon={faInstagram} className="text-white" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FontAwesomeIcon icon={faLinkedin} className="text-white" />
          </a>
        </div>
        <div className="text-white text-sm text-center">
          © 2024 FoodMitra. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
