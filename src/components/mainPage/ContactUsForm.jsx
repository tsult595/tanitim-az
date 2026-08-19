'use client'

import React, { Suspense } from "react"
import FormContent from "../FormContent.jsx"

const ContactUsForm = () => {
  return (
    <div className="w-full max-w-[420px] rounded-xl border border-gray-200 bg-white p-4 shadow-md z-20">
      <h2 className="mb-3 text-[18px] font-semibold text-gray-800">
        Bizimlə əlaqə
      </h2>
      <Suspense fallback={<div className="text-xs text-gray-400 py-4 text-center">Yüklənir...</div>}>
        <FormContent />
      </Suspense>
    </div>
  )
}

export default ContactUsForm