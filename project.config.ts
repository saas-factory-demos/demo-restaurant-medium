// 由 SaaS Factory 自動生成，請勿手動編輯（升級時會被覆蓋）。
// 客戶：示範餐廳客戶（橙光小館）
// subdomain：demo-restaurant-medium

export const projectConfig = {
  client: {
  "clientName": "示範餐廳客戶",
  "brandName": "橙光小館",
  "contactEmail": "demo-restaurant@saas-factory.dev",
  "subdomain": "demo-restaurant-medium"
},
  siteTypes: {
  "enabled": [
    "cms",
    "lp"
  ],
  "lpCount": 1
},
  modules: {
    enabled: [
  "cms.about",
  "cms.contact",
  "cms.locations",
  "lp.sticky-cta"
] as const,
  },
  integrations: {
  "payments": [
    "newebpay"
  ],
  "shipping": [],
  "invoice": {
    "providers": [
      "ezpay"
    ],
    "mode": "trigger"
  },
  "notifications": [
    "email",
    "line"
  ]
},
  theme: {
  "presetId": "culinary-warmth",
  "primaryColor": "#c9572c",
  "accentColor": "#f0c674",
  "radius": "soft",
  "font": "serif",
  "density": "normal",
  "darkMode": "light",
  "motionLevel": 3
},
  i18n: {
  "defaultLocale": "zh-TW",
  "enabledLocales": [
    "zh-TW"
  ],
  "multiCurrency": false,
  "multiTimezone": false
},
  deploy: {
  "target": "vercel",
  "repoName": "demo-restaurant-medium",
  "environments": [
    "production"
  ],
  "privateRepo": false
},
} as const;

export type ProjectConfig = typeof projectConfig;
