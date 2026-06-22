/* ============================================================
   theme.js — "Liquid Glass" theme toggle (shared across pages)
   Injects glass CSS, mounts a nav toggle, persists the choice.
   ============================================================ */
(function () {
  var KEY = "glassTheme";
  var saved = false;
  try { saved = localStorage.getItem(KEY) === "1"; } catch (e) {}

  // Apply class as early as possible to reduce flash.
  document.documentElement.classList.toggle("glass", saved);

  // ---- inject styles ----
  var css = `
  /* toggle button */
  .theme-tog{margin-left:14px;display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 13px;border-radius:999px;border:1px solid var(--line-strong);background:var(--gold-soft);color:var(--gold);font-family:var(--mono);font-size:10px;letter-spacing:.13em;text-transform:uppercase;cursor:pointer;transition:.2s;white-space:nowrap;}
  .theme-tog:hover{background:rgba(212,175,55,.16);}
  .theme-tog svg{width:15px;height:15px;flex-shrink:0;}
  .theme-tog.on{background:var(--gold);color:#0b0d11;border-color:var(--gold);}
  @media(max-width:760px){.theme-tog{position:fixed;top:14px;right:64px;z-index:60;height:32px;}}

  /* ===== Liquid Glass theme ===== */
  html.glass{
    --bg:#e9eef7;
    --surface:rgba(255,255,255,.55);
    --surface-2:rgba(255,255,255,.42);
    --ink:#0e1726;
    --muted:#4a5a72;
    --line:rgba(90,120,160,.22);
    --line-strong:rgba(90,120,160,.40);
    --gold:#a8730d;
    --gold-2:#c79a2e;
    --gold-soft:rgba(168,115,13,.10);
  }
  html.glass body{
    color:var(--ink);
    background:
      radial-gradient(820px 520px at 10% 6%, rgba(120,170,255,.42), transparent 60%),
      radial-gradient(720px 520px at 90% 8%, rgba(255,180,130,.34), transparent 60%),
      radial-gradient(760px 640px at 50% 104%, rgba(180,150,255,.34), transparent 60%),
      linear-gradient(160deg,#eef3fb,#e3eaf6) !important;
    background-attachment:fixed !important;
  }
  html.glass .nav{
    background:rgba(255,255,255,.5) !important;
    -webkit-backdrop-filter:blur(18px) saturate(160%);
    backdrop-filter:blur(18px) saturate(160%);
    border-bottom:1px solid rgba(255,255,255,.6);
  }
  html.glass .card,
  html.glass .cmethod,
  html.glass .edu-card,
  html.glass .badge-card,
  html.glass .entry,
  html.glass .entry-list > *,
  html.glass .patent-card,
  html.glass .pj-card,
  html.glass .proj,
  html.glass .book-band,
  html.glass .frontier-card,
  html.glass .mentor,
  html.glass .mentor-card,
  html.glass .fld input,
  html.glass .fld select,
  html.glass .fld textarea,
  html.glass input,
  html.glass select,
  html.glass textarea,
  html.glass .cert-modal-inner{
    background:rgba(255,255,255,.55) !important;
    -webkit-backdrop-filter:blur(16px) saturate(155%);
    backdrop-filter:blur(16px) saturate(155%);
    border:1px solid rgba(255,255,255,.65);
    box-shadow:0 10px 34px rgba(60,90,140,.14);
  }
  html.glass .book-band::before{opacity:.4;}
  /* text & headings for readability */
  html.glass h1,html.glass h2,html.glass h3,html.glass h4,
  html.glass .edu-deg,html.glass .edu-degree,html.glass .hp-name{color:#0e1726 !important;}
  html.glass .brand{color:var(--ink);}
  html.glass .nav a{color:#2a3650;}
  html.glass .nav a:hover,html.glass .nav a.active{color:var(--gold);}
  html.glass .mobile{background:rgba(255,255,255,.85) !important;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);}
  html.glass .mobile a{color:#2a3650;}
  /* keep gold accents */
  html.glass .hl,html.glass .mk,html.glass .eyebrow,html.glass .gold,html.glass .l2{color:var(--gold) !important;}
  html.glass .to-top{color:#1a1206;}
  html.glass ::selection{background:rgba(168,115,13,.25);color:#0e1726;}
  /* profile portrait: drop the frame & blend the photo into the theme */
  html.glass .hp-frame{background:transparent !important;border:none !important;box-shadow:none !important;padding:0 !important;}
  html.glass .hp-frame::before{display:none !important;}
  html.glass .hp-photo{border:none !important;border-radius:0 !important;overflow:visible !important;background:transparent !important;box-shadow:none !important;}
  html.glass .hp-photo img{border:none !important;border-radius:0 !important;mix-blend-mode:multiply;}
  `;
  var st = document.createElement("style");
  st.id = "glass-theme-style";
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  // ---- mount toggle button ----
  var DROP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3z"/><path d="M14.5 14a2.5 2.5 0 0 1-2.5 2.5" opacity=".6"/></svg>';

  function mount() {
    if (document.querySelector(".theme-tog")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-tog" + (saved ? " on" : "");
    btn.setAttribute("aria-pressed", saved ? "true" : "false");
    btn.title = "Toggle Liquid Glass theme";
    btn.innerHTML = DROP + "<span>Glass</span>";
    btn.addEventListener("click", function () {
      var on = !document.documentElement.classList.contains("glass");
      document.documentElement.classList.toggle("glass", on);
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      try { localStorage.setItem(KEY, on ? "1" : "0"); } catch (e) {}
    });
    var navin = document.querySelector(".nav-in");
    if (navin) {
      navin.appendChild(btn);
    } else {
      btn.style.position = "fixed";
      btn.style.top = "16px";
      btn.style.right = "16px";
      btn.style.zIndex = "90";
      document.body.appendChild(btn);
    }
  }
  if (document.readyState !== "loading") mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
