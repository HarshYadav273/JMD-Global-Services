import React from 'react'
import Link from 'next/link'

const FormSummiting = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] px-4">
      
      {/* Main Card */}
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
        
     
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
          <svg
            className="h-10 w-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Thank You!
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Your form has been successfully submitted. We have received your information and will be in touch shortly.
        </p>


        <Link 
          href="/" 
          className="mt-8 px-6 py-3 text-base sm:text-lg md:text-xl rounded-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300 hover:text-xl hover:text-black"
        >
          Return to Homepage
        </Link>
        
      </div>
    </div>
  )
}

export default FormSummiting
