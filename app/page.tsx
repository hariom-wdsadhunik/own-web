export default function HomePage() {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8 py-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-blue-400">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        FOUNDATION &amp; CORE SHELL ACTIVE
      </div>

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          HARI OM
        </h1>
        <p className="font-mono text-sm sm:text-base text-gray-400 uppercase tracking-widest">
          Product Thinking • UI/UX Architecture • Web Engineering • AI Lab
        </p>
      </div>

      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono text-xs pt-8">
        <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 space-y-2">
          <span className="text-gray-500 uppercase tracking-wider text-[10px]">Framework &amp; Shell</span>
          <p className="text-gray-200 font-semibold">Next.js 15 (App Router)</p>
          <p className="text-gray-400 text-[11px]">React 19 • TypeScript • Tailwind CSS v4</p>
        </div>

        <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 space-y-2">
          <span className="text-gray-500 uppercase tracking-wider text-[10px]">Design System</span>
          <p className="text-gray-200 font-semibold">Cinematic Dark Foundation</p>
          <p className="text-gray-400 text-[11px]">Space Grotesk &amp; Inter Typography</p>
        </div>
      </div>
    </div>
  );
}