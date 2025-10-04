import React from 'react';

const LiquidLight = () => {
  return (
    <>
      <div className="liquid-light-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>
      <style jsx>{`
        .liquid-light-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #000000;
          z-index: 0;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          /* Heavy blur creates the soft, fluid look */
          filter: blur(120px);
          mix-blend-mode: lighten; /* Blends colors beautifully on black */
        }

        /* Define blob sizes, colors, and animations */
        
        .blob-1 {
          width: 500px;
          height: 500px;
          background: rgba(138, 43, 226, 0.4); /* BlueViolet */
          animation: move1 30s infinite alternate ease-in-out;
        }

        .blob-2 {
          width: 450px;
          height: 450px;
          background: rgba(0, 206, 209, 0.4); /* DarkTurquoise */
          animation: move2 35s infinite alternate ease-in-out;
        }

        .blob-3 {
          width: 400px;
          height: 400px;
          background: rgba(218, 112, 214, 0.4); /* Orchid */
          animation: move3 28s infinite alternate ease-in-out;
        }

        .blob-4 {
            width: 350px;
            height: 350px;
            background: rgba(255, 69, 0, 0.3); /* OrangeRed */
            animation: move4 32s infinite alternate ease-in-out;
        }

        /* Keyframes define the movement paths for each blob */
        
        @keyframes move1 {
          from { transform: translate(-100px, -100px) rotate(0deg); }
          to { transform: translate(calc(100vw - 400px), calc(100vh - 400px)) rotate(360deg); }
        }

        @keyframes move2 {
          from { transform: translate(calc(100vw - 350px), 0px) rotate(0deg); }
          to { transform: translate(50px, calc(100vh - 350px)) rotate(-360deg); }
        }

        @keyframes move3 {
          from { transform: translate(100px, calc(100vh - 300px)) rotate(0deg); }
          to { transform: translate(calc(100vw - 300px), 50px) rotate(180deg); }
        }

        @keyframes move4 {
          from { transform: translate(calc(100vw - 500px), calc(100vh - 500px)) rotate(0deg); }
          to { transform: translate(0px, 0px) rotate(-180deg); }
        }
      `}</style>
    </>
  );
};

export default LiquidLight;

