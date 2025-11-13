export default function AuthCard({ children }) {
  return (
    <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl rounded-3xl shadow-2xl bg-white/70 backdrop-blur-xl border border-[#e7eff6]/50 p-12">
      <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-[#2a4d69]/5 via-[#4b86b4]/5 to-[#e74c3c]/5" />
      <div className="relative z-10">
        <div className="text-center mb-6">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100" alt="Justice Scales" className="h-12 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-[#2a4d69]">Welcome to Justice Hub</h1>
          <p className="text-[#4b86b4] text-sm">Empowering communities through justice and action</p>
        </div>
        {children}
      </div>
    </div>
  );
}
