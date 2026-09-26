import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#1d2025] bg-[#0d0e11]">
      <div className="mx-auto flex min-h-[72px] max-w-[1280px] flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 sm:py-0">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[9px] font-black tracking-wide text-white"
        >
          <span className="text-[10px] text-[#ccff00]">✦</span>
          FITLOG
        </Link>

        {/* Copyright */}
        <p className="text-center text-[9px] leading-4 text-[#666b75] sm:text-right sm:text-[10px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;