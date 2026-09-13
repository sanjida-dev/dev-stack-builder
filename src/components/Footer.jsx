import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
              D
            </div>
            <span className="font-bold text-lg text-white">Dev Stack</span>
          </div>
          <p className="text-sm">
            Architect custom modular ecosystems perfectly designed around performance profiles.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dev Stack Builder. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
