import "./style.css";

type App = {
  name: string;
  url: string;
  description: string;
};

const apps: App[] = [
  {
    name: "photo",
    url: "https://photo.pages.recyclerobot.com",
    description: "WebGL image editor.",
  },
  {
    name: "print",
    url: "https://print.pages.recyclerobot.com",
    description: "WebGL print / InDesign-alike editor.",
  },
  {
    name: "video",
    url: "https://video.pages.recyclerobot.com",
    description: "WebGL video editor in the browser.",
  },
  {
    name: "text",
    url: "https://text.pages.recyclerobot.com",
    description: "Browser text editor with Word, Pages and Markdown support.",
  },
  {
    name: "epc",
    url: "https://epc.pages.recyclerobot.com",
    description:
      "EPC QR code generator — Wero, Payconiq and other EU banking apps.",
  },
  {
    name: "command-center",
    url: "https://github.com/recyclerobot/command-center",
    description: "Native macOS app — small utilities for day-to-day workflows.",
  },
];

const root = document.querySelector<HTMLDivElement>("#app");
if (!root) throw new Error("#app root not found");

const host = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const pad = (n: number) => String(n).padStart(2, "0");

root.innerHTML = `
  <header>
    <h1 class="title">recyclerobot<span class="accent">/os</span><span class="cursor" aria-hidden="true"></span></h1>
    <span class="meta">v${new Date().toISOString().slice(0, 10)}</span>
  </header>

  <p class="label">Apps</p>
  <ul class="apps">
    ${apps
      .map(
        (a, i) => `
      <li class="app">
        <a class="app__link" href="${a.url}" target="_blank" rel="noopener noreferrer">
          <span class="app__id">${pad(i + 1)}</span>
          <span class="app__body">
            <span class="app__row">
              <span class="app__name">${a.name}</span>
              <span class="app__host">${host(a.url)}</span>
            </span>
            <span class="app__desc">${a.description}</span>
          </span>
        </a>
      </li>`,
      )
      .join("")}
  </ul>

  <footer>
    <a href="https://github.com/recyclerobot/os" target="_blank" rel="noopener noreferrer">source</a>
  </footer>
`;
