// src/app/admin/dashboard/page.jsx
import Link from "next/link"
import { ArrowUpRight, Eye, Mail, MoreHorizontal, Plus, TrendingUp, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const stats = [
  { label: "Müraciətlər", value: "124", note: "+12% bu ay", icon: Mail, tone: "bg-rose-100 text-rose-600" },
  { label: "Aktiv xidmətlər", value: "18", note: "2 yeni bu ay", icon: TrendingUp, tone: "bg-amber-100 text-amber-700" },
  { label: "İstifadəçilər", value: "1,420", note: "+8% bu həftə", icon: Users, tone: "bg-sky-100 text-sky-700" },
  { label: "Baxış sayı", value: "34.2K", note: "+24% keçən ay", icon: Eye, tone: "bg-emerald-100 text-emerald-700" },
]

const activity = [42, 58, 48, 72, 64, 88, 76, 94, 82, 100, 86, 96]

const requests = [
  { name: "Əli Əliyev", email: "ali.aliyev@gmail.com", service: "SEO optimizasiya", date: "18 Avq 2026", status: "Yeni", variant: "default" },
  { name: "Leyla Məmmədova", email: "leyla.m@email.com", service: "SMM xidməti", date: "17 Avq 2026", status: "Baxılır", variant: "secondary" },
  { name: "Murad Həsənov", email: "murad.h@email.com", service: "Brend strategiyası", date: "16 Avq 2026", status: "Tamamlandı", variant: "outline" },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <section className="relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-7 text-white shadow-sm sm:px-8">
        <div className="relative z-10 max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">19 Avqust 2026</p>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Xoş gəlmisiniz, admin.</h1>
          <p className="mt-2 text-sm leading-6 text-slate-300">Tanitim.az biznesinizin böyüməsini bu gün də izləməyə hazırdır.</p>
          <Link href="/admin/contacts" className="mt-5 inline-flex h-9 items-center gap-2 rounded-md bg-rose-500 px-4 text-xs font-semibold text-white transition-colors hover:bg-rose-400">
            Müraciətlərə bax <ArrowUpRight className="size-4" />
          </Link>
      </div>
        <div className="absolute -right-12 -top-20 size-72 rounded-full border-[32px] border-rose-500/20" />
        <div className="absolute -bottom-28 right-20 size-64 rounded-full border-[24px] border-amber-400/10" />
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, note, icon: Icon, tone }) => (
          <Card key={label} className="border-0 shadow-sm ring-1 ring-slate-200/80">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
              <CardTitle className="text-xs font-medium text-muted-foreground">{label}</CardTitle>
              <span className={`flex size-8 items-center justify-center rounded-lg ${tone}`}><Icon className="size-4" /></span>
            </CardHeader>
            <CardContent><div className="text-2xl font-bold tracking-tight">{value}</div><p className="mt-1 text-xs font-medium text-emerald-600">{note}</p></CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <Card className="border-0 shadow-sm ring-1 ring-slate-200/80">
          <CardHeader className="flex flex-row items-start justify-between border-b border-slate-100">
            <div><CardTitle className="text-base">Müraciət aktivliyi</CardTitle><CardDescription>Son 12 gün üzrə daxil olan müraciətlər</CardDescription></div>
            <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">+18.6%</Badge>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex h-44 items-end gap-2 sm:gap-3">
              {activity.map((height, index) => <div key={index} className="group flex h-full flex-1 items-end"><div style={{ height: `${height}%` }} className={`w-full rounded-t-md transition-colors group-hover:bg-rose-400 ${index === activity.length - 1 ? "bg-rose-500" : "bg-rose-200"}`} /></div>)}
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-muted-foreground"><span>08 Avq</span><span>11 Avq</span><span>14 Avq</span><span>19 Avq</span></div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm ring-1 ring-slate-200/80">
          <CardHeader className="border-b border-slate-100"><CardTitle className="text-base">Sürətli keçidlər</CardTitle><CardDescription>Gündəlik işlərə bir toxunuşla başlayın</CardDescription></CardHeader>
          <CardContent className="grid gap-3 pt-5 sm:grid-cols-2 xl:grid-cols-1">
            {[{ href: "/admin/services", title: "Yeni xidmət əlavə et", detail: "Xidmət kataloqunu yenilə" }, { href: "/admin/blog", title: "Blog yazısı yarat", detail: "Auditoriyanı məlumatlandır" }, { href: "/admin/users", title: "İstifadəçiləri idarə et", detail: "Komanda və girişlər" }].map((item) => <Link key={item.href} href={item.href} className="group flex items-center justify-between rounded-xl border border-slate-200 p-3 transition-colors hover:border-rose-300 hover:bg-rose-50/50"><span><span className="block text-sm font-semibold">{item.title}</span><span className="mt-1 block text-xs text-muted-foreground">{item.detail}</span></span><span className="flex size-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 group-hover:bg-rose-100 group-hover:text-rose-600"><Plus className="size-4" /></span></Link>)}
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm ring-1 ring-slate-200/80">
        <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100"><div><CardTitle className="text-base">Son müraciətlər</CardTitle><CardDescription>Komandanızın cavab gözləyən son sorğuları</CardDescription></div><Link href="/admin/contacts" className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700">Hamısına bax <ArrowUpRight className="size-3.5" /></Link></CardHeader>
        <CardContent className="px-0"><Table><TableHeader><TableRow className="hover:bg-transparent"><TableHead className="pl-6">Ad / Soyad</TableHead><TableHead className="hidden md:table-cell">Xidmət</TableHead><TableHead className="hidden sm:table-cell">Tarix</TableHead><TableHead>Status</TableHead><TableHead className="w-10 pr-6" /></TableRow></TableHeader><TableBody>{requests.map((request) => <TableRow key={request.email}><TableCell className="pl-6"><div className="font-semibold">{request.name}</div><div className="text-[11px] text-muted-foreground">{request.email}</div></TableCell><TableCell className="hidden md:table-cell">{request.service}</TableCell><TableCell className="hidden text-muted-foreground sm:table-cell">{request.date}</TableCell><TableCell><Badge variant={request.variant}>{request.status}</Badge></TableCell><TableCell className="pr-6"><MoreHorizontal className="size-4 text-muted-foreground" /></TableCell></TableRow>)}</TableBody></Table></CardContent>
      </Card>
    </div>
  )
}
