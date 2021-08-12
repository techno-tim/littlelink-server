# 🔗 LittleLink-Server

This project is based on the great work from [littlelink](https://github.com/sethcottle/littlelink)
It takes the same simple approach to a link page and hosts it within a nodeJS server containerized for you to use. Now, customizing `LittleLink` with `littlelink-server` is as easy as passing in some environment variables.


# 👇 What is LittleLink? 

![LittleLink](https://cdn.cottle.cloud/littlelink/social-circle.png)

LittleLink is a lightweight DIY alternative to services like [Linktree](https://linktr.ee)
and [many.link](https://www.google.com). LittleLink was built using [Skeleton](http://getskeleton.com/), a dead simple, responsive boilerplate—we just stripped out some additional code you wouldn't need and added in branded styles for popular services. 😊

![Themes](https://cdn.cottle.cloud/littlelink/themes.png)

LittleLink has more than 20 company button styles you can use and we'll be throwing more in soon. You'll also find a light and dark theme ready to go. Not a fan of the colors? Update `skeleton-light.css` or `skeleton-dark.css` to the HEX values of your choosing. 

![Performance](https://cdn.cottle.cloud/littlelink/performance.png)

Using [Skeleton](http://getskeleton.com/) let us build something that loads quickly & doesn't have any of the unnecessary bloat you would get from using a large framework for a page that requires nothing more than simplicity. LittleLink scored a 99/100 in performance when tested with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse).


# Getting Started

`docker-compose.yml`

```yml
---
version: '3'
services:
  little-link:
    image: ghcr.io/techno-tim/littlelink-server:latest
    container_name: littlelink-server
    environment:
      - META_TITLE=Techno Tim
      - META_DESCRIPTION=Techno Tim Link page
      - META_AUTHOR=Techno Tim
      - THEME=Dark
      - FAVICON_URL=https://pbs.twimg.com/profile_images/1286144221217316864/qIAsKOpB_400x400.jpg
      - AVATAR_URL=https://pbs.twimg.com/profile_images/1286144221217316864/qIAsKOpB_400x400.jpg
      - AVATAR_ALT=Techno Tim Profile Pic
      - NAME=TechnoTim
      - BIO=Hey! Just a place where you can connect with me!
      - GITHUB=https://github.com/timothystewart6
      - TWITTER=https://twitter.com/TechnoTimLive
      - INSTAGRAM=https://www.instagram.com/techno.tim
      - YOUTUBE=https://www.youtube.com/channel/UCOk-gHyjcWZNj3Br4oxwh0A/
      - TWITCH=https://www.twitch.tv/technotim/
      - DISCORD=https://discord.gg/DJKexrJ
      - KIT=https://kit.co/TechnoTim
      - FOOTER=Thanks for stopping by!

    ports:
      - 8080:3000
    restart: unless-stopped
    security_opt:
      - no-new-privileges:true
```