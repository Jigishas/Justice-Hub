import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

 function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4 relative pb-2 after:content-[''] after:block after:w-10 after:h-1 after:bg-[#e74c3c] after:absolute after:bottom-0 after:left-0">About JusticeHub</h3>
          <p className="text-gray-300 text-sm">JusticeHub is a platform dedicated to promoting social justice through education, community engagement, and actionable initiatives.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-white/10 hover:bg-[#e74c3c] transition rounded-full w-9 h-9 flex items-center justify-center"><FaFacebookF /></a>
            <a href="#" className="bg-white/10 hover:bg-[#e74c3c] transition rounded-full w-9 h-9 flex items-center justify-center"><FaTwitter /></a>
            <a href="#" className="bg-white/10 hover:bg-[#e74c3c] transition rounded-full w-9 h-9 flex items-center justify-center"><FaInstagram /></a>
            <a href="#" className="bg-white/10 hover:bg-[#e74c3c] transition rounded-full w-9 h-9 flex items-center justify-center"><FaLinkedinIn /></a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 relative pb-2 after:content-[''] after:block after:w-10 after:h-1 after:bg-[#e74c3c] after:absolute after:bottom-0 after:left-0">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/issues" className="hover:text-white">Campaigns</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/actions" className="hover:text-white">Get Involved</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 relative pb-2 after:content-[''] after:block after:w-10 after:h-1 after:bg-[#e74c3c] after:absolute after:bottom-0 after:left-0">Issues</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/issues" className="hover:text-white">Racial Justice</a></li>
            <li><a href="/issues" className="hover:text-white">Gender Equity</a></li>
            <li><a href="/issues" className="hover:text-white">Climate Justice</a></li>
            <li><a href="/issues" className="hover:text-white">Economic Fairness</a></li>
            <li><a href="/issues" className="hover:text-white">LGBTQ+ Rights</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 relative pb-2 after:content-[''] after:block after:w-10 after:h-1 after:bg-[#e74c3c] after:absolute after:bottom-0 after:left-0">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><FaEnvelope /> info@justicehub.org</li>
            <li className="flex items-center gap-2"><FaPhone /> (555) 123-4567</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Justice Ave, City, State 12345</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} JusticeHub. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;