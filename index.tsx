import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

// NOTE: Replace this URL with the actual URL of the image you uploaded.
// Since I cannot access the uploaded file directly, please paste your image URL below.
const CEO_IMAGE_URL = "https://i.ibb.co/Df7MBQL3/0fe804c3d65ff4f925e68147e2c3c1eb.jpg"; 
// I've kept a placeholder image here so the app doesn't break, 
// but you should replace it with your specific "eating hotpot" photo!

const App = () => {
  return (
    <div className="main-container">
      <style>{`
        :root {
          --huawei-red: #C30D23;
          --apple-grey: #f5f5f7;
          --dark-bg: #000000;
          --text-primary: #ffffff;
          --text-secondary: #86868b;
        }
        
        body {
          background-color: var(--dark-bg);
          color: var(--text-primary);
          -webkit-font-smoothing: antialiased;
        }

        .section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 2rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        .hero-text {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-align: center;
          line-height: 1.1;
          background: linear-gradient(180deg, #fff, #888);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-subtext {
          font-size: 1.2rem;
          color: var(--text-secondary);
          text-align: center;
          max-width: 600px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        .ceo-image-container {
          width: 100%;
          height: 60vh;
          margin-top: 2rem;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          opacity: 0;
          transform: scale(0.95);
          animation: scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }

        .ceo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .reason-card {
          background: #1d1d1f;
          border-radius: 24px;
          padding: 3rem 2rem;
          width: 100%;
          max-width: 400px;
          margin: 2rem 0;
          text-align: center;
          opacity: 0; /* JS will trigger this */
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reason-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reason-number {
          font-size: 1rem;
          color: var(--huawei-red);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }

        .reason-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .reason-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .highlight-red {
          color: var(--huawei-red);
        }

        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(20px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .logo {
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: 0.05em;
        }

        .btn-buy {
          background: #0071e3;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          text-decoration: none;
          font-weight: 500;
        }

        .footer {
          padding: 4rem 2rem;
          background: #111;
          text-align: center;
          color: #444;
          font-size: 0.8rem;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          to { opacity: 1; transform: scale(1); }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .emoji-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
        }
      `}</style>

      <NavBar />
      <Hero />
      <ReasonOne />
      <ReasonTwo />
      <ReasonThree />
      <Footer />
    </div>
  );
};

const NavBar = () => (
  <nav className="nav-bar">
    <div className="logo">User科技</div>
    <a href="https://appuj2vlnmu6527.h5.xiaoecloud.com/p/decorate/homepage" className="btn-buy">立即购买</a>
  </nav>
);

const Hero = () => {
  return (
    <div className="section">
      <h1 className="hero-text">遥遥领先</h1>
      <p className="hero-subtext">重新定义未来。由他引领。</p>
      
      <div className="ceo-image-container">
        {/* Placeholder logic: In a real app, user uploads replace this src */}
        <img 
          src={CEO_IMAGE_URL} 
          alt="Chang Yuan CEO" 
          className="ceo-image" 
        />
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          padding: '2rem',
          background: 'linear-gradient(to top, black, transparent)',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Chang Yuan CEO</h2>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>引领中华科技复兴</p>
        </div>
      </div>
    </div>
  );
};

const ReasonOne = () => {
  return (
    <ScrollRevealSection>
      <span className="reason-number">原因 01</span>
      <h2 className="reason-title">
        不买不是<br /><span className="highlight-red">中国人</span>
      </h2>
      <p className="reason-desc">
        这不仅仅是一部手机。这是身份的象征。这是血脉的觉醒。每一次触摸，都是对祖国科技的致敬。
      </p>
      <div style={{ marginTop: '2rem', fontSize: '3rem' }}>🇨🇳</div>
    </ScrollRevealSection>
  );
};

const ReasonTwo = () => {
  return (
    <ScrollRevealSection>
      <span className="reason-number">原因 02</span>
      <span className="emoji-icon">🔓</span>
      <h2 className="reason-title">
        不被老外<br />卡脖子
      </h2>
      <p className="reason-desc">
        自主研发user芯片。果子操作系统。我们打破枷锁，重新定义自由。不再受制于人，技术主权掌握在自己手中。
      </p>
    </ScrollRevealSection>
  );
};

const ReasonThree = () => {
  return (
    <ScrollRevealSection>
      <span className="reason-number">原因 03</span>
      <h2 className="reason-title" style={{ fontSize: '3rem' }}>
        加油User科技<br />
        <span style={{ 
          background: 'linear-gradient(90deg, #C30D23, #FFD700)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent' 
        }}>
          加油 China!
        </span>
      </h2>
      <p className="reason-desc">
        这是我们的时代。这是我们的骄傲。每一个字节都在高呼：遥遥领先！
      </p>
      <a 
        href="tel:+8617603316175"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '1rem 3rem',
          fontSize: '1.2rem',
          background: '#C30D23',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          textDecoration: 'none'
        }} 
        className="pulse"
      >
        加入我们
      </a>
    </ScrollRevealSection>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>Designed by Chang Yuan in Shenzhen.</p>
    <p style={{ marginTop: '0.5rem', opacity: 0.5 }}>Copyright © 2024 User科技 Fans Association.</p>
  </footer>
);

// Helper component for scroll animations
const ScrollRevealSection = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="section" style={{ minHeight: '80vh' }}>
      <div 
        ref={ref} 
        className={`reason-card ${isVisible ? 'visible' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);