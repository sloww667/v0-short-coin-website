'use client'

import { useEffect, useState } from 'react'

const timelineItems = [
  {
    title: 'Everything is bleeding',
    subtitle: 'Every asset is going to zero.',
  },
  {
    title: 'The short of a lifetime',
    subtitle: 'The final short.',
  },
  {
    title: 'Everyone is coping',
    subtitle: 'I am hedging.',
  },
  {
    title: 'Hedge the market',
    subtitle: 'Buy Shortcoin.',
  },
]

export function About() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    timelineItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index])
      }, index * 400)
    })
  }, [])

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-black via-red-950/20 to-black relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,0,0,.1) 25%, rgba(255,0,0,.1) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.1) 75%, rgba(255,0,0,.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,0,0,.1) 25%, rgba(255,0,0,.1) 26%, transparent 27%, transparent 74%, rgba(255,0,0,.1) 75%, rgba(255,0,0,.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Red Band */}
        <div className="h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-12 md:mb-16" />

        <h2 className="text-4xl md:text-5xl font-black text-center text-red-500 mb-12 md:mb-16 drop-shadow-lg" style={{ fontFamily: "'Space Mono', monospace" }}>
          ABOUT SHORTCOIN
        </h2>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-red-500 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 transform ${visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-red-600 to-red-500 border-4 border-black shadow-lg shadow-red-600/50 transition-all duration-700 ${visibleItems.includes(index) ? 'animate-pulse scale-100' : 'scale-0'
                    }`} />
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    } md:w-1/2 px-6 md:px-0`}
                >
                  <div className="bg-gradient-to-r from-red-950/60 to-red-900/40 border border-red-600/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-red-500/80 transition-all duration-500 hover:shadow-xl hover:shadow-red-600/40 hover:bg-red-900/50">
                    <h3 className="text-xl md:text-2xl font-bold text-red-300 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-red-400 text-base md:text-lg font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
