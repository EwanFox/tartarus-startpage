let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-5.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: "#fe640b",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "outlook",
              url: "https://outlook.office365.com/mail/",
              icon: "mail",
              icon_color: "#40a02b",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: "#fe640b",
            },
            {
              name: "iCloud",
              url: "https://drive.google.com/drive/home",
              icon: "cloud",
              icon_color: "#1e66f5",
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "bbc",
              url: "https://www.bbc.com/news",
              icon: "news",
              icon_color: "#40a02b",
            },
            {
              name: "cnn",
              url: "https://www.cnn.com/",
              icon: "badge-filled",
              icon_color: "#fe640b",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#40a02b",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#d20f39",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: "#40a02b",
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#fe640b",
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: "#d20f39",
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: "#1e66f5",
            },
          ],
        }
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "instagram",
              url: "https://instagram.com",
              icon: "brand-instagram",
              icon_color: "#40a02b",
            },
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: "#fe640b",
            }
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#fe640b",
            },
            {
              name: "netflix",
              url: "https://netflix.com",
              icon: "brand-netflix",
              icon_color: "#d20f39",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
 // const CONFIG = new Config(default_config);
 
 (function() {
   var css = document.createElement('link');
   css.href = 'src/css/tabler-icons.min.css';
   css.rel = 'stylesheet';
   css.type = 'text/css';
   if (!CONFIG.config.localIcons)
     document.getElementsByTagName('head')[0].appendChild(css);
 })();
