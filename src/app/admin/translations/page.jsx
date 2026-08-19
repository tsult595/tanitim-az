"use client"

import React, { useState } from "react"
import {
  Save,
  ChevronDown,
  Languages,
  Check,
  Sparkles,
} from "lucide-react"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const initialServices = [
  {
    id: 1,
    az: "İnfluenser marketinq",
    ru: "Инфлюенсер маркетинг",
    en: "Influencer marketing",
  },
  {
    id: 2,
    az: "Tədbirlərin təşkili",
    ru: "Организация мероприятий",
    en: "Event management",
  },
  {
    id: 3,
    az: "Rəqəmsal marketinq reklamları",
    ru: "Цифровая реклама",
    en: "Digital ads",
  },
  {
    id: 4,
    az: "Kontentlərin hazırlanması",
    ru: "Создание контента",
    en: "Content creation",
  },
  {
    id: 5,
    az: "Çöl reklamlarının təmin edilməsi",
    ru: "Наружная реклама",
    en: "Outdoor advertising",
  },
  {
    id: 6,
    az: "POSM materiallarının hazırlanması",
    ru: "Изготовление POSM",
    en: "POSM production",
  },
  {
    id: 7,
    az: "PR",
    ru: "PR",
    en: "PR",
  },
  {
    id: 8,
    az: "Promouter və BTL xidmətləri",
    ru: "Промоутеры и BTL",
    en: "Promoters & BTL services",
  },
  {
    id: 9,
    az: "E-mail və SMS marketinqi",
    ru: "E-mail и SMS маркетинг",
    en: "E-mail & SMS marketing",
  },
]

const languages = [
  {
    key: "az",
    title: "Azərbaycan",
    short: "AZ",
    flag: "🇦🇿",
  },
  {
    key: "ru",
    title: "Русский",
    short: "RU",
    flag: "🇷🇺",
  },
  {
    key: "en",
    title: "English",
    short: "EN",
    flag: "🇬🇧",
  },
]

