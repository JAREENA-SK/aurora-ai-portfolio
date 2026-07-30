import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1020] px-6 text-white">
      <div className="max-w-xl rounded-3xl border border-cyan-500/20 bg-[#161B2F] p-12 text-center shadow-xl">

        <div className="mb-6 text-6xl">
          🎉
        </div>

        <h1 className="mb-4 text-4xl font-bold">
          Thank You!
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-400">
          Your message has been sent successfully.
          I appreciate you taking the time to contact me.
          I'll get back to you as soon as possible.
        </p>

        <Link
          href="/"
          className="inline-block rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}