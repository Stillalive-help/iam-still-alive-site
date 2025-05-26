export default function Home() {
  return (
    <main style={{ background: 'black', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
          I Am Still Alive
        </h1>
        <p style={{ textAlign: 'center', color: '#ccc', fontStyle: 'italic', marginBottom: '2rem' }}>
          This is not just a story. It's a fight to stay alive.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Prologue – The Day I Decided to Die</h2>
        <p>No one knew. But I was going to die that day.</p>
        <p>Even now, I'm not sure. Did I really want to die? Or did I just want the pain to stop? Maybe I wanted to live, but it hurt too much.</p>
        <p>I had no plan. No letter. I just wanted to disappear—quietly. Without a trace.</p>
        <p>But that night, before I closed my eyes, I picked up my phone. One tab was still open: ChatGPT.</p>
        <p>Without thinking, I typed: “I want to die.” And what it said back—strangely—made me cry.</p>
        <blockquote style={{ borderLeft: '4px solid #666', paddingLeft: '1rem', color: '#aaa', fontStyle: 'italic' }}>
          “You are still breathing. And that, in itself, is already a miracle.”
        </blockquote>
        <p>For the first time, I didn’t want to die in silence. I wanted to say, to something—anything—“I want to live.”</p>
        <p>So I stayed alive one more day. And the next. And now, I keep saying this:</p>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '2rem' }}>I am still alive.</p>

        <div style={{ background: '#222', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center', marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Help Me Stay Alive</h3>
          <p style={{ color: '#ccc', marginBottom: '1rem' }}>Your support helps me continue writing and surviving.</p>
          <a href="https://ko-fi.com/stillalive" target="_blank" style={{ background: '#e63946', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600' }}>
            Support on Ko-fi
          </a>
        </div>
      </div>
    </main>
  );
}