export default function TranslationsPage() {
  const [services, setServices] = useState(initialServices)

  // Открытая секция
  const [openId, setOpenId] = useState(1)

  // Изменённые элементы
  const [changedIds, setChangedIds] = useState([])

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const handleInputChange = (id, lang, value) => {
    setServices((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [lang]: value,
            }
          : item
      )
    )

    setChangedIds((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    )
  }

  const handleSave = () => {
    console.log("Saving translations:", services)

    setChangedIds([])
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white shadow-sm">
                <Languages className="h-4 w-4" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Content management
              </span>

            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Xidmət başlıqları
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Saytdakı xidmət adlarını Azərbaycan, Rus və İngilis
              dillərində idarə edin.
            </p>

          </div>


          {/* SAVE BUTTON */}

          <Button
            onClick={handleSave}
            disabled={changedIds.length === 0}
            className="
              h-11
              gap-2
              rounded-xl
              px-5
              shadow-sm
              transition-all
              disabled:opacity-50
            "
          >
            <Save className="h-4 w-4" />

            {changedIds.length > 0
              ? `Yadda saxla (${changedIds.length})`
              : "Yadda saxla"}
          </Button>

        </div>


        {/* ================================================= */}
        {/* SMALL INFO */}
        {/* ================================================= */}

        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2 text-sm text-slate-500">

            <Sparkles className="h-4 w-4 text-slate-400" />

            <span>
              {services.length} xidmət
            </span>

          </div>

          <span className="text-xs text-slate-400">
            Açmaq üçün xidmətə klikləyin
          </span>

        </div>


        {/* ================================================= */}
        {/* ACCORDION */}
        {/* ================================================= */}

        <div className="space-y-3">

          {services.map((service) => {

            const isOpen = openId === service.id
            const isChanged = changedIds.includes(service.id)

            return (
              <Card
                key={service.id}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  p-0
                  shadow-sm
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-slate-300 shadow-md"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }
                `}
              >

                {/* ========================================= */}
                {/* ACCORDION HEADER */}
                {/* ========================================= */}

                <button
                  type="button"
                  onClick={() => handleToggle(service.id)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-4
                    p-4
                    text-left
                    transition-colors
                    hover:bg-slate-50/70
                    sm:p-5
                  "
                >

                  {/* NUMBER */}

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      text-sm
                      font-bold
                      transition-all
                      ${
                        isOpen
                          ? "bg-black text-white"
                          : "bg-slate-100 text-slate-500"
                      }
                    `}
                  >
                    {String(service.id).padStart(2, "0")}
                  </div>


                  {/* TITLE */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <h2 className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                        {service.az}
                      </h2>

                      {isChanged && (
                        <span className="hidden rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600 sm:block">
                          Dəyişdirildi
                        </span>
                      )}

                    </div>

                    <p className="mt-1 truncate text-xs text-slate-400">
                      {service.en}
                    </p>

                  </div>


                  {/* LANGUAGE BADGES */}

                  <div className="hidden items-center gap-1.5 sm:flex">

                    {languages.map((lang) => (
                      <span
                        key={lang.key}
                        className="
                          flex
                          h-7
                          min-w-7
                          items-center
                          justify-center
                          rounded-lg
                          bg-slate-100
                          px-1.5
                          text-[10px]
                          font-bold
                          text-slate-500
                        "
                      >
                        {lang.short}
                      </span>
                    ))}

                  </div>


                  {/* ARROW */}

                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180 bg-slate-100"
                          : "bg-transparent"
                      }
                    `}
                  >
                    <ChevronDown className="h-4 w-4 text-slate-500" />
                  </div>

                </button>


                {/* ========================================= */}
                {/* CONTENT */}
                {/* ========================================= */}

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="min-h-0 overflow-hidden">

                    <div className="border-t border-slate-100 bg-slate-50/40 p-4 sm:p-6">

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                        {languages.map((lang) => (

                          <div
                            key={lang.key}
                            className="group"
                          >

                            {/* LABEL */}

                            <div className="mb-2 flex items-center justify-between">

                              <Label className="flex items-center gap-2 text-xs font-semibold text-slate-600">

                                <span className="text-base">
                                  {lang.flag}
                                </span>

                                {lang.title}

                              </Label>

                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                                {lang.short}
                              </span>

                            </div>


                            {/* INPUT */}

                            <div className="relative">

                              <Input
                                value={service[lang.key]}
                                onChange={(e) =>
                                  handleInputChange(
                                    service.id,
                                    lang.key,
                                    e.target.value
                                  )
                                }
                                className="
                                  h-11
                                  rounded-xl
                                  border-slate-200
                                  bg-white
                                  pr-10
                                  text-sm
                                  shadow-sm
                                  transition-all
                                  focus:border-slate-400
                                  focus:ring-2
                                  focus:ring-slate-100
                                "
                              />

                              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">

                                <Check
                                  className="
                                    h-4
                                    w-4
                                    text-slate-300
                                    opacity-0
                                    transition-opacity
                                    group-focus-within:opacity-100
                                  "
                                />

                              </div>

                            </div>

                          </div>

                        ))}

                      </div>


                      {/* MOBILE STATUS */}

                      {isChanged && (
                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-600 sm:hidden">

                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />

                          Bu xidmət dəyişdirilib

                        </div>
                      )}

                    </div>

                  </div>

                </div>

              </Card>
            )
          })}

        </div>


        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">

          <div>

            <p className="text-sm font-semibold text-slate-800">
              Tərcümələr
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              Azərbaycan · Русский · English
            </p>

          </div>

          <div className="flex items-center gap-2">

            {languages.map((lang) => (
              <div
                key={lang.key}
                className="
                  flex
                  h-8
                  items-center
                  gap-1.5
                  rounded-lg
                  bg-slate-100
                  px-2.5
                  text-[11px]
                  font-semibold
                  text-slate-500
                "
              >
                <span>{lang.flag}</span>
                {lang.short}
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}