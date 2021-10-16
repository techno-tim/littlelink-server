// config.js
const nodeIsProduction = process.env.NODE_ENV === 'production';
export const runtimeConfig =
  typeof window !== 'undefined'
    ? {
        // client
        META_TITLE: window?.env?.META_TITLE,
        META_DESCRIPTION: window?.env?.META_DESCRIPTION,
        META_AUTHOR: window?.env?.META_AUTHOR,
        META_INDEX_STATUS: window?.env?.META_INDEX_STATUS,
        LANG: window?.env?.LANG,
        GA_TRACKING_ID: window?.env?.GA_TRACKING_ID,
        THEME: window?.env?.THEME,
        FAVICON_URL: window?.env?.FAVICON_URL,
        AVATAR_URL: window?.env?.AVATAR_URL,
        AVATAR_ALT: window?.env?.AVATAR_ALT,
        AVATAR_2X_URL: window?.env?.AVATAR_2X_URL,
        NAME: window?.env?.NAME,
        BIO: window?.env?.BIO,
        GITHUB: window?.env?.GITHUB,
        TWITTER: window?.env?.TWITTER,
        INSTAGRAM: window?.env?.INSTAGRAM,
        FACEBOOK: window?.env?.FACEBOOK,
        FACEBOOK_MESSENGER: window?.env?.FACEBOOK_MESSENGER,
        LINKED_IN: window?.env?.LINKED_IN,
        YOUTUBE: window?.env?.YOUTUBE,
        DISCORD: window?.env?.DISCORD,
        TWITCH: window?.env?.TWITCH,
        PRODUCT_HUNT: window?.env?.PRODUCT_HUNT,
        SNAPCHAT: window?.env?.SNAPCHAT,
        SPOTIFY: window?.env?.SPOTIFY,
        REDDIT: window?.env?.REDDIT,
        MEDIUM: window?.env?.MEDIUM,
        PINTEREST: window?.env?.PINTEREST,
        TIKTOK: window?.env?.TIKTOK,
        EMAIL: window?.env?.EMAIL,
        EMAIL_TEXT: window?.env?.EMAIL_TEXT,
        EMAIL_ALT: window?.env?.EMAIL_ALT,
        EMAIL_ALT_TEXT: window?.env?.EMAIL_ALT_TEXT,
        SOUND_CLOUD: window?.env?.SOUND_CLOUD,
        FIGMA: window?.env?.FIGMA,
        KIT: window?.env?.KIT,
        TELEGRAM: window?.env?.TELEGRAM,
        TUMBLR: window?.env?.TUMBLR,
        STEAM: window?.env?.STEAM,
        VIMEO: window?.env?.VIMEO,
        WORDPRESS: window?.env?.WORDPRESS,
        GOODREADS: window?.env?.GOODREADS,
        SKOOB: window?.env?.SKOOB,
        LETTERBOXD: window?.env?.LETTERBOXD,
        MASTODON: window?.env?.MASTODON,
        MICRO_BLOG: window?.env?.MICRO_BLOG,
        FOOTER: window?.env?.FOOTER,
        WHATSAPP: window?.env?.WHATSAPP,
        STRAVA: window?.env?.STRAVA,
        BUYMEACOFFEE: window?.env?.BUYMEACOFFEE,
        GITLAB: window?.env?.GITLAB,
        PATREON: window?.env?.PATREON,
        DEVTO: window?.env?.DEVTO,
      }
    : {
        // server
        META_TITLE: nodeIsProduction
          ? process.env.META_TITLE
          : process.env.RAZZLE_META_TITLE,
        META_DESCRIPTION: nodeIsProduction
          ? process.env.META_DESCRIPTION
          : process.env.RAZZLE_META_DESCRIPTION,
        META_AUTHOR: nodeIsProduction
          ? process.env.META_AUTHOR
          : process.env.RAZZLE_META_AUTHOR,
        META_INDEX_STATUS: nodeIsProduction
          ? process.env.META_INDEX_STATUS
          : process.env.RAZZLE_META_INDEX_STATUS,
        LANG: nodeIsProduction ? process.env.LANG : process.env.RAZZLE_LANG,
        GA_TRACKING_ID: nodeIsProduction
          ? process.env.GA_TRACKING_ID
          : process.env.RAZZLE_GA_TRACKING_ID,
        THEME: nodeIsProduction ? process.env.THEME : process.env.RAZZLE_THEME,
        FAVICON_URL: nodeIsProduction
          ? process.env.FAVICON_URL
          : process.env.RAZZLE_FAVICON_URL,
        AVATAR_URL: nodeIsProduction
          ? process.env.AVATAR_URL
          : process.env.RAZZLE_AVATAR_URL,
        AVATAR_ALT: nodeIsProduction
          ? process.env.AVATAR_ALT
          : process.env.RAZZLE_AVATAR_ALT,
        AVATAR_2X_URL: nodeIsProduction
          ? process.env.AVATAR_2X_URL
          : process.env.RAZZLE_AVATAR_2X_URL,
        NAME: nodeIsProduction ? process.env.NAME : process.env.RAZZLE_NAME,
        BIO: nodeIsProduction ? process.env.BIO : process.env.RAZZLE_BIO,
        GITHUB: nodeIsProduction
          ? process.env.GITHUB
          : process.env.RAZZLE_GITHUB,
        TWITTER: nodeIsProduction
          ? process.env.TWITTER
          : process.env.RAZZLE_TWITTER,
        DISCORD: nodeIsProduction
          ? process.env.DISCORD
          : process.env.RAZZLE_DISCORD,
        INSTAGRAM: nodeIsProduction
          ? process.env.INSTAGRAM
          : process.env.RAZZLE_INSTAGRAM,
        YOUTUBE: nodeIsProduction
          ? process.env.YOUTUBE
          : process.env.RAZZLE_YOUTUBE,
        TWITCH: nodeIsProduction
          ? process.env.TWITCH
          : process.env.RAZZLE_TWITCH,
        TIKTOK: nodeIsProduction
          ? process.env.TIKTOK
          : process.env.RAZZLE_TIKTOK,
        KIT: nodeIsProduction ? process.env.KIT : process.env.RAZZLE_KIT,
        FACEBOOK: nodeIsProduction
          ? process.env.FACEBOOK
          : process.env.RAZZLE_FACEBOOK,
        FACEBOOK_MESSENGER: nodeIsProduction
          ? process.env.FACEBOOK_MESSENGER
          : process.env.RAZZLE_FACEBOOK_MESSENGER,
        LINKED_IN: nodeIsProduction
          ? process.env.LINKED_IN
          : process.env.RAZZLE_LINKED_IN,
        PRODUCT_HUNT: nodeIsProduction
          ? process.env.PRODUCT_HUNT
          : process.env.RAZZLE_PRODUCT_HUNT,
        SNAPCHAT: nodeIsProduction
          ? process.env.SNAPCHAT
          : process.env.RAZZLE_SNAPCHAT,
        SPOTIFY: nodeIsProduction
          ? process.env.SPOTIFY
          : process.env.RAZZLE_SPOTIFY,
        REDDIT: nodeIsProduction
          ? process.env.REDDIT
          : process.env.RAZZLE_REDDIT,
        MEDIUM: nodeIsProduction
          ? process.env.MEDIUM
          : process.env.RAZZLE_MEDIUM,
        PINTEREST: nodeIsProduction
          ? process.env.PINTEREST
          : process.env.RAZZLE_PINTEREST,
        EMAIL: nodeIsProduction ? process.env.EMAIL : process.env.RAZZLE_EMAIL,
        EMAIL_TEXT: nodeIsProduction
          ? process.env.EMAIL_TEXT
          : process.env.RAZZLE_EMAIL_TEXT,
        EMAIL_ALT: nodeIsProduction
          ? process.env.EMAIL_ALT
          : process.env.RAZZLE_EMAIL_ALT,
        EMAIL_ALT_TEXT: nodeIsProduction
          ? process.env.EMAIL_ALT_TEXT
          : process.env.RAZZLE_EMAIL_ALT_TEXT,
        SOUND_CLOUD: nodeIsProduction
          ? process.env.SOUND_CLOUD
          : process.env.RAZZLE_SOUND_CLOUD,
        FIGMA: nodeIsProduction ? process.env.FIGMA : process.env.RAZZLE_FIGMA,
        TELEGRAM: nodeIsProduction
          ? process.env.TELEGRAM
          : process.env.RAZZLE_TELEGRAM,
        TUMBLR: nodeIsProduction
          ? process.env.TUMBLR
          : process.env.RAZZLE_TUMBLR,
        STEAM: nodeIsProduction ? process.env.STEAM : process.env.RAZZLE_STEAM,
        VIMEO: nodeIsProduction ? process.env.VIMEO : process.env.RAZZLE_VIMEO,
        WORDPRESS: nodeIsProduction
          ? process.env.WORDPRESS
          : process.env.RAZZLE_WORDPRESS,
        GOODREADS: nodeIsProduction
          ? process.env.GOODREADS
          : process.env.RAZZLE_GOODREADS,
        SKOOB: nodeIsProduction ? process.env.SKOOB : process.env.RAZZLE_SKOOB,
        LETTERBOXD: nodeIsProduction
          ? process.env.LETTERBOXD
          : process.env.RAZZLE_LETTERBOXD,
        MASTODON: nodeIsProduction
          ? process.env.MASTODON
          : process.env.RAZZLE_MASTODON,
        MICRO_BLOG: nodeIsProduction
          ? process.env.MICRO_BLOG
          : process.env.RAZZLE_MICRO_BLOG,
        FOOTER: nodeIsProduction
          ? process.env.FOOTER
          : process.env.RAZZLE_FOOTER,
        WHATSAPP: nodeIsProduction
          ? process.env.WHATSAPP
          : process.env.RAZZLE_WHATSAPP,
        STRAVA: nodeIsProduction
          ? process.env.STRAVA
          : process.env.RAZZLE_STRAVA,
        BUYMEACOFFEE: nodeIsProduction
          ? process.env.BUYMEACOFFEE
          : process.env.RAZZLE_BUYMEACOFFEE,
        GITLAB: nodeIsProduction
          ? process.env.GITLAB
          : process.env.RAZZLE_GITLAB,
        PATREON: nodeIsProduction
          ? process.env.PATREON
          : process.env.RAZZLE_PATREON,
        DEVTO: nodeIsProduction ? process.env.DEVTO : process.env.RAZZLE_DEVTO,
      };
