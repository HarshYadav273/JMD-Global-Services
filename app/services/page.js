"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "GST Registration",
    description: "Complete GST registration support for businesses, traders, and service providers.",
    details: ["GST application filing", "Document checklist support", "Business and tax detail review"],
  },
  {
    title: "GST Annual Return",
    description: "Annual GST return preparation and filing assistance to keep compliance organized.",
    details: ["Annual return preparation", "Sales and purchase data review", "Filing guidance"],
  },
  {
    title: "MSME Registration",
    description: "Udyam/MSME registration assistance for small and medium businesses.",
    details: ["Udyam application support", "Business classification guidance", "Certificate assistance"],
  },
  {
    title: "Trademark Registration",
    description: "Trademark filing support to protect your business name, logo, or brand identity.",
    details: ["Trademark search assistance", "Application filing", "Status and objection support"],
  },
  {
    title: "Copyright Registration",
    description: "Copyright registration help for creative, written, digital, and business assets.",
    details: ["Application preparation", "Work category guidance", "Filing support"],
  },
  {
    title: "FSSAI Registration",
    description: "Food license registration support for food businesses and operators.",
    details: ["FSSAI registration guidance", "Document review", "License application support"],
  },
  {
    title: "IEC Certificate",
    description: "Import Export Code certificate assistance for businesses entering international trade.",
    details: ["IEC application support", "Business detail verification", "Certificate guidance"],
  },
  {
    title: "ISO Certificate",
    description: "ISO certification coordination for businesses that need recognized quality standards.",
    details: ["Certification guidance", "Process documentation support", "Compliance coordination"],
  },
  {
    title: "Bookkeeping",
    description: "Reliable bookkeeping support to keep accounts, records, and reports organized.",
    details: ["Transaction recording", "Ledger maintenance", "Monthly reporting support"],
  },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="min-h-screen bg-white text-black pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              All Services
            </h1>
            <p className="text-gray-700 mt-4 text-base md:text-lg max-w-2xl">
              Choose a service to view what JMD Global Services can help you with.
            </p>
          </div>

          <Link href="/#contact" className="w-fit px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:text-black transition-colors">
            Get Quote
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 mt-12">
          <div className="bg-slate-100 border border-slate-200 rounded-3xl p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {services.map((service) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(service)}
                  className={`text-left px-4 py-3 rounded-2xl font-bold transition-colors ${
                    activeService.title === service.title
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-800 hover:bg-blue-50"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Service Details
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              {activeService.title}
            </h2>

            <p className="text-slate-300 text-lg leading-8 mt-5 max-w-3xl">
              {activeService.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {activeService.details.map((detail) => (
                <div key={detail} className="bg-white text-black rounded-2xl p-5 font-semibold">
                  {detail}
                </div>
              ))}
            </div>

            <Link href="/#contact" className="inline-flex mt-10 px-7 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-white hover:text-black transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
