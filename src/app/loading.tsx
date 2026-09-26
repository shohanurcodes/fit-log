const Loading = () => {
  return (
    <main className="min-h-screen bg-[#111111] px-4 py-16">
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#2a2d33] border-t-[#ccff00]" />

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8d929d]">
            Loading workouts...
          </p>
        </div>
      </div>
    </main>
  );
};

export default Loading;