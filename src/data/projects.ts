export type Project = {
  image?: string
  emoji?: string
  name: string
  desc: string
  link: string
  time?: string
}

export const projects: Project[] = [
  {
    image: 'https://harness-chat-moe.vercel.app/favicon.ico?favicon.2vob68tjqpejf.ico',
    name: 'AI Harness Chat Template',
    desc: 'Claude Code / Codex / OpenCode hosted on Vercel Sandbox',
    time: '2026',
    link: 'https://harness-chat-moe.vercel.app/',
  },
  {
    image: 'https://github.githubassets.com/favicons/favicon-dark.png',
    name: 'EMM',
    desc: 'Personal AI assistant on Telegram (OpenCode hosted on Upstash Box)',
    time: '2026',
    link: 'https://github.com/moesalih/emm-nextjs',
  },
  {
    image: 'https://imgur.com/pcDsMoB.png',
    name: 'Blooom',
    desc: 'Tech news and stocks aggregator',
    time: '2026',
    link: 'https://blooom.app/',
  },
  {
    image: 'https://lmarena-charts.vercel.app/icon?rounded=1',
    name: 'LMArena Charts',
    desc: 'LLM rankings over time',
    time: '2026',
    link: 'https://lmarena-charts.vercel.app/',
  },
  {
    image: 'https://icon-maker.moe-salih.workers.dev/paintbrush-icon.png',
    name: 'Icon Maker',
    desc: 'Build app icons from Lucide symbols',
    time: '2026',
    link: 'https://icon-maker.moe-salih.workers.dev/',
  },
  {
    image: 'https://sonar.0xmoe.com/icon?rounded=1',
    name: 'Sonarr',
    desc: 'Farcaster Explorer',
    time: '2025-2026',
    link: 'https://sonarr.cc/',
  },
  {
    emoji: '🚀',
    name: 'SpaceX Dashboard',
    desc: 'Launch & Starlink tracker',
    time: '2019-now',
    link: 'https://spacex.page',
  },
  {
    image: '/projects/averry.png',
    name: 'Art Projects',
    desc: 'Art Experiments in Code',
    link: 'https://art.0xMoe.com',
  },
  {
    image: '/projects/buttrfly-icon.png',
    name: 'Buttrfly',
    desc: 'Web3 Social Explorer',
    time: '2023-2025',
    link: 'https://buttrfly.app',
  },
  {
    image: '/projects/hypercharts.png',
    name: 'HyperCharts',
    desc: 'Financial and business metrics of public companies',
    time: '2019-2022',
    link: 'https://hypercharts.co',
  },
  {
    image: '/projects/basket.png',
    name: 'Basket',
    desc: 'Minimal investment portfolio tracker for iOS',
    time: '2020-now',
    link: 'https://apps.apple.com/ca/app/basket/id1533480289?mt=8&at=10lK32',
  },
  {
    image: '/projects/funds.png',
    name: 'Funds',
    desc: 'Minimal budget calculator for iOS',
    time: '2013-now',
    link: 'funds/index.html',
  },
]
