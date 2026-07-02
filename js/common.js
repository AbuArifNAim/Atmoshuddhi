const SITE_SUBTITLE = "মওলা-এ-রহমান";
window.SITE_SUBTITLE = SITE_SUBTITLE;

(function () {
  document.querySelectorAll(".site-subtitle").forEach(el => {
    el.textContent = SITE_SUBTITLE;
  });
})();

(function () {
  const style = document.createElement("style");
  style.textContent = `
    body.dark-mode {
      --bg: #0f172a !important;
      --bg-secondary: #1e293b !important;
      --card-bg: rgba(30,41,59,0.85) !important;
      --text: #e2e8f0 !important;
      --text-light: #94a3b8 !important;
      --glass-bg: rgba(30,41,59,0.7) !important;
      --glass-border: rgba(255,255,255,0.08) !important;
      background: #0f172a !important;
      color: #e2e8f0 !important;
    }
    body.dark-mode .navbar,
    body.dark-mode .date-bar,
    body.dark-mode .card,
    body.dark-mode .kalam-item,
    body.dark-mode .member-card,
    body.dark-mode .memory-card,
    body.dark-mode .modal-content,
    body.dark-mode .modal-box,
    body.dark-mode .table-wrap,
    body.dark-mode .kalam-form,
    body.dark-mode .kalam-admin-item,
    body.dark-mode .notice-card {
      background: var(--card-bg) !important;
      border-color: var(--glass-border) !important;
      color: var(--text) !important;
    }
    body.dark-mode .nav-links a,
    body.dark-mode .date-section,
    body.dark-mode .page-sub,
    body.dark-mode .marquee-inner span,
    body.dark-mode .content {
      color: var(--text-light) !important;
    }
    body.dark-mode input,
    body.dark-mode textarea,
    body.dark-mode select {
      background: #1e293b !important;
      color: #e2e8f0 !important;
      border-color: #334155 !important;
    }
    body.dark-mode table th {
      background: #1e293b !important;
      color: #e2e8f0 !important;
    }
    body.dark-mode table td {
      border-color: #334155 !important;
    }
    body.dark-mode .total-row td {
      background: #1e3a3a !important;
      color: #fbbf24 !important;
    }
    body.dark-mode .site-subtitle,
    body.dark-mode h1, body.dark-mode h2, body.dark-mode h3 {
      color: #f1f5f9 !important;
    }

    #darkToggle {
      position: fixed;
      bottom: 20px; right: 20px;
      z-index: 9999;
      width: 44px; height: 44px;
      border-radius: 50%;
      border: none;
      background: #1e293b;
      color: #fbbf24;
      font-size: 1.3rem;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #darkToggle:hover {
      transform: scale(1.1);
    }
    body.dark-mode #darkToggle {
      background: #fbbf24;
      color: #1e293b;
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement("button");
  btn.id = "darkToggle";
  btn.innerHTML = "🌙";
  btn.setAttribute("aria-label", "Toggle dark mode");
  document.body.appendChild(btn);

  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
    btn.innerHTML = "☀️";
  }

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    btn.innerHTML = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });
})();
