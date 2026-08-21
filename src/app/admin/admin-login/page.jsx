'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Email və ya şifrə yanlışdır");
        setLoading(false);
        return;
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Xəta baş verdi. Yenidən cəhd edin.");
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#F7F5F2] px-6">
      {/* Фоновые пятна в стиле остального сайта */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#F0692A]/12 blur-[110px]" />
        <div className="absolute -right-10 -top-10 h-[380px] w-[380px] rounded-full bg-[#F5AD82]/18 blur-[110px]" />
      </div>

      <div className="relative w-full max-w-sm">
        <div className="mb-8 text-center">
          <span className="inline-block text-sm font-extrabold tracking-wide uppercase text-[#1F1F1E]">
            TANITIM.AZ
          </span>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1F1F1E]">
            Admin girişi
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-[#3C3C3B]/60 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-[#1F1F1E] focus:outline-none focus:ring-2 focus:ring-[#F0692A]/40 focus:border-[#F0692A]"
              placeholder="admin@tanitim.az"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-[#3C3C3B]/60 mb-2">
              Şifrə
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-[#1F1F1E] focus:outline-none focus:ring-2 focus:ring-[#F0692A]/40 focus:border-[#F0692A]"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#1F1F1E] text-white text-sm font-semibold py-3 hover:bg-[#3C3C3B] transition-colors disabled:opacity-50"
          >
            {loading ? "Yoxlanılır..." : "Daxil ol"}
          </button>
        </form>
      </div>
    </div>
  );
}
