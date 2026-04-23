(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const _=[{id:"01",name:"photo",url:"https://photo.pages.recyclerobot.com",description:"WebGL image editor.",tag:"web"},{id:"02",name:"print",url:"https://print.pages.recyclerobot.com",description:"WebGL print / InDesign-alike editor.",tag:"web"},{id:"03",name:"epc",url:"https://epc.pages.recyclerobot.com",description:"EPC QR code generator — compatible with Wero, Payconiq and other EU banking apps.",tag:"web"},{id:"04",name:"command-center",url:"https://github.com/recyclerobot/command-center",description:"Native macOS app — small utilities and day-to-day workflow improvements.",tag:"repo"}],c=String.raw`
                            _                    _           _
  _ __ ___  ___ _   _  ___| | ___ _ __ ___  | |__   ___ | |_
 | '__/ _ \/ __| | | |/ __| |/ _ \ '__/ _ \| '_ \ / _ \| __|
 | | |  __/ (__| |_| | (__| |  __/ | | (_) | |_) | (_) | |_
 |_|  \___|\___|\__, |\___|_|\___|_|  \___/|_.__/ \___/ \__|
                |___/                /os
`,i=new Date().toISOString().slice(0,10),p=document.querySelector("#app");if(!p)throw new Error("#app root not found");p.innerHTML=`
  <div class="term" role="region" aria-label="recyclerobot/os terminal">
    <div class="term__bar">
      <span class="term__dot term__dot--live" aria-hidden="true"></span>
      <span>recyclerobot@os: ~</span>
    </div>
    <div class="term__body">
      <pre class="ascii" aria-hidden="true">${c}</pre>
      <p class="meta">
        <span>build ${i}</span>
        <span>tty/0</span>
        <span>uptime: forever</span>
      </p>

      <p>
        <span class="prompt"><span class="prompt__user">recyclerobot</span>@<span class="prompt__user">os</span>:<span class="prompt__path">~</span>$</span>
        ls -la /apps
      </p>

      <p class="section-title">// available apps</p>
      <ul class="apps">
        ${_.map(r=>`
          <li class="app">
            <span class="app__id">[${r.id}]</span>
            <span class="app__main">
              <a href="${r.url}" target="_blank" rel="noopener noreferrer">
                <span class="app__name">${r.name}</span><span class="app__url">${r.url.replace(/^https?:\/\//,"")}</span>
              </a>
              <span class="app__desc">${r.description}</span>
            </span>
            <span class="app__tag app__tag--${r.tag==="repo"?"ext":"web"}">${r.tag}</span>
          </li>`).join("")}
      </ul>

      <p style="margin-top:1.5rem">
        <span class="prompt"><span class="prompt__user">recyclerobot</span>@<span class="prompt__user">os</span>:<span class="prompt__path">~</span>$</span>
        <span class="cursor" aria-hidden="true">&nbsp;</span>
      </p>

      <footer>
        // source: <a href="https://github.com/recyclerobot/os" style="color:var(--link)">github.com/recyclerobot/os</a>
      </footer>
    </div>
  </div>
`;
