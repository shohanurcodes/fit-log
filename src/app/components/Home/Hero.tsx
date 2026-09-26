import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#111111]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">

        {/* Left Content */}
        <div className="max-w-xl">

          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#ccff00] sm:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#d9ff4d]"
          >
            Browse Workouts
            <span className="text-base">→</span>
          </Link>
        </div>

        {/* Banner Image */}
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/banner.png"
            alt="Workout"
            width={600}
            height={600}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;