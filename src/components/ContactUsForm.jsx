'use client'

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Paperclip, Send } from "lucide-react"

const FormContent = () => {
  const searchParams = useSearchParams()
  const [subject, setSubject] = useState(() => searchParams.get("subject") || "")
  const [message, setMessage] = useState("")
  const [file, setFile] = useState(null)

  // 1. Синхронизация с URL searchParams
  useEffect(() => {
    const paramSubject = searchParams.get("subject")
    if (paramSubject) {
      setSubject(paramSubject)
    }
  }, [searchParams])

  // 2. Подписка на CustomEvent для мгновенного обновления
  useEffect(() => {
    const handleSelectService = (e) => {
      if (e.detail?.title) {
        setSubject(e.detail.title)
      }
    }

    window.addEventListener("selectService", handleSelectService)
    return () => window.removeEventListener("selectService", handleSelectService)
  }, [])

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) setFile(selectedFile)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      subject,
      message,
      file,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label htmlFor="name" className="mb-1 block text-[12px] font-medium text-gray-600">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="h-[32px] w-full rounded-[4px] border border-gray-300 bg-white px-2 text-[12px] text-gray-800 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-[12px] font-medium text-gray-600">
          Əlaqə nömrəsi
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="h-[32px] w-full rounded-[4px] border border-gray-300 bg-white px-2 text-[12px] text-gray-800 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
        />
      </div>

      <div>
        <label htmlFor="address" className="mb-1 block text-[12px] font-medium text-gray-600">
          Ünvan
        </label>
        <input
          id="address"
          name="address"
          type="text"
          className="h-[32px] w-full rounded-[4px] border border-gray-300 bg-white px-2 text-[12px] text-gray-800 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-[12px] font-medium text-gray-600">
          Mövzu (Xidmət)
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Mövzu daxil edin"
          className="h-[32px] w-full rounded-[4px] border border-gray-300 bg-white px-2 text-[12px] text-gray-800 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
        />
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label htmlFor="message" className="text-[12px] font-medium text-gray-600">
            Mesaj
          </label>
          <span className="text-[10px] text-gray-400">
            {message.length}/2500
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2500}
          rows={5}
          className="block min-h-[100px] w-full resize-none rounded-[4px] border border-gray-300 bg-white px-2 py-2 text-[12px] leading-[1.4] text-gray-800 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
        />
      </div>

      <div className="flex items-center justify-between gap-2 pt-1">
        <div>
          <input id="file" type="file" onChange={handleFileChange} className="hidden" />
          <label
            htmlFor="file"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-[4px] border border-gray-300 bg-white px-2.5 py-1.5 text-[11px] font-medium text-gray-600 transition hover:bg-gray-50"
          >
            <Paperclip className="h-3.5 w-3.5" />
            Fayl yüklə
          </label>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-[5px] bg-gradient-to-r from-[#ff385c] to-[#e6007e] px-4 py-2 text-[12px] font-semibold text-white transition hover:brightness-95 active:scale-[0.98]"
        >
          <Send className="h-3.5 w-3.5" />
          Göndər
        </button>
      </div>

      {file && (
        <div className="mt-1 truncate rounded bg-gray-50 px-2 py-1.5 text-[10px] text-gray-500">
          📎 {file.name}
        </div>
      )}
    </form>
  )
}

const ContactUsForm = () => {
  return (
    <div className="w-full max-w-[420px] rounded-xl border border-gray-200 bg-white p-4 shadow-md z-20">
      <h2 className="mb-3 text-[18px] font-semibold text-gray-800">
        Bizimlə əlaqə
      </h2>
      <Suspense fallback={<div className="text-xs text-gray-400">Yüklənir...</div>}>
        <FormContent />
      </Suspense>
    </div>
  )
}

export default ContactUsForm;