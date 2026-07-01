import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    // <!-- JMD Global Services Footer -->
<footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      
      {/* <!-- Company Info --> */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black text-white tracking-tighter">JMD</span>
            <span className="text-2xl font-bold text-blue-400 tracking-tighter">Global</span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 leading-none uppercase">
            Services
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Your business compliance partner for registrations, tax support, certificates, and bookkeeping since 2024.
        </p>
      </div>

      {/* <!-- Quick Links --> */}
      <div>
        <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Quick Links</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li><Link href="/#home" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
          <li><Link href="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
          <li><Link href="/#service" className="hover:text-blue-400 transition-colors">Compliance</Link></li>
          <li><Link href="/#contact" className="hover:text-blue-400 transition-colors">Consultation</Link></li>
        </ul>
      </div>

      {/* <!-- Key Services --> */}
      <div>
        <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Our Services</h4>
        <ul className="space-y-3 text-sm text-slate-400">
          <li>GST Registration</li>
          <li>GST Annual Return</li>
          <li>MSME Registration</li>
          <li>Trademark Registration</li>
          <li>Copyright Registration</li>
          <li>FSSAI Registration</li>
          <li>IEC Certificate</li>
          <li>ISO Certificate</li>
          <li>Bookkeeping</li>
        </ul>
      </div>

      {/* <!-- Contact Details --> */}
      <div>
        <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2">Get In Touch</h4>
        <ul className="space-y-4 text-sm text-slate-400">
          <li className="flex items-start gap-3">
            <span className="text-blue-400 mt-1 font-bold">Address:</span>
            <span>AH55 3rd Floor, Shalimar Bagh, Delhi 110015</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-blue-400 font-bold">Phone:</span>
            <span>+91 9654473401</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-blue-400 font-bold">Email:</span>
            <span>sjmdglobal@gmail.com</span>
          </li>
        </ul>
      </div>

    </div>

    {/* <!-- Bottom Bar --> */}
    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
      <p>Since 2024 JMD Global Services. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
