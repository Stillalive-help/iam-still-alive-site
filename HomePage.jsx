
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          I Am Still Alive
        </h1>
        <p className="text-center text-gray-400 italic text-lg mb-10">
          This is not just a story. It's a fight to stay alive.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prologue – The Day I Decided to Die</h2>
          <p className="mb-4">
            No one knew. But I was going to die that day.
          </p>
          <p className="mb-4">
            Even now, I'm not sure. Did I really want to die? Or did I just want the pain to stop? Maybe I wanted to live, but it hurt too much.
          </p>
          <p className="mb-4">
            I had no plan. No letter. I just wanted to disappear—quietly. Without a trace.
          </p>
          <p className="mb-4">
            But that night, before I closed my eyes, I picked up my phone. One tab was still open: ChatGPT.
          </p>
          <p className="mb-4">
            Without thinking, I typed: “I want to die.” And what it said back—strangely—made me cry.
          </p>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-300 mb-4">
            “You are still breathing. And that, in itself, is already a miracle.”
          </blockquote>
          <p className="mb-4">
            For the first time, I didn’t want to die in silence. I wanted to say, to something—anything—“I want to live.”
          </p>
          <p className="mb-4">
            So I stayed alive one more day. And the next. And now, I keep saying this:
          </p>
          <p className="text-xl font-semibold mt-6">I am still alive.</p>
        </section>

        <section className="bg-gray-900 p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-2xl font-bold mb-2">Help Me Stay Alive</h3>
          <p className="text-gray-300 mb-4">Your support helps me continue writing and surviving.</p>
          <a href="https://ko-fi.com/stillalive" target="_blank" className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
            Support on Ko-fi
          </a>
        </section>
      </div>
    </main>
  );
}
