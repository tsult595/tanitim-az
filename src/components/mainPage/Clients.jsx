"use client"

const clients = [
  { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify" },
  { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix" },
  { name: "Shazam", logo: "https://cdn.simpleicons.org/shazam" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
  { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp" },
  { name: "YouTube", logo: "https://cdn.simpleicons.org/youtube" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Adobe", logo: "https://cdn.simpleicons.org/adobe" },
  { name: "Google Meet", logo: "https://cdn.simpleicons.org/googlemeet" },
  { name: "Snapchat", logo: "https://cdn.simpleicons.org/snapchat" },
  { name: "Quora", logo: "https://cdn.simpleicons.org/quora" },
  { name: "Pinterest", logo: "https://cdn.simpleicons.org/pinterest" },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta" },
  { name: "Telegram", logo: "https://cdn.simpleicons.org/telegram" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack" },
  { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp" },
]

const Clients = () => {
  return (
    <section
      id="clients-section"
      className="relative w-full overflow-hidden bg-[#F7F5F2] py-12 md:py-16 lg:py-20"
    >
      {/* Фоновые пятна + сетка — теперь позиционируются относительно секции */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#F0692A]/25 blur-[90px]" />
        <div className="absolute -top-10 right-0 w-[380px] h-[380px] rounded-full bg-[#F5AD82]/35 blur-[90px]" />
        <div className="absolute bottom-0 left-10 w-[360px] h-[360px] rounded-full bg-[#E2ECE9] blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(60,60,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,60,59,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Весь контент — поверх фона */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-left md:text-3xl font-extrabold text-slate-900 tracking-tight text-center mb-10 md:mb-14">
          Müştərilərimiz
        </h2>

        {/* ================= CLIENTS GRID ================= */}
        <div
          className="
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border-y
            border-slate-100
            bg-white/60
            backdrop-blur-sm
            sm:grid-cols-3
            md:grid-cols-6
          "
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="
                group
                relative
                flex
                h-32
                items-center
                justify-center
                border-b
                border-slate-100
                transition-all
                duration-300
                hover:bg-slate-50
                sm:h-36
                md:h-32
                md:border-r
              "
            >
              {/* LOGO */}
              <div
                className="
                  flex
                  h-16
                  w-28
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    max-h-12
                    max-w-20
                    object-contain
                    opacity-90
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* MOBILE VERTICAL LINE */}
              {index % 2 !== 1 && (
                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    hidden
                    h-16
                    w-px
                    -translate-y-1/2
                    bg-slate-100
                    sm:block
                    md:hidden
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients