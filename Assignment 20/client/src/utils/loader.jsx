import React, { useState, useEffect, useRef, useCallback } from "react";
import { RotateCcw } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Cosmic Gateway — standalone splash / loading screen                */
/* ------------------------------------------------------------------ */

const CSS = `
.cosmic-loader-root {
  --background: #11131c;
  --on-background: #e1e1ef;
  --primary: #c0c1ff;

  background: var(--background);
  color: var(--on-background);
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.cosmic-loader-root *{ box-sizing: border-box; }

.cosmic-ring{ transform-origin: center; animation: cosmicRotate 10s infinite linear; }
.cosmic-ring-reverse{ transform-origin: center; animation: cosmicRotateReverse 15s infinite linear; }

@keyframes cosmicRotate{ from{ transform: rotate(0deg); } to{ transform: rotate(360deg); } }
@keyframes cosmicRotateReverse{ from{ transform: rotate(360deg); } to{ transform: rotate(0deg); } }

.cosmic-replay-btn{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid rgba(192,193,255,0.3);
  background: rgba(192,193,255,0.1);
  color: var(--primary);
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all .2s ease;
}
.cosmic-replay-btn:hover{ background: rgba(192,193,255,0.18); }
.cosmic-replay-btn:active{ transform: scale(.96); }
`;

const STATUS_STEPS = [
  "Initializing System...",
  "Connecting to Cloud Nodes...",
  "Encrypting Session Data...",
  "Fetching User Context...",
  "Synchronizing State...",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(STATUS_STEPS[0]);

  const timers = useRef([]);
  const addTimer = (id) => timers.current.push(id);
  const clearAllTimers = () => {
    timers.current.forEach((id) => {
      clearInterval(id);
      clearTimeout(id);
    });
    timers.current = [];
  };

  const runLoader = useCallback(() => {
    clearAllTimers();
    setVisible(true);
    setOpacity(1);
    setProgress(0);
    setStatusText(STATUS_STEPS[0]);

    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 5) + 1;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        const hideTimer = setTimeout(() => {
          setOpacity(0);
          const removeTimer = setTimeout(() => setVisible(false), 700);
          addTimer(removeTimer);
        }, 500);
        addTimer(hideTimer);
      }
      setProgress(p);
      const statusIndex = Math.min(
        STATUS_STEPS.length - 1,
        Math.floor((p / 100) * STATUS_STEPS.length)
      );
      setStatusText(STATUS_STEPS[statusIndex]);
    }, 50);
    addTimer(interval);
  }, []);

  useEffect(() => {
    runLoader();
    return () => clearAllTimers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cosmic-loader-root">
      <style>{CSS}</style>

      {/* Content behind the splash, revealed once loading completes */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: 16 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>System Ready</h1>
        <p style={{ color: "rgba(225,225,239,0.6)" }}>The Cosmic Gateway loader has finished.</p>
        <button className="cosmic-replay-btn" onClick={runLoader} type="button">
          <RotateCcw size={15} />
          Replay Loader
        </button>
      </div>

      {/* ---------------- SPLASH / COSMIC GATEWAY LOADER ---------------- */}
      {visible && (
        <div
          className="cosmic-loader-root"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity,
            transition: "opacity .7s ease",
          }}
        >
          <div style={{ position: "relative", width: 256, height: 256, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Outer ring */}
            <svg className="cosmic-ring" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="48" stroke="url(#cosmic-grad1)" strokeDasharray="10 20" strokeWidth="0.5" />
              <defs>
                <linearGradient id="cosmic-grad1" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#8083ff", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#f751a1", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner reverse ring */}
            <svg
              className="cosmic-ring-reverse"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 10 }}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" fill="none" r="48" stroke="url(#cosmic-grad2)" strokeDasharray="1 15" strokeWidth="1" />
              <defs>
                <linearGradient id="cosmic-grad2" x1="100%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#f751a1", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#8083ff", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>

            <div style={{ textAlign: "center", zIndex: 10 }}>
              <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.02em" }}>{progress}%</div>
              <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)", marginTop: 8 }}>
                {statusText}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}