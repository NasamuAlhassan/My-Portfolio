export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base: soft light gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-rose-50" />

      {/* Neon blobs — these bleed through the glass */}
      <div
        className="blob-1 absolute -top-40 -left-40 w-[650px] h-[650px] bg-violet-500/30 blur-[110px]"
      />
      <div
        className="blob-2 absolute -top-20 right-[-10%] w-[520px] h-[520px] bg-fuchsia-400/28 blur-[95px]"
      />
      <div
        className="blob-3 absolute top-[45vh] -left-24 w-[520px] h-[520px] bg-cyan-400/22 blur-[105px]"
      />
      <div
        className="blob-4 absolute top-[25vh] right-[8%] w-[420px] h-[420px] bg-pink-400/26 blur-[85px]"
      />
      <div
        className="blob-5 absolute bottom-[-5%] left-[25%] w-[480px] h-[480px] bg-violet-400/22 blur-[95px]"
      />
      <div
        className="blob-2 absolute bottom-[15vh] right-[-5%] w-[360px] h-[360px] bg-emerald-300/20 blur-[80px]"
        style={{ animationDelay: '-10s' }}
      />
      <div
        className="blob-4 absolute top-[70vh] left-[45%] w-[300px] h-[300px] bg-amber-300/18 blur-[70px]"
        style={{ animationDelay: '-5s' }}
      />
    </div>
  )
}
