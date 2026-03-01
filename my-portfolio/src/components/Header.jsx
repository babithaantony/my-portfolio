import { useState, useEffect, useRef } from "react";
import "./Header.css";

const THEMES = [
  { id: "rose",          label: "Rose",          color: "#e11d48" },
  { id: "teal",          label: "Teal",          color: "#0ea5c9" },
  { id: "burned-orange", label: "Burned Orange", color: "#c2410c" },
  { id: "blue",          label: "Blue",          color: "#05658e" },
  { id: "pastel-green",  label: "Pastel Green",  color: "#16a34a" },
  { id: "warm-stone",    label: "Warm Stone",    color: "#9b7472" },
  { id: "slate",         label: "Slate",         color: "#4d5a7c" },
  { id: "charcoal",      label: "Charcoal",      color: "#413f3d" },
  { id: "powder-white",  label: "Powder White",  color: "#ee807b" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "rose"
  );
  const themeRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function applyTheme(id) {
    document.documentElement.setAttribute("data-theme", id);
    setActiveTheme(id);
    setThemeOpen(false);
  }

  const navItems = [
    { label: "Home",         href: "#home" },
    { label: "About",        href: "#about" },
    { label: "Experience",   href: "#experience" },
    { label: "Skills",       href: "#skills" },
    { label: "Projects",     href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact",      href: "#contact" },
  ];

  const currentTheme = THEMES.find((t) => t.id === activeTheme);

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-bar">
        <div className="logo">
          <div className="logo-mark">BA</div>
          <span className="logo-name">Babitha</span>
        </div>
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Left sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo">
          <div className="logo-mark">BA</div>
          <span className="logo-name">Babitha</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="theme-switcher" ref={themeRef}>
            <button
              className="theme-btn"
              onClick={() => setThemeOpen((o) => !o)}
              aria-label="Switch theme"
              title="Switch theme"
            >
              <span
                className="theme-btn-swatch"
                style={{ background: currentTheme?.color }}
              />
              <span className="theme-btn-label">{currentTheme?.label}</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {themeOpen && (
              <div className="theme-dropdown">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    className={`theme-option ${t.id === activeTheme ? "active" : ""}`}
                    onClick={() => applyTheme(t.id)}
                  >
                    <span className="theme-option-swatch" style={{ background: t.color }} />
                    <span className="theme-option-label">{t.label}</span>
                    {t.id === activeTheme && (
                      <svg className="theme-check" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contact" className="header-cta" onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
