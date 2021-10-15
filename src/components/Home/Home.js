import React, { memo } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { runtimeConfig } from '../../config';
import githubLogo from '../../icons/github.svg';
import instagramLogo from '../../icons/instagram.svg';
import kitLogo from '../../icons/kit.svg';
import tiktokLogo from '../../icons/tiktok.svg';
import twitchLogo from '../../icons/twitch.svg';
import twitterLogo from '../../icons/twitter.svg';
import discordLogo from '../../icons/discord.svg';
import youtubeLogo from '../../icons/youtube.svg';
import facebookLogo from '../../icons/facebook.svg';
import messengerLogo from '../../icons/messenger.svg';
import linkedinLogo from '../../icons/linkedin.svg';
import producthuntLogo from '../../icons/producthunt.svg';
import snapchatLogo from '../../icons/snapchat.svg';
import spotifyLogo from '../../icons/spotify.svg';
import redditLogo from '../../icons/reddit.svg';
import mediumLogo from '../../icons/medium.svg';
import pinterestLogo from '../../icons/pinterest.svg';
import soundcloudLogo from '../../icons/soundcloud.svg';
import figmaLogo from '../../icons/figma.svg';
import telegramLogo from '../../icons/telegram.svg';
import tumblrLogo from '../../icons/tumblr.svg';
import steamLogo from '../../icons/steam.svg';
import vimeoLogo from '../../icons/vimeo.svg';
import wordpressLogo from '../../icons/wordpress.svg';
import goodreadsLogo from '../../icons/goodreads.svg';
import skoobLogo from '../../icons/skoob.svg';
import letterboxdLogo from '../../icons/letterboxd.svg';
import mastodonLogo from '../../icons/mastodon.svg';
import microblogLogo from '../../icons/microblog.svg';
import emailLogo from '../../icons/email.svg';
import emailAltLogo from '../../icons/email_alt.svg';
import whatsappLogo from '../../icons/whatsapp.svg';
import stravaLogo from '../../icons/strava.svg';
import buyMeACoffeeLogo from '../../icons/buymeacoffee.svg';
import gitlabLogo from '../../icons/gitlab.svg';
import patreonLogo from '../../icons/patreon.svg';

