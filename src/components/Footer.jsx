export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto py-6 px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-medium tracking-wide text-white/90 text-base md:text-lg">
              &copy; 2025 <span className="font-bold">AI Recipe</span> | For Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}