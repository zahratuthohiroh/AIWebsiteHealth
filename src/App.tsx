import { useEffect, useState } from 'react'

type IconName = 'arrow' | 'leaf' | 'chat' | 'check' | 'shield' | 'spark' | 'book' | 'close' | 'menu' | 'heart'
function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, string> = {
    arrow: 'M5 12h14m-6-6 6 6-6 6',
    leaf: 'M20 4C9 2 2 9 7 16S23 16 20 4ZM5 21 15 10M10 15v-5m0 5h5',
    chat: 'M21 11a9 9 0 0 1-9 9H4l1-5a9 9 0 1 1 16-4ZM8 10h8m-8 4h5',
    check: 'm5 12 4 4L19 6',
    shield: 'm12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Zm-4 9 3 3 5-6',
    spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z',
    book: 'M5 3h12l3 3v15H5V3Zm4 5h6m-6 4h7m-7 4h5',
    close: 'm6 6 12 12M6 18 18 6',
    menu: 'M4 6h16M4 12h16M4 18h16',
    heart: 'M20 5c-3-3-7-1-8 2-2-3-6-5-9-1-4 5 9 14 9 14s13-10 8-15Z',
  }
  return <svg className={`h-5 w-5 shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

const button = 'inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#478C9B] focus-visible:ring-offset-4'
function LinkButton({ children, href = '#/metode', secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <a href={href} className={`${button} ${secondary ? 'border border-[#d9ded4] bg-white/80 text-[#303b31] hover:bg-white' : 'bg-[#85AD68] text-[#203217] hover:bg-[#96bb7b]'}`}>{children}<Icon name="arrow" /></a>
}
function Logo() {
  return <a href="#/" aria-label="CERNA — Beranda" className="flex min-h-11 items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7eddf] text-[#557c40]"><Icon name="leaf" /></span><span className="font-display text-3xl tracking-[-1.5px]">cerna<span className="text-[#68894f]">.</span></span></a>
}
function Flower({ teal = false, className = '' }: { teal?: boolean; className?: string }) {
  return <svg viewBox="0 0 180 180" className={className} fill="none" aria-hidden="true">
    <path d="M90 27C111-5 140 10 137 42c36-9 54 25 25 47 31 23 13 57-20 49 0 34-36 44-53 15-23 27-54 12-48-20-35 7-50-30-20-47C-8 61 14 31 44 39 40 5 75-4 90 27Z" fill={teal ? '#9ec3c8' : '#b9cf9f'} />
    <ellipse cx="71" cy="81" rx="5" ry="8" fill="#344734" /><ellipse cx="108" cy="81" rx="5" ry="8" fill="#344734" />
    <path d="M74 104q16 18 31-1" stroke="#344734" strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="56" cy="98" rx="9" ry="4" fill={teal ? '#85b0b8' : '#9eba84'} /><ellipse cx="122" cy="98" rx="9" ry="4" fill={teal ? '#85b0b8' : '#9eba84'} />
  </svg>
}
const features: { title: string; description: string; icon: IconName; href: string; label: string }[] = [
  { title: 'Kenali apa yang kamu rasakan.', description: 'Pahami kondisi emosional melalui pertanyaan terstruktur dengan pendekatan sistem pakar.', icon: 'book', href: '#/kategori', label: 'Asesmen kesehatan mental' },
  { title: 'Cerita tanpa takut dihakimi.', description: 'Ruang percakapan yang nyaman untuk mengeksplorasi pikiran dan perasaan bersama CERNA AI.', icon: 'chat', href: '#/chatbot', label: 'AI chatbot CERNA' },
  { title: 'Langkah kecil, makna besar.', description: 'Temukan informasi edukatif dan arahan yang membantu menentukan langkah selanjutnya.', icon: 'leaf', href: '#/rekomendasi', label: 'Rekomendasi personal' },
]
const steps = ['Pilih metode asesmen', 'Ceritakan kondisimu', 'Pahami hasil analisis', 'Temukan langkah berikutnya']
const supports = [
  ['Mulai dari ruang yang aman.', 'Tidak perlu menyiapkan kata-kata yang sempurna. Beri dirimu waktu, pilih cara yang nyaman, dan mulai ketika kamu siap.'],
  ['Pahami kondisi diri.', 'Kenali apa yang sedang kamu rasakan melalui refleksi dan informasi kesehatan mental yang mudah dipahami.'],
  ['Kenali pola perasaan.', 'Ambil jeda untuk memperhatikan perubahan emosi, pikiran, dan pengalaman dalam keseharianmu.'],
  ['Temukan langkah selanjutnya.', 'Jelajahi informasi edukatif dan cari dukungan profesional sesuai kebutuhanmu.'],
]

function HeroCards() {
  return <div className="relative mx-auto mt-14 h-[290px] w-full max-w-[730px] md:mt-16 md:h-[315px]">
    <Flower className="absolute -top-12 left-[8%] h-32 w-32 -rotate-12 md:left-[13%] md:h-40 md:w-40" />
    <span className="absolute right-[8%] top-2 text-[#478C9B]"><Icon name="spark" className="h-10 w-10" /></span>
    <div className="absolute left-[3%] top-11 flex h-[220px] w-[36%] -rotate-12 flex-col items-center justify-center rounded-3xl border-[3px] border-white bg-[#fafbf7] px-4 text-center shadow-[0_15px_40px_#34473412] md:left-[8%] md:w-[31%]">
      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e1e9d8] text-[#526c40]"><Icon name="heart" /></span>
      <p className="font-display text-lg leading-snug md:text-xl">Mengapa saya sering merasa kehilangan motivasi?</p>
      <span className="mt-5 text-xs text-[#5f685b]">Setiap perasaan berarti.</span>
    </div>
    <div className="absolute right-[3%] top-11 flex h-[220px] w-[36%] rotate-12 flex-col items-center justify-center rounded-3xl border-[3px] border-white bg-[#f7faf9] px-4 text-center shadow-[0_15px_40px_#34473412] md:right-[8%] md:w-[31%]">
      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#dcebed] text-[#366c77]"><Icon name="leaf" /></span>
      <p className="font-display text-lg leading-snug md:text-xl">Bagaimana memahami emosi saya?</p>
      <span className="mt-5 text-xs text-[#5f685b]">Pelan-pelan, tidak apa-apa.</span>
    </div>
    <div className="absolute left-1/2 top-0 z-10 flex h-[245px] w-[40%] -translate-x-1/2 flex-col items-center justify-center rounded-3xl border-[3px] border-white bg-[#edf2e8] px-5 text-center shadow-[0_15px_40px_#34473416] md:h-[260px] md:w-[33%]">
      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#5b8046]"><Icon name="chat" /></span>
      <p className="font-display text-xl leading-snug md:text-[25px]">Bagaimana cara menghadapi overthinking?</p>
      <span className="mt-5 flex items-center gap-2 text-xs text-[#526148]"><span className="h-1.5 w-1.5 rounded-full bg-[#6c9254]" />Kamu tidak sendirian.</span>
    </div>
    <span className="absolute bottom-7 right-[11%] flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl border-4 border-white bg-[#e2eceb] text-[#478C9B] shadow-lg"><Icon name="heart" /></span>
  </div>
}

function FeatureArt({ index }: { index: number }) {
  return <div className={`relative mb-7 flex h-44 items-center justify-center overflow-hidden rounded-2xl ${index === 1 ? 'bg-[#eaf2f3]' : index === 0 ? 'bg-[#edf2e8]' : 'bg-[#f0eee7]'}`}>
    <div className="absolute -right-7 -top-12 h-44 w-44 rounded-full border-[22px] border-white/70" />
    {index === 0 ? <div className="w-32 rotate-[-9deg] rounded-xl border-[5px] border-[#b1c79c] bg-white p-4 shadow-lg"><div className="mx-auto -mt-7 mb-4 h-5 w-12 rounded-md bg-[#85AD68]" />{[1, 2, 3].map(n => <div key={n} className="mb-3 flex items-center gap-2"><span className="rounded bg-[#edf2e8] p-0.5 text-[#57773f]"><Icon name="check" className="h-3 w-3" /></span><span className="h-1.5 w-12 rounded bg-[#d8ded2]" /></div>)}</div>
      : index === 1 ? <div className="relative w-48 -rotate-3"><div className="rounded-2xl rounded-bl-none bg-white p-3 text-sm shadow-sm">Apa yang kamu rasakan hari ini?<span className="absolute -left-4 -top-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#478C9B] text-white"><Icon name="spark" /></span></div><div className="ml-10 mt-3 rounded-2xl rounded-br-none bg-[#bfd4af] px-4 py-3 text-sm">Aku ingin bercerita…</div></div>
      : <><Flower className="h-32 w-32 -rotate-12" /><span className="absolute right-8 top-6 text-[#478C9B]"><Icon name="spark" className="h-7 w-7" /></span><div className="absolute bottom-4 left-7 rotate-[-7deg] rounded-full border border-white bg-white/90 px-4 py-2 text-xs shadow-sm">Satu langkah lebih baik <span className="ml-2 text-[#53793f]">↗</span></div></>}
  </div>
}

function Home() {
  const [open, setOpen] = useState(0)
  return <>
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_12%_65%,#dce8cf_0%,transparent_49%),radial-gradient(ellipse_at_90%_68%,#dcebed_0%,transparent_45%)] px-5 pb-10 pt-14 md:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(#ffffff60_1px,transparent_1px),linear-gradient(90deg,#ffffff60_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce5d4] bg-white/70 px-4 py-2 text-xs tracking-wide text-[#4c6540]"><span className="h-1.5 w-1.5 rounded-full bg-[#6a8f50]" /> RUANG UNTUK MEMAHAMI DIRI</p>
        <h1 className="font-display text-[43px] leading-[1.16] tracking-[-1.8px] md:text-[68px] lg:text-[76px]">Kenali Dirimu.<br />Rawat <span className="italic text-[#628847]">Kesehatan Mentalmu.</span></h1>
        <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-[#596157] md:text-base">Ruang aman untuk memahami kondisi emosional, mengenali pola perasaan, dan menemukan langkah kecil menuju kesejahteraan mental.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3"><LinkButton>Mulai Asesmen</LinkButton><LinkButton href="#tentang" secondary>Pelajari CERNA</LinkButton></div>
        <div className="mt-5 flex items-center justify-center gap-4 text-xs text-[#526148]"><span className="flex items-center gap-1.5"><Icon name="shield" className="h-3.5 w-3.5" />Tanpa penghakiman</span><span className="h-1 w-1 rounded-full bg-[#9eab95]" /><span>Sesuai ritmemu sendiri</span></div>
      </div>
      <HeroCards />
      <p className="pb-5 text-center text-xs tracking-wide text-[#56634f]">SEDIKIT JEDA. LEBIH DEKAT DENGAN DIRI SENDIRI.</p>
    </section>
    <section id="tentang" className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center">
      <p className="mb-4 text-xs tracking-[0.18em] text-[#5c774b]">HALO, KAMI CERNA</p>
      <h2 className="font-display text-3xl leading-tight tracking-[-1px] md:text-[43px]">Perjalanan memahami diri<br />dimulai <span className="italic text-[#698950]">dari sini.</span></h2>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#62685f]">Setiap perasaan memiliki cerita. CERNA membantu Anda mengenali kondisi emosional dan memahami langkah yang dapat dilakukan untuk menjaga kesehatan mental.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 border-y border-[#e5e6df] py-5">{['Ruang yang suportif', 'Pendekatan terstruktur', 'Berorientasi pada dirimu'].map(t => <span key={t} className="flex items-center gap-2 text-sm text-[#56634f]"><Icon name="check" className="h-4 w-4" />{t}</span>)}</div>
    </section>
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-xs tracking-[0.18em] text-[#5c774b]">BERSAMA CERNA</p><h2 className="font-display text-3xl leading-tight md:text-[42px]">Cara sederhana untuk<br />merasa lebih <span className="italic text-[#698950]">terhubung.</span></h2></div><p className="max-w-xs text-sm leading-6 text-[#62685f]">Apa yang bisa Anda lakukan bersama CERNA?<br />Mulai dari hal yang paling kamu butuhkan.</p></div>
      <div className="grid gap-5 md:grid-cols-3">{features.map((f, i) => <a key={f.title} href={f.href} className="group rounded-[26px] border border-[#e5e6df] bg-white p-5 shadow-[0_6px_22px_#34473404] transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#478C9B]"><FeatureArt index={i} /><p className="mb-3 text-xs font-medium tracking-wide text-[#597446]">{f.label}</p><h3 className="font-display text-[27px] leading-tight">{f.title}</h3><p className="mt-3 text-sm leading-6 text-[#62685f]">{f.description}</p><span className="mt-6 inline-flex items-center gap-3 text-sm font-medium">Jelajahi lebih lanjut <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></span></a>)}</div>
    </section>
    <section id="panduan" className="bg-[#edf2e8] px-6 py-20">
      <div className="mx-auto max-w-6xl"><div className="text-center"><p className="mb-4 text-xs tracking-[0.18em] text-[#5c774b]">TAK PERLU TERBURU-BURU</p><h2 className="font-display text-3xl md:text-[42px]">Langkah kecil. Pemahaman yang <em>berarti.</em></h2><p className="mt-4 text-sm text-[#5d6756]">Bagaimana CERNA membantu Anda? Sesederhana empat langkah ini.</p></div>
      <div className="mt-14 grid gap-8 md:grid-cols-4">{steps.map((s, i) => <div key={s} className="relative text-center"><span className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-[#dce8cf] font-display text-xl">0{i + 1}</span>{i < 3 && <div className="absolute left-[63%] top-6 hidden w-[75%] border-t border-dashed border-[#b4c5a5] md:block" />}<h3 className="text-sm font-medium">{s}</h3><p className="mx-auto mt-2 max-w-[210px] text-sm leading-6 text-[#626b5c]">{['Manual atau percakapan AI, pilih yang nyaman untukmu.', 'Jawab dengan jujur. Tidak ada jawaban benar atau salah.', 'Kenali indikasi awal dari informasi yang kamu berikan.', 'Jelajahi edukasi dan dukungan yang kamu butuhkan.'][i]}</p></div>)}</div></div>
    </section>
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div><p className="mb-4 text-xs tracking-[0.18em] text-[#5c774b]">DI SINI, UNTUKMU</p><h2 className="font-display text-4xl leading-tight md:text-[45px]">Ruang untuk bertumbuh.<br /><em className="text-[#698950]">Dengan caramu.</em></h2><p className="mb-7 mt-5 text-sm leading-7 text-[#62685f]">Kamu tidak harus memahami semuanya hari ini.<br />Kami menemanimu, satu langkah dalam satu waktu.</p>
        {supports.map(([title, desc], i) => <div key={title} className="border-b border-[#e5e6df]"><h3><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`support-${i}`} className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left text-sm font-medium focus-visible:ring-2 focus-visible:ring-[#478C9B]"><span><span className="mr-4 text-xs text-[#5e7750]">0{i + 1}</span>{title}</span><span className="text-xl text-[#597446]">{open === i ? '−' : '+'}</span></button></h3><div id={`support-${i}`} hidden={open !== i}><p className="pb-5 pl-9 text-sm leading-7 text-[#62685f]">{desc}</p></div></div>)}
      </div>
      <div className="relative flex min-h-[470px] items-center justify-center overflow-hidden rounded-[36px] bg-[#e9efeb]">
        <div className="absolute h-80 w-80 rounded-full border-[45px] border-[#d9e5dc]" />
        <div className="relative w-[225px] rotate-[7deg] rounded-[36px] border-[7px] border-white bg-[#f8faf5] p-4 shadow-[0_25px_45px_#3d5b3a20]"><div className="mx-auto mb-6 h-4 w-20 rounded-full bg-[#e0e4dc]" /><div className="flex items-center gap-1 text-sm font-semibold"><Icon name="leaf" className="h-4 w-4 text-[#65874b]" />cerna.</div><p className="mt-6 text-xs text-[#62685f]">Waktunya menyapa diri.</p><h3 className="mt-2 font-display text-2xl">Apa kabarmu<br /><em>hari ini?</em></h3><Flower className="mx-auto my-5 h-28 w-28" /><div className="rounded-2xl bg-white p-3 text-center text-xs leading-5 text-[#526148]">Semua perasaanmu valid.<br />Mari pahami bersama.</div><a href="#/metode" className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-[#85AD68] text-xs font-medium">Mulai perjalananmu →</a><div className="mx-auto mt-5 h-1 w-16 rounded bg-[#c5ccbf]" /></div>
        <div className="absolute bottom-14 left-3 -rotate-6 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-lg md:left-5"><span className="flex items-center gap-2 text-xs text-[#526148]"><Icon name="shield" className="h-4 w-4" />Ruang aman untuk dirimu</span></div><span className="absolute right-7 top-12 text-[#478C9B]"><Icon name="spark" className="h-9 w-9" /></span>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 pb-20"><div className="grid grid-cols-2 gap-6 border-y border-[#e5e6df] py-9 lg:grid-cols-4">{(['Mudah digunakan', 'Privasi pengguna', 'Pendekatan terstruktur', 'Informasi edukatif']).map((t, i) => <div key={t} className="flex items-center gap-3"><span className="rounded-full bg-[#edf2e8] p-3 text-[#5b7747]"><Icon name={(['heart', 'shield', 'book', 'leaf'] as IconName[])[i]} /></span><span className="text-sm">{t}</span></div>)}</div></section>
    <section className="relative overflow-hidden bg-[#e8eedf] px-6 py-20 text-center"><Flower className="absolute -left-12 top-12 hidden h-56 w-56 rotate-12 lg:block" /><Flower teal className="absolute -right-10 bottom-0 hidden h-48 w-48 -rotate-12 lg:block" /><p className="mb-5 text-xs tracking-[0.18em] text-[#536d43]">SATU LANGKAH UNTUK DIRIMU</p><h2 className="font-display text-4xl md:text-5xl">Mulai perjalanan<br /><em className="text-[#628448]">memahami dirimu.</em></h2><p className="mt-5 text-sm text-[#596451]">Luangkan waktu sejenak untuk mengenali apa yang sedang Anda rasakan.</p><div className="mt-8"><LinkButton>Mulai Sekarang</LinkButton></div><p className="mx-auto mt-7 max-w-lg text-xs leading-5 text-[#596451]">CERNA merupakan alat skrining awal dan edukasi kesehatan mental,<br className="hidden md:block" /> bukan pengganti diagnosis profesional.</p></section>
  </>
}

function EmptyPanel({ title, text, chat = false }: { title: string; text: string; chat?: boolean }) {
  return <div className="mx-auto max-w-2xl rounded-[28px] border border-[#e5e6df] bg-white p-8 text-center md:p-12"><span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf2e8] text-[#628448]"><Icon name={chat ? 'chat' : 'book'} className="h-7 w-7" /></span><h2 className="font-display text-3xl">{title}</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#60695a]">{text}</p><p className="mt-5 rounded-xl bg-[#f7f7f3] p-4 text-sm leading-6 text-[#62685f]">Repositori ini belum menyertakan data atau layanan CERNA asli. Tidak ada hasil klinis, skor, atau respons AI yang dibuat secara simulasi.</p><div className="mt-7"><LinkButton href="#/metode" secondary>Kembali ke pilihan asesmen</LinkButton></div></div>
}
const routeTitles: Record<string, [string, string]> = {
  kategori: ['Kenali Area yang Ingin Anda Pahami', 'Pilih kategori yang paling relevan dengan kondisi Anda saat ini.'],
  detail: ['Kenali Sebelum Memulai', 'Pahami area asesmen yang ingin Anda jelajahi.'],
  kuesioner: ['Satu Pertanyaan, Satu Langkah', 'Ambil waktu yang Anda butuhkan. Tidak perlu terburu-buru.'],
  ringkasan: ['Hasil Analisis Percakapan', 'Rangkuman cerita dan informasi yang Anda bagikan.'],
  laporan: ['Laporan Asesmen', 'Hasil analisis berdasarkan gejala yang Anda laporkan.'],
  diagnosis: ['Informasi Diagnosis', 'Informasi edukatif untuk membantu memahami hasil skrining awal.'],
  rekomendasi: ['Rekomendasi Tindak Lanjut', 'Langkah yang tepat dimulai dari pemahaman yang baik.'],
  kontak: ['Temukan Bantuan Profesional', 'Anda tidak harus melalui semuanya sendirian.'],
  selesai: ['Perjalanan Anda Berlanjut', 'Terima kasih telah meluangkan waktu untuk diri sendiri.'],
  privasi: ['Privasi & Keamanan', 'Transparansi adalah bagian dari ruang yang aman.'],
}
function InnerPage({ route }: { route: string }) {
  const [draft, setDraft] = useState('')
  const [notice, setNotice] = useState('')
  useEffect(() => { setNotice(''); setDraft('') }, [route])
  const isMethod = route === 'metode'
  const isChat = route === 'chatbot'
  const [title, subtitle] = isMethod ? ['Pilih Cara yang Paling Nyaman', 'Setiap orang memiliki cara berbeda dalam memahami dirinya. Pilih pendekatan yang paling sesuai untuk Anda.'] : isChat ? ['Asisten AI CERNA', 'Ruang yang tenang untuk pikiran dan perasaan Anda.'] : routeTitles[route] || routeTitles.kategori
  return <main className="min-h-[72vh] bg-[radial-gradient(ellipse_at_top,#e8efdf,transparent_65%)] px-6 py-14">
    <div className="mx-auto max-w-5xl"><a href="#/" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#536848]"><span>←</span> Kembali ke beranda</a><div className="mb-11 mt-7 text-center"><p className="mb-4 text-xs tracking-[0.18em] text-[#5c774b]">SELANGKAH LEBIH DEKAT DENGAN DIRI</p><h1 className="font-display text-4xl leading-tight md:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#62685f]">{subtitle}</p></div>
      {isMethod ? <><div className="grid gap-6 md:grid-cols-2">{[{ title: 'Asesmen Manual', icon: 'book' as IconName, text: 'Jawab serangkaian pertanyaan terstruktur berdasarkan panduan SDKI menggunakan sistem pakar berbasis aturan.', items: ['Pertanyaan terstruktur', 'Analisis berbasis sistem pakar', 'Hasil berdasarkan gejala yang dipilih'], href: '#/kategori' }, { title: 'Asesmen Chatbot', icon: 'chat' as IconName, text: 'Berinteraksi secara santai dengan CERNA AI untuk menceritakan kondisi, perasaan, dan pengalaman Anda.', items: ['Percakapan interaktif', 'Pertanyaan lanjutan yang kontekstual', 'Analisis informasi percakapan'], href: '#/chatbot' }].map((m, i) => <article key={m.title} className="rounded-[28px] border border-[#e5e6df] bg-white p-8 shadow-[0_10px_40px_#33442205]"><span className={`mb-7 flex h-20 w-20 items-center justify-center rounded-3xl ${i ? 'bg-[#eaf2f3] text-[#386c77]' : 'bg-[#edf2e8] text-[#5c7947]'}`}><Icon name={m.icon} className="h-9 w-9" /></span><h2 className="font-display text-3xl">{m.title}</h2><p className="mt-4 text-sm leading-7 text-[#62685f]">{m.text}</p><ul className="my-7 space-y-4">{m.items.map(item => <li key={item} className="flex gap-3 text-sm text-[#53614b]"><Icon name="check" className="h-4 w-4" />{item}</li>)}</ul><LinkButton href={m.href}>Pilih {m.title}</LinkButton></article>)}</div><p className="mt-7 text-center text-sm text-[#62685f]">Kedua metode merupakan skrining awal, bukan diagnosis klinis.</p></>
        : isChat ? <div className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-[#e5e6df] bg-white"><div className="flex items-center justify-between border-b border-[#e5e6df] px-6 py-5"><div className="flex items-center gap-3"><span className="rounded-full bg-[#eaf2f3] p-3 text-[#366c77]"><Icon name="spark" /></span><div><h2 className="text-sm font-semibold">CERNA AI</h2><p className="mt-1 text-xs text-[#62685f]">Layanan belum terhubung</p></div></div><button className={`${button} border border-[#e5e6df] px-4`} onClick={() => { setDraft(''); setNotice('Draf percakapan telah direset.') }}>Reset</button></div><div className="p-6 md:p-8"><div className="rounded-2xl rounded-tl-none bg-[#eaf2f3] p-5 text-sm leading-7 text-[#36545a]">Halo, selamat datang di ruang CERNA. Layanan AI belum terhubung pada versi ini. Jangan bagikan informasi pribadi atau sensitif. Hubungkan layanan chatbot asli untuk memulai percakapan.</div><p className="mb-4 mt-8 text-xs tracking-wide text-[#62685f]">IDE UNTUK MEMULAI CERITA</p><div className="grid gap-3 md:grid-cols-2">{['Akhir-akhir ini saya sering merasa cemas.', 'Saya merasa kehilangan motivasi.', 'Saya sulit tidur dan sering berpikir berlebihan.', 'Saya merasa kesepian.'].map(t => <button key={t} onClick={() => setDraft(t)} className="min-h-16 rounded-xl border border-[#e5e6df] p-4 text-left text-sm text-[#5a6353] transition hover:bg-[#edf2e8] focus-visible:ring-2 focus-visible:ring-[#478C9B]">{t}</button>)}</div><form className="mt-7" onSubmit={e => { e.preventDefault(); setNotice('Pesan tidak dikirim. Layanan chatbot asli perlu dihubungkan terlebih dahulu.') }}><label htmlFor="story" className="mb-2 block text-sm text-[#53614b]">Draf cerita Anda — tidak dikirim atau disimpan</label><div className="flex gap-2 rounded-2xl border border-[#cdd6c5] p-2"><input id="story" value={draft} onChange={e => setDraft(e.target.value)} placeholder="Ketik cerita atau perasaan Anda di sini..." className="min-h-11 min-w-0 flex-1 rounded-xl px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[#478C9B]" /><button aria-label="Kirim cerita" className={`${button} bg-[#85AD68] px-4`}><Icon name="arrow" /></button></div></form><p role="status" className="mt-3 text-sm leading-6 text-[#53614b]">{notice}</p></div></div>
        : route === 'kontak' ? <div className="grid gap-5 md:grid-cols-3">{['Puskesmas', 'Layanan konseling', 'Telemedicine'].map((t, i) => <article key={t} className="rounded-3xl border border-[#e5e6df] bg-white p-7"><Icon name={i === 1 ? 'heart' : 'shield'} className="mb-6 h-8 w-8 text-[#5c7947]" /><h2 className="font-display text-2xl">{t}</h2><p className="mt-4 text-sm leading-7 text-[#62685f]">{['Tanyakan ketersediaan layanan psikologi di puskesmas terdekat.', 'Cari penyedia konseling dengan tenaga profesional yang memiliki izin praktik.', 'Periksa kredensial tenaga profesional dan kebijakan privasi sebelum berkonsultasi.'][i]}</p><p className="mt-5 text-xs leading-5 text-[#596451]">Direktori kontak CERNA asli belum tersedia.</p></article>)}</div>
        : route === 'privasi' ? <EmptyPanel title="Informasi yang perlu Anda ketahui" text="Versi antarmuka ini tidak mengirim atau menyimpan draf percakapan. Kebijakan privasi layanan asli harus ditambahkan dan ditinjau sebelum pengumpulan data kesehatan dilakukan." />
        : <><EmptyPanel title={route === 'kategori' ? 'Kategori asesmen belum tersedia' : route === 'rekomendasi' ? 'Rekomendasi menunggu hasil asesmen' : 'Belum ada data asesmen'} text={route === 'kategori' ? 'Kategori, pertanyaan, dan aturan DFS / Certainty Factor asli perlu dihubungkan sebelum asesmen dapat dimulai. Tidak ada kategori medis yang ditambahkan atau diubah.' : 'Halaman ini akan menampilkan informasi dari sistem CERNA asli setelah data dan hasil asesmen tersedia. Skor, diagnosis, dan tingkat urgensi tidak dapat ditentukan tanpa perhitungan yang sah.'} /><div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-3">{[['Laporan', 'laporan'], ['Informasi diagnosis', 'diagnosis'], ['Rekomendasi', 'rekomendasi'], ['Bantuan profesional', 'kontak']].map(([label, path]) => <a key={path} href={`#/${path}`} className={`${button} border border-[#dce2d6] bg-white`}>{label}</a>)}</div>{route === 'selesai' && <div className="mt-8 text-center"><LinkButton href="#/chatbot">Kembali ke chatbot</LinkButton></div>}</>}
      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-6 text-[#62685f]">CERNA merupakan alat skrining awal dan edukasi, bukan pengganti diagnosis profesional. Jika Anda merasa tidak aman atau membutuhkan pertolongan segera, hubungi layanan darurat setempat atau kunjungi IGD terdekat.</p>
    </div>
  </main>
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  const [menu, setMenu] = useState(false)
  useEffect(() => { const change = () => { setHash(window.location.hash); setMenu(false); if (window.location.hash.startsWith('#/')) window.scrollTo({ top: 0, behavior: 'instant' }) }; window.addEventListener('hashchange', change); return () => window.removeEventListener('hashchange', change) }, [])
  const route = hash.startsWith('#/') ? hash.slice(2).split('?')[0] : ''
  const nav = [['Beranda', '#/'], ['Tentang CERNA', '#tentang'], ['Panduan', '#panduan'], ['Asesmen', '#/metode']]
  return <div className="min-h-screen overflow-x-hidden bg-[#f9faf6] font-sans text-[#262A27]">
    <header className="sticky top-0 z-50 border-b border-[#e5e6df]/70 bg-[#fafbf7]/95 backdrop-blur-xl"><div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between gap-5 px-6"><Logo /><nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">{nav.map(([label, href]) => <a key={label} href={!route || href.startsWith('#/') ? href : `#/${href.slice(1)}`} onClick={e => { if (route && !href.startsWith('#/')) { e.preventDefault(); window.location.hash = '/'; setTimeout(() => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 60) } }} className={`flex min-h-11 items-center text-sm transition hover:text-[#52743c] ${(!route && label === 'Beranda') || (route && label === 'Asesmen') ? 'text-[#52743c]' : 'text-[#5c6357]'}`}>{label}</a>)}</nav><div className="hidden md:block"><LinkButton>Mulai Sekarang</LinkButton></div><button onClick={() => setMenu(!menu)} aria-label={menu ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={menu} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce2d6] focus-visible:ring-2 focus-visible:ring-[#478C9B] md:hidden"><Icon name={menu ? 'close' : 'menu'} /></button></div>{menu && <nav aria-label="Navigasi seluler" className="space-y-1 border-t border-[#e5e6df] px-6 pb-5 md:hidden">{nav.map(([label, href]) => <a key={label} href={route && !href.startsWith('#/') ? '#/' : href} onClick={() => setMenu(false)} className="flex min-h-12 items-center text-sm">{label}</a>)}<LinkButton>Mulai Sekarang</LinkButton></nav>}</header>
    {route ? <InnerPage route={route} /> : <main><Home /></main>}
    <footer className="bg-[#f4f4ee] px-6 pb-7 pt-14"><div className="mx-auto max-w-6xl"><div className="grid gap-10 pb-10 md:grid-cols-[2fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-4 max-w-xs text-sm leading-7 text-[#62685f]">Mengenal diri, merawat rasa.<br />Ruang untuk kesehatan mental yang lebih baik.</p><span className="mt-4 inline-flex items-center gap-2 text-xs text-[#536848]"><Icon name="leaf" className="h-4 w-4" />Dibuat dengan empati, untukmu.</span></div>{[{ title: 'Jelajahi', links: [['Beranda', '#/'], ['Tentang CERNA', '#tentang'], ['Panduan', '#panduan']] }, { title: 'Asesmen', links: [['Asesmen manual', '#/kategori'], ['CERNA AI', '#/chatbot'], ['Laporan asesmen', '#/laporan']] }, { title: 'Dukungan', links: [['Bantuan profesional', '#/kontak'], ['Rekomendasi', '#/rekomendasi'], ['Privasi & keamanan', '#/privasi']] }].map(group => <div key={group.title}><h3 className="mb-3 text-sm font-medium">{group.title}</h3>{group.links.map(([label, href]) => <a key={label} href={route && !href.startsWith('#/') ? '#/' : href} className="flex min-h-11 items-center text-sm text-[#62685f] hover:text-[#456032]">{label}</a>)}</div>)}</div><div className="flex flex-wrap justify-between gap-4 border-t border-[#dedfd6] pt-6 text-xs leading-5 text-[#62685f]"><p>© {new Date().getFullYear()} CERNA. Setiap perasaan memiliki cerita.</p><p>Skrining awal & edukasi. Bukan layanan diagnosis klinis.</p></div></div></footer>
  </div>
}
