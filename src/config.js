// config.js
const nodeIsProduction = process.env.NODE_ENV === 'production';
export const runtimeConfig =
  typeof window !== 'undefined'
    ? {
        // client
        META_TITLE: window?.env?.META_TITLE,
        META_DESCRIPTION: window?.env?.META_DESCRIPTION,
        META_AUTHOR: window?.env?.META_AUTHOR,
        META_KEYWORDS: window?.env?.META_KEYWORDS,
        META_INDEX_STATUS: window?.env?.META_INDEX_STATUS,
        LANG: window?.env?.LANG,
        GA_TRACKING_ID: window?.env?.GA_TRACKING_ID,
        UMAMI_WEBSITE_ID: window?.env?.UMAMI_WEBSITE_ID,
        SKIP_HEALTH_CHECK_LOGS: window?.env?.SKIP_HEALTH_CHECK_LOGS,
        THEME: window?.env?.THEME,
        FAVICON_URL: window?.env?.FAVICON_URL,
        AVATAR_URL: window?.env?.AVATAR_URL,
        AVATAR_SIZE: window?.env?.AVATAR_SIZE,
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
        BLUESKY: window?.env?.BLUESKY,
        BUYMEACOFFEE: window?.env?.BUYMEACOFFEE,
        GITLAB: window?.env?.GITLAB,
        PATREON: window?.env?.PATREON,
        DEVTO: window?.env?.DEVTO,
        UMAMI_APP_URL: window?.env?.UMAMI_APP_URL,
        UMAMI_SCRIPT_NAME: window?.env?.UMAMI_SCRIPT_NAME,
        BUTTON_ORDER: window?.env?.BUTTON_ORDER,
        PAYPAL: window?.env?.PAYPAL,
        SLACK: window?.env?.SLACK,
        CUSTOM_BUTTON_TEXT: window?.env?.CUSTOM_BUTTON_TEXT,
        CUSTOM_BUTTON_URL: window?.env?.CUSTOM_BUTTON_URL,
        CUSTOM_BUTTON_COLOR: window?.env?.CUSTOM_BUTTON_COLOR,
        CUSTOM_BUTTON_TEXT_COLOR: window?.env?.CUSTOM_BUTTON_TEXT_COLOR,
        CUSTOM_BUTTON_ALT_TEXT: window?.env?.CUSTOM_BUTTON_ALT_TEXT,
        CUSTOM_BUTTON_NAME: window?.env?.CUSTOM_BUTTON_NAME,
        CUSTOM_BUTTON_ICON: window?.env?.CUSTOM_BUTTON_ICON,
        STACKOVERFLOW: window?.env?.STACKOVERFLOW,
        LASTFM: window?.env?.LASTFM,
        GITEA: window?.env?.GITEA,
        POLYWORK: window?.env?.POLYWORK,
        SIGNAL: window?.env?.SIGNAL,
        UNTAPPD: window?.env?.UNTAPPD,
        BUTTON_TARGET: window?.env?.BUTTON_TARGET,
        INSTANTGAMING: window?.env?.INSTANTGAMING,
        OG_SITE_NAME: window?.env?.OG_SITE_NAME,
        OG_TITLE: window?.env?.OG_TITLE,
        OG_DESCRIPTION: window?.env?.OG_DESCRIPTION,
        OG_URL: window?.env?.OG_URL,
        OG_IMAGE: window?.env?.OG_IMAGE,
        OG_IMAGE_WIDTH: window?.env?.OG_IMAGE_WIDTH,
        OG_IMAGE_HEIGHT: window?.env?.OG_IMAGE_HEIGHT,
        TWITTER_TITLE: window?.env?.TWITTER_TITLE,
        TWITTER_DESCRIPTION: window?.env?.TWITTER_DESCRIPTION,
        TWITTER_CARD: window?.env?.TWITTER_CARD,
        TWITTER_IMAGE: window?.env?.TWITTER_IMAGE,
        TWITTER_SITE: window?.env?.TWITTER_SITE,
        TWITTER_CREATOR: window?.env?.TWITTER_CREATOR,
        GHOST: window?.env?.GHOST,
        TRAKT: window?.env?.TRAKT,
        CASHAPP: window?.env?.CASHAPP,
        TEESPRING: window?.env?.TEESPRING,
        XING: window?.env?.XING,
        KEYBASE: window?.env?.KEYBASE,
        ONLYFANS: window?.env?.ONLYFANS,
        SESSION: window?.env?.SESSION,
        THREEMA: window?.env?.THREEMA,
        STREAMLABS: window?.env?.STREAMLABS,
        PRIVATEBIN: window?.env?.PRIVATEBIN,
        AMAZON_AFFILIATE: window?.env?.AMAZON_AFFILIATE,
        AMAZON_WISHLIST: window?.env?.AMAZON_WISHLIST,
        APPLE_MUSIC: window?.env?.APPLE_MUSIC,
        YOUTUBE_MUSIC: window?.env?.YOUTUBE_MUSIC,
        VENMO: window?.env?.VENMO,
        STATUS: window?.env?.STATUS,
        MATRIX: window?.env?.MATRIX,
        ANILIST: window?.env?.ANILIST,
        GITBUCKET: window?.env?.GITBUCKET,
        SHAZAM: window?.env?.SHAZAM,
        FLICKR: window?.env?.FLICKR,
        TPDB: window?.env?.TPDB,
        OSU: window?.env?.OSU,
        LINE: window?.env?.LINE,
        KAKAOTALK: window?.env?.KAKAOTALK,
        DESIGNBYHUMANS: window?.env?.DESIGNBYHUMANS,
        VERO: window?.env?.VERO,
        DOCKERHUB: window?.env?.DOCKERHUB,
        MYANIMELIST: window?.env?.MYANIMELIST,
        MATOMO_URL: window?.env?.MATOMO_URL,
        MATOMO_SITE_ID: window?.env?.MATOMO_SITE_ID,
        PLAUSIBLE_URL: window?.env?.PLAUSIBLE_URL,
        PLAUSIBLE_DATA_API: window?.env?.PLAUSIBLE_DATA_API,
        PLAUSIBLE_DATA_DOMAIN: window?.env?.PLAUSIBLE_DATA_DOMAIN,
        SHARE: window?.env?.SHARE,
        DROP_SHADOW: window?.env?.DROP_SHADOW,
        FIVEHUNDREDPX: window?.env?.FIVEHUNDREDPX,
        JETPHOTOS: window?.env?.JETPHOTOS,
        THEME_OS: window?.env?.THEME_OS,
        SUBSTACK: window?.env?.SUBSTACK,
        PRINTABLES: window?.env?.PRINTABLES,
        SERIALIZD: window?.env?.SERIALIZD,
        THREADS: window?.env?.THREADS,
        LEMMY: window?.env?.LEMMY,
        PIXELFED: window?.env?.PIXELFED,
        VRCHAT: window?.env?.VRCHAT,
        X: window?.env?.X,
        CODEWARS: window?.env?.CODEWARS,
        APPLE_PODCASTS: window?.env?.APPLE_PODCASTS,
        GOOGLE_PODCASTS: window?.env?.GOOGLE_PODCASTS,
        POCKET_CASTS: window?.env?.POCKET_CASTS,
        OVERCAST: window?.env?.OVERCAST,
        RSS: window?.env?.RSS,
        AUDIUS: window?.env?.AUDIUS,
        BANDCAMP: window?.env?.BANDCAMP,
        FORGEJO: window?.env?.FORGEJO,
        ORCID: window?.env?.ORCID,
        CREDLY: window?.env?.CREDLY,
        SEMANTICSCHOLAR: window?.env?.SEMANTICSCHOLAR,
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
        META_KEYWORDS: nodeIsProduction
          ? process.env.META_KEYWORDS
          : process.env.RAZZLE_META_KEYWORDS,
        META_INDEX_STATUS: nodeIsProduction
          ? process.env.META_INDEX_STATUS
          : process.env.RAZZLE_META_INDEX_STATUS,
        LANG: nodeIsProduction ? process.env.LANG : process.env.RAZZLE_LANG,
        GA_TRACKING_ID: nodeIsProduction
          ? process.env.GA_TRACKING_ID
          : process.env.RAZZLE_GA_TRACKING_ID,
        UMAMI_WEBSITE_ID: nodeIsProduction
          ? process.env.UMAMI_WEBSITE_ID
          : process.env.RAZZLE_UMAMI_WEBSITE_ID,
        SKIP_HEALTH_CHECK_LOGS: nodeIsProduction
          ? process.env.SKIP_HEALTH_CHECK_LOGS
          : process.env.RAZZLE_SKIP_HEALTH_CHECK_LOGS,
        THEME: nodeIsProduction ? process.env.THEME : process.env.RAZZLE_THEME,
        FAVICON_URL: nodeIsProduction
          ? process.env.FAVICON_URL
          : process.env.RAZZLE_FAVICON_URL,
        AVATAR_URL: nodeIsProduction
          ? process.env.AVATAR_URL
          : process.env.RAZZLE_AVATAR_URL,
        AVATAR_SIZE: nodeIsProduction
          ? process.env.AVATAR_SIZE
          : process.env.RAZZLE_AVATAR_SIZE,
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
        BLUESKY: nodeIsProduction
          ? process.env.BLUESKY
          : process.env.RAZZLE_BLUESKY,
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
        UMAMI_APP_URL: nodeIsProduction
          ? process.env.UMAMI_APP_URL
          : process.env.RAZZLE_UMAMI_APP_URL,
        UMAMI_SCRIPT_NAME: nodeIsProduction
          ? process.env.UMAMI_SCRIPT_NAME
          : process.env.RAZZLE_UMAMI_SCRIPT_NAME,
        BUTTON_ORDER: nodeIsProduction
          ? process.env.BUTTON_ORDER
          : process.env.RAZZLE_BUTTON_ORDER,
        PAYPAL: nodeIsProduction
          ? process.env.PAYPAL
          : process.env.RAZZLE_PAYPAL,
        SLACK: nodeIsProduction ? process.env.SLACK : process.env.RAZZLE_SLACK,
        CUSTOM_BUTTON_TEXT: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_TEXT
          : process.env.RAZZLE_CUSTOM_BUTTON_TEXT,
        CUSTOM_BUTTON_URL: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_URL
          : process.env.RAZZLE_CUSTOM_BUTTON_URL,
        CUSTOM_BUTTON_COLOR: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_COLOR
          : process.env.RAZZLE_CUSTOM_BUTTON_COLOR,
        CUSTOM_BUTTON_TEXT_COLOR: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_TEXT_COLOR
          : process.env.RAZZLE_CUSTOM_BUTTON_TEXT_COLOR,
        CUSTOM_BUTTON_ALT_TEXT: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_ALT_TEXT
          : process.env.RAZZLE_CUSTOM_BUTTON_ALT_TEXT,
        CUSTOM_BUTTON_NAME: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_NAME
          : process.env.RAZZLE_CUSTOM_BUTTON_NAME,
        CUSTOM_BUTTON_ICON: nodeIsProduction
          ? process.env.CUSTOM_BUTTON_ICON
          : process.env.RAZZLE_CUSTOM_BUTTON_ICON,
        STACKOVERFLOW: nodeIsProduction
          ? process.env.STACKOVERFLOW
          : process.env.RAZZLE_STACKOVERFLOW,
        LASTFM: nodeIsProduction
          ? process.env.LASTFM
          : process.env.RAZZLE_LASTFM,
        GITEA: nodeIsProduction ? process.env.GITEA : process.env.RAZZLE_GITEA,
        POLYWORK: nodeIsProduction
          ? process.env.POLYWORK
          : process.env.RAZZLE_POLYWORK,
        SIGNAL: nodeIsProduction
          ? process.env.SIGNAL
          : process.env.RAZZLE_SIGNAL,
        UNTAPPD: nodeIsProduction
          ? process.env.UNTAPPD
          : process.env.RAZZLE_UNTAPPD,
        BUTTON_TARGET: nodeIsProduction
          ? process.env.BUTTON_TARGET
          : process.env.RAZZLE_BUTTON_TARGET,
        INSTANTGAMING: nodeIsProduction
          ? process.env.INSTANTGAMING
          : process.env.RAZZLE_INSTANTGAMING,
        OG_SITE_NAME: nodeIsProduction
          ? process.env.OG_SITE_NAME
          : process.env.RAZZLE_OG_SITE_NAME,
        OG_TITLE: nodeIsProduction
          ? process.env.OG_TITLE
          : process.env.RAZZLE_OG_TITLE,
        OG_DESCRIPTION: nodeIsProduction
          ? process.env.OG_DESCRIPTION
          : process.env.RAZZLE_OG_DESCRIPTION,
        OG_URL: nodeIsProduction
          ? process.env.OG_URL
          : process.env.RAZZLE_OG_URL,
        OG_IMAGE: nodeIsProduction
          ? process.env.OG_IMAGE
          : process.env.RAZZLE_OG_IMAGE,
        OG_IMAGE_WIDTH: nodeIsProduction
          ? process.env.OG_IMAGE_WIDTH
          : process.env.RAZZLE_OG_IMAGE_WIDTH,
        OG_IMAGE_HEIGHT: nodeIsProduction
          ? process.env.OG_IMAGE_HEIGHT
          : process.env.RAZZLE_OG_IMAGE_HEIGHT,
        TWITTER_TITLE: nodeIsProduction
          ? process.env.TWITTER_TITLE
          : process.env.RAZZLE_TWITTER_TITLE,
        TWITTER_DESCRIPTION: nodeIsProduction
          ? process.env.TWITTER_DESCRIPTION
          : process.env.RAZZLE_TWITTER_DESCRIPTION,
        TWITTER_CARD: nodeIsProduction
          ? process.env.TWITTER_CARD
          : process.env.RAZZLE_TWITTER_CARD,
        TWITTER_IMAGE: nodeIsProduction
          ? process.env.TWITTER_IMAGE
          : process.env.RAZZLE_TWITTER_IMAGE,
        TWITTER_SITE: nodeIsProduction
          ? process.env.TWITTER_SITE
          : process.env.RAZZLE_TWITTER_SITE,
        TWITTER_CREATOR: nodeIsProduction
          ? process.env.TWITTER_CREATOR
          : process.env.RAZZLE_TWITTER_CREATOR,
        GHOST: nodeIsProduction ? process.env.GHOST : process.env.RAZZLE_GHOST,
        TRAKT: nodeIsProduction ? process.env.TRAKT : process.env.RAZZLE_TRAKT,
        CASHAPP: nodeIsProduction
          ? process.env.CASHAPP
          : process.env.RAZZLE_CASHAPP,
        TEESPRING: nodeIsProduction
          ? process.env.TEESPRING
          : process.env.RAZZLE_TEESPRING,
        XING: nodeIsProduction ? process.env.XING : process.env.RAZZLE_XING,
        KEYBASE: nodeIsProduction
          ? process.env.KEYBASE
          : process.env.RAZZLE_KEYBASE,
        ONLYFANS: nodeIsProduction
          ? process.env.ONLYFANS
          : process.env.RAZZLE_ONLYFANS,
        SESSION: nodeIsProduction
          ? process.env.SESSION
          : process.env.RAZZLE_SESSION,
        THREEMA: nodeIsProduction
          ? process.env.THREEMA
          : process.env.RAZZLE_THREEMA,
        STREAMLABS: nodeIsProduction
          ? process.env.STREAMLABS
          : process.env.RAZZLE_STREAMLABS,
        PRIVATEBIN: nodeIsProduction
          ? process.env.PRIVATEBIN
          : process.env.RAZZLE_PRIVATEBIN,
        AMAZON_AFFILIATE: nodeIsProduction
          ? process.env.AMAZON_AFFILIATE
          : process.env.RAZZLE_AMAZON_AFFILIATE,
        AMAZON_WISHLIST: nodeIsProduction
          ? process.env.AMAZON_WISHLIST
          : process.env.RAZZLE_AMAZON_WISHLIST,
        APPLE_MUSIC: nodeIsProduction
          ? process.env.APPLE_MUSIC
          : process.env.RAZZLE_APPLE_MUSIC,
        YOUTUBE_MUSIC: nodeIsProduction
          ? process.env.YOUTUBE_MUSIC
          : process.env.RAZZLE_YOUTUBE_MUSIC,
        VENMO: nodeIsProduction ? process.env.VENMO : process.env.RAZZLE_VENMO,
        STATUS: nodeIsProduction
          ? process.env.STATUS
          : process.env.RAZZLE_STATUS,
        MATRIX: nodeIsProduction
          ? process.env.MATRIX
          : process.env.RAZZLE_MATRIX,
        ANILIST: nodeIsProduction
          ? process.env.ANILIST
          : process.env.RAZZLE_ANILIST,
        GITBUCKET: nodeIsProduction
          ? process.env.GITBUCKET
          : process.env.RAZZLE_GITBUCKET,
        SHAZAM: nodeIsProduction
          ? process.env.SHAZAM
          : process.env.RAZZLE_SHAZAM,
        FLICKR: nodeIsProduction
          ? process.env.FLICKR
          : process.env.RAZZLE_FLICKR,
        TPDB: nodeIsProduction ? process.env.TPDB : process.env.RAZZLE_TPDB,
        OSU: nodeIsProduction ? process.env.OSU : process.env.RAZZLE_OSU,
        LINE: nodeIsProduction ? process.env.LINE : process.env.RAZZLE_LINE,
        KAKAOTALK: nodeIsProduction
          ? process.env.KAKAOTALK
          : process.env.RAZZLE_KAKAOTALK,
        DESIGNBYHUMANS: nodeIsProduction
          ? process.env.DESIGNBYHUMANS
          : process.env.RAZZLE_DESIGNBYHUMANS,
        VERO: nodeIsProduction ? process.env.VERO : process.env.RAZZLE_VERO,
        DOCKERHUB: nodeIsProduction
          ? process.env.DOCKERHUB
          : process.env.RAZZLE_DOCKERHUB,
        MYANIMELIST: nodeIsProduction
          ? process.env.MYANIMELIST
          : process.env.RAZZLE_MYANIMELIST,
        MATOMO_URL: nodeIsProduction
          ? process.env.MATOMO_URL
          : process.env.RAZZLE_MATOMO_URL,
        MATOMO_SITE_ID: nodeIsProduction
          ? process.env.MATOMO_SITE_ID
          : process.env.RAZZLE_MATOMO_SITE_ID,
        PLAUSIBLE_URL: nodeIsProduction
          ? process.env.PLAUSIBLE_URL
          : process.env.RAZZLE_PLAUSIBLE_URL,
        PLAUSIBLE_DATA_API: nodeIsProduction
          ? process.env.PLAUSIBLE_DATA_API
          : process.env.RAZZLE_PLAUSIBLE_DATA_API,
        PLAUSIBLE_DATA_DOMAIN: nodeIsProduction
          ? process.env.PLAUSIBLE_DATA_DOMAIN
          : process.env.RAZZLE_PLAUSIBLE_DATA_DOMAIN,
        SHARE: nodeIsProduction ? process.env.SHARE : process.env.RAZZLE_SHARE,
        DROP_SHADOW: nodeIsProduction
          ? process.env.DROP_SHADOW
          : process.env.RAZZLE_DROP_SHADOW,
        FIVEHUNDREDPX: nodeIsProduction
          ? process.env.FIVEHUNDREDPX
          : process.env.RAZZLE_FIVEHUNDREDPX,
        JETPHOTOS: nodeIsProduction
          ? process.env.JETPHOTOS
          : process.env.RAZZLE_JETPHOTOS,
        THEME_OS: nodeIsProduction
          ? process.env.THEME_OS
          : process.env.RAZZLE_THEME_OS,
        SUBSTACK: nodeIsProduction
          ? process.env.SUBSTACK
          : process.env.RAZZLE_SUBSTACK,
        PRINTABLES: nodeIsProduction
          ? process.env.PRINTABLES
          : process.env.RAZZLE_PRINTABLES,
        SERIALIZD: nodeIsProduction
          ? process.env.SERIALIZD
          : process.env.RAZZLE_SERIALIZD,
        THREADS: nodeIsProduction
          ? process.env.THREADS
          : process.env.RAZZLE_THREADS,
        LEMMY: nodeIsProduction ? process.env.LEMMY : process.env.RAZZLE_LEMMY,
        PIXELFED: nodeIsProduction
          ? process.env.PIXELFED
          : process.env.RAZZLE_PIXELFED,
        VRCHAT: nodeIsProduction
          ? process.env.VRCHAT
          : process.env.RAZZLE_VRCHAT,
        X: nodeIsProduction ? process.env.X : process.env.RAZZLE_X,
        CODEWARS: nodeIsProduction
          ? process.env.CODEWARS
          : process.env.RAZZLE_CODEWARS,
        APPLE_PODCASTS: nodeIsProduction
          ? process.env.APPLE_PODCASTS
          : process.env.RAZZLE_APPLE_PODCASTS,
        GOOGLE_PODCASTS: nodeIsProduction
          ? process.env.GOOGLE_PODCASTS
          : process.env.RAZZLE_GOOGLE_PODCASTS,
        POCKET_CASTS: nodeIsProduction
          ? process.env.POCKET_CASTS
          : process.env.RAZZLE_POCKET_CASTS,
        OVERCAST: nodeIsProduction
          ? process.env.OVERCAST
          : process.env.RAZZLE_OVERCAST,
        RSS: nodeIsProduction ? process.env.RSS : process.env.RAZZLE_RSS,
        AUDIUS: nodeIsProduction
          ? process.env.AUDIUS
          : process.env.RAZZLE_AUDIUS,
        BANDCAMP: nodeIsProduction
          ? process.env.BANDCAMP
          : process.env.RAZZLE_BANDCAMP,
        FORGEJO: nodeIsProduction
          ? process.env.FORGEJO
          : process.env.RAZZLE_FORGEJO,
        ORCID: nodeIsProduction ? process.env.ORCID : process.env.RAZZLE_ORCID,
        CREDLY: nodeIsProduction
          ? process.env.CREDLY
          : process.env.RAZZLE_CREDLY,
        SEMANTICSCHOLAR: nodeIsProduction
          ? process.env.SEMANTICSCHOLAR
          : process.env.RAZZLE_SEMANTICSCHOLAR,
      };
