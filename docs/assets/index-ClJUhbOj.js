(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const p=[{name:"photo",url:"https://photo.pages.recyclerobot.com",description:"WebGL image editor."},{name:"print",url:"https://print.pages.recyclerobot.com",description:"WebGL print / InDesign-alike editor."},{name:"epc",url:"https://epc.pages.recyclerobot.com",description:"EPC QR code generator — Wero, Payconiq and other EU banking apps."},{name:"command-center",url:"https://github.com/recyclerobot/command-center",description:"Native macOS app — small utilities for day-to-day workflows."}],a=document.querySelector("#app");if(!a)throw new Error("#app root not found");const i=t=>t.replace(/^https?:\/\//,"").replace(/\/$/,""),l=t=>String(t).padStart(2,"0");a.innerHTML=`
  <header>
    <h1 class="title">recyclerobot<span class="accent">/os</span><span class="cursor" aria-hidden="true"></span></h1>
    <span class="meta">v${new Date().toISOString().slice(0,10)}</span>
  </header>

  <p class="label">Apps</p>
  <ul class="apps">
    ${p.map((t,o)=>`
      <li class="app">
        <span class="app__id">${l(o+1)}</span>
        <div>
          <div class="app__row">
            <span class="app__name">
              <a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.name}</a>
            </span>
            <span class="app__host">${i(t.url)}</span>
          </div>
          <p class="app__desc">${t.description}</p>
        </div>
      </li>`).join("")}
  </ul>

  <footer>
    <a href="https://github.com/recyclerobot/os" target="_blank" rel="noopener noreferrer">source</a>
  </footer>
`;
