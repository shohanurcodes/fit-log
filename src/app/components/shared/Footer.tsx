import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#1d2025] bg-[#0d0e11]">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[9px] font-black tracking-wide text-white"
        >
          <span className="text-[10px] text-[#ccff00]">✦</span>
          FITLOG
        </Link>

        {/* Copyright */}
        <p className="text-[10px] text-[#666b75]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;