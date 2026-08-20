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
      className="w-full py-12 md:py-16 lg:py-20"
    >

      {/* ================================================= */}
      {/* TITLE — OUTSIDE BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          mx-auto
          mb-10
          w-full
          max-w-6xl
        
          md:mb-14
        "
      >
        <h2
          className="
            text-left
            text-2xl
            font-extrabold
            tracking-tight
            text-slate-900
            md:text-3xl
          "
        >
          Müştərilərimiz
        </h2>
      </div>


      {/* ================================================= */}
      {/* GRID BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
          bg-[#F7F5F2]
        "
      >

        {/* ================================================= */}
        {/* BACKGROUND EFFECTS */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0">

          {/* Orange glow — left */}
          <div
            className="
              absolute
              -left-24
              -top-24
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#F0692A]/25
              blur-[90px]
            "
          />

          {/* Orange glow — right */}
          <div
            className="
              absolute
              -right-10
              -top-10
              h-[380px]
              w-[380px]
              rounded-full
              bg-[#F5AD82]/35
              blur-[90px]
            "
          />

          {/* Green glow — bottom */}
          <div
            className="
              absolute
              bottom-0
              left-10
              h-[360px]
              w-[360px]
              rounded-full
              bg-[#E2ECE9]
              blur-[80px]
            "
          />

          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(60,60,59,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,60,59,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

        </div>


        {/* ================================================= */}
        {/* CLIENTS GRID */}
        {/* ================================================= */}

        <div className="relative z-10 w-full">

          <div
            className="
              grid
              w-full
              grid-cols-2
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
                  transition-all
                  duration-300
                  hover:bg-white/40
                  sm:h-36
                  md:h-32
                "
              >

                {/* ================================================= */}
                {/* LOGO */}
                {/* ================================================= */}

                <div
                  className="
                    flex
                    h-16
                    w-28
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
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


                {/* ================================================= */}
                {/* MOBILE LINE */}
                {/* ================================================= */}

                {index % 2 === 0 && (
                  <span
                    className="
                      absolute
                      right-0
                      top-1/2
                      h-16
                      w-px
                      -translate-y-1/2
                      bg-slate-200/70
                      sm:hidden
                    "
                  />
                )}


                {/* ================================================= */}
                {/* TABLET LINE */}
                {/* ================================================= */}

                {index % 3 !== 2 && (
                  <span
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-16
                      w-px
                      -translate-y-1/2
                      bg-slate-200/70
                      sm:block
                      md:hidden
                    "
                  />
                )}


                {/* ================================================= */}
                {/* DESKTOP LINE */}
                {/* ================================================= */}

                {index % 6 !== 5 && (
                  <span
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-16
                      w-px
                      -translate-y-1/2
                      bg-slate-200/70
                      md:block
                    "
                  />
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Clients