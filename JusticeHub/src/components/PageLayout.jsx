import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping } from 'react-icons/fa';
import Footer from './Footer';
import AuthContainer from './Auth/AuthContainer';
import { useAuth } from '@/lib/auth-context-utils';

export default function PageLayout({ children }) {
  const { user, logout } = useAuth();

  // auth modal state
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const closeAuth = () => {
    setShowAuthModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-tr from-[#2a4d69] to-[#4b86b4] text-white shadow-md py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaHandsHelping className="text-[#e74c3c]" />
            <span>JusticeHub</span>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-6 font-medium">
              <li><Link to="/" className="hover:text-[#e7eff6] transition-colors">Home</Link></li>
              <li><Link to="/issues" className="hover:text-[#e7eff6] transition-colors">Issues</Link></li>
              <li><Link to="/actions" className="hover:text-[#e7eff6] transition-colors">Actions</Link></li>
              <li><Link to="/events" className="hover:text-[#e7eff6] transition-colors">Events</Link></li>
              <li><Link to="/resources" className="hover:text-[#e7eff6] transition-colors">Resources</Link></li>
              <li><Link to="/about" className="hover:text-[#e7eff6] transition-colors">About</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons flex items-center gap-3">
            {user === undefined ? (
              // loading placeholder
              <div className="w-28 h-8 bg-white/10 rounded animate-pulse" />
            ) : user ? (
              // authenticated view
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded bg-white/10 transition text-sm"
                >
                  {user.name ?? user.email ?? "Account"}
                </span>
                <button
                  className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-red-600 transition"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // not authenticated
              <div className="flex gap-3">
                <button
                  className="px-4 py-2 rounded border border-white text-white hover:bg-white hover:text-blue-700 transition text-sm"
                  onClick={() => openAuth("login")}
                >
                  Sign In
                </button>
                <button
                  className="px-4 py-2 rounded bg-cyan-400 text-blue-900 font-bold hover:bg-cyan-300 transition text-sm"
                  onClick={() => openAuth("signup")}
                >
                  Join Now
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Auth Modal */}
      {showAuthModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={closeAuth} // click outside to close
        >
          <div
            className="relative mx-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="absolute -top-3 -right-3 bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow"
              onClick={closeAuth}
              aria-label="Close auth"
            >
              ×
            </button>
            <AuthContainer initialMode={authMode} isModal={true} onClose={closeAuth} />
          </div>
        </div>
      )}
    </div>
  );
}