function Home(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column" style={{ marginTop: '12%' }}>
            <Avatar
              src={runtimeConfig.AVATAR_URL}
              srcSet={runtimeConfig.AVATAR_2X_URL}
              alt={runtimeConfig.AVATAR_ALT}
            />
            <h1>{`${runtimeConfig.NAME}`}</h1>
            <p>{runtimeConfig.BIO}</p>
            {runtimeConfig.YOUTUBE && (
              <Button
                name="youtube"
                href={runtimeConfig.YOUTUBE}
                displayName="YouTube"
                logo={youtubeLogo}
              />
            )}
            {runtimeConfig.TWITCH && (
              <Button
                name="twitch"
                href={runtimeConfig.TWITCH}
                displayName="Twitch"
                logo={twitchLogo}
              />
            )}
            {runtimeConfig.TWITTER && (
              <Button
                name="twitter"
                href={runtimeConfig.TWITTER}
                displayName="Twitter"
                logo={twitterLogo}
              />
            )}
            {runtimeConfig.INSTAGRAM && (
              <Button
                name="instagram"
                href={runtimeConfig.INSTAGRAM}
                displayName="Instagram"
                logo={instagramLogo}
              />
            )}
            {runtimeConfig.GITHUB && (
              <Button
                name="github"
                href={runtimeConfig.GITHUB}
                displayName="GitHub"
                logo={githubLogo}
              />
            )}

            {runtimeConfig.DISCORD && (
              <Button
                name="discord"
                href={runtimeConfig.DISCORD}
                displayName="Discord"
                logo={discordLogo}
              />
            )}

            {runtimeConfig.TIKTOK && (
              <Button
                name="tiktok"
                href={runtimeConfig.TIKTOK}
                displayName="TikTok"
                logo={tiktokLogo}
              />
            )}
            {runtimeConfig.FACEBOOK && (
              <Button
                name="facebook"
                href={runtimeConfig.FACEBOOK}
                displayName="Facebook"
                logo={facebookLogo}
              />
            )}
            {runtimeConfig.FACEBOOK_MESSENGER && (
              <Button
                name="messenger"
                href={runtimeConfig.FACEBOOK_MESSENGER}
                displayName="Messenger"
                logo={messengerLogo}
              />
            )}
            {runtimeConfig.LINKED_IN && (
              <Button
                name="linkedin"
                href={runtimeConfig.LINKED_IN}
                displayName="LinkedIn"
                logo={linkedinLogo}
              />
            )}
            {runtimeConfig.PRODUCT_HUNT && (
              <Button
                name="producthunt"
                href={runtimeConfig.PRODUCT_HUNT}
                displayName="Product Hunt"
                logo={producthuntLogo}
              />
            )}
            {runtimeConfig.SNAPCHAT && (
              <Button
                name="snapchat"
                href={runtimeConfig.SNAPCHAT}
                displayName="SnapChat"
                logo={snapchatLogo}
              />
            )}
            {runtimeConfig.SPOTIFY && (
              <Button
                name="spotify"
                href={runtimeConfig.SPOTIFY}
                displayName="Spotify"
                logo={spotifyLogo}
              />
            )}
            {runtimeConfig.REDDIT && (
              <Button
                name="reddit"
                href={runtimeConfig.REDDIT}
                displayName="Reddit"
                logo={redditLogo}
              />
            )}
            {runtimeConfig.MEDIUM && (
              <Button
                name="medium"
                href={runtimeConfig.MEDIUM}
                displayName="Medium"
                logo={mediumLogo}
              />
            )}
            {runtimeConfig.PINTEREST && (
              <Button
                name="pinterest"
                href={runtimeConfig.PINTEREST}
                displayName="Pinterest"
                logo={pinterestLogo}
              />
            )}
            {runtimeConfig.EMAIL && (
              <Button
                name="default"
                href={`mailto:${runtimeConfig.EMAIL}`}
                displayName={runtimeConfig.EMAIL_TEXT}
                logo={emailLogo}
              />
            )}

            {runtimeConfig.EMAIL_ALT && (
              <Button
                name="default"
                href={`mailto:${runtimeConfig.EMAIL_ALT}`}
                displayName={runtimeConfig.EMAIL_ALT_TEXT}
                logo={emailAltLogo}
              />
            )}

            {runtimeConfig.SOUND_CLOUD && (
              <Button
                name="soundcloud"
                href={runtimeConfig.SOUND_CLOUD}
                displayName="SoundCloud"
                logo={soundcloudLogo}
              />
            )}
            {runtimeConfig.FIGMA && (
              <Button
                name="figma"
                href={runtimeConfig.FIGMA}
                displayName="Figma"
                logo={figmaLogo}
              />
            )}

            {runtimeConfig.TELEGRAM && (
              <Button
                name="telegram"
                href={runtimeConfig.TELEGRAM}
                displayName="Telegram"
                logo={telegramLogo}
              />
            )}

            {runtimeConfig.TUMBLR && (
              <Button
                name="tumblr"
                href={runtimeConfig.TUMBLR}
                displayName="Tumblr"
                logo={tumblrLogo}
              />
            )}
            {runtimeConfig.STEAM && (
              <Button
                name="steam"
                href={runtimeConfig.STEAM}
                displayName="Steam"
                logo={steamLogo}
              />
            )}

            {runtimeConfig.VIMEO && (
              <Button
                name="vimeo"
                href={runtimeConfig.VIMEO}
                displayName="Vimeo"
                logo={vimeoLogo}
              />
            )}
            {runtimeConfig.WORDPRESS && (
              <Button
                name="wordpress"
                href={runtimeConfig.WORDPRESS}
                displayName="Wordpress"
                logo={wordpressLogo}
              />
            )}
            {runtimeConfig.GOODREADS && (
              <Button
                name="goodreads"
                href={runtimeConfig.GOODREADS}
                displayName="Goodreads"
                logo={goodreadsLogo}
              />
            )}
            {runtimeConfig.SKOOB && (
              <Button
                name="skoob"
                href={runtimeConfig.SKOOB}
                displayName="Skoob"
                logo={skoobLogo}
              />
            )}
            {runtimeConfig.LETTERBOXD && (
              <Button
                name="letterboxd"
                href={runtimeConfig.LETTERBOXD}
                displayName="LetterBoxd"
                logo={letterboxdLogo}
              />
            )}
            {runtimeConfig.MASTODON && (
              <Button
                name="mastodon"
                href={runtimeConfig.MASTODON}
                displayName="Mastodon"
                logo={mastodonLogo}
              />
            )}
            {runtimeConfig.MICRO_BLOG && (
              <Button
                name="microblog"
                href={runtimeConfig.MICRO_BLOG}
                displayName="Microblog"
                logo={microblogLogo}
              />
            )}
            {runtimeConfig.WHATSAPP && (
              <Button
                name="whatsapp"
                href={runtimeConfig.WHATSAPP}
                displayName="WhatsApp"
                logo={whatsappLogo}
              />
            )}
            {runtimeConfig.KIT && (
              <Button
                name="kit"
                href={runtimeConfig.KIT}
                displayName="Kit"
                logo={kitLogo}
              />
            )}
            {runtimeConfig.STRAVA && (
              <Button
                name="strava"
                href={runtimeConfig.STRAVA}
                displayName="Strava"
                logo={stravaLogo}
              />
            )}
            {runtimeConfig.BUYMEACOFFEE && (
              <Button
                name="buymeacoffee"
                href={runtimeConfig.BUYMEACOFFEE}
                displayName="Buy Me a Coffee"
                logo={buyMeACoffeeLogo}
              />
            )}
            {runtimeConfig.GITLAB && (
              <Button
                name="gitlab"
                href={runtimeConfig.GITLAB}
                displayName="GitLab"
                logo={gitlabLogo}
              />
            )}
            {runtimeConfig.PATREON && (
              <Button
                name="patreon"
                href={runtimeConfig.PATREON}
                displayName="Patreon"
                logo={patreonLogo}
              />
            )}
            <div>
              <p className="footer">{runtimeConfig.FOOTER}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Home);
