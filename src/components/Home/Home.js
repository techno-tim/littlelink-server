import React, { memo } from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import { runtimeConfig } from './config';
import instagramLogo from '../../icons/instagram.svg';
import discordLogo from '../../icons/discord.svg';
import spotifyLogo from '../../icons/spotify.svg';
import buyMeACoffeeLogo from '../../icons/buymeacoffee.svg';
import linkedinLogo from '../../icons/linkedin.svg';
import githubLogo from '../../icons/github.svg';
import paypalLogo from '../../icons/paypal.svg';

function Home(props) {
  let order = [];
  if (runtimeConfig?.BUTTON_ORDER) {
    order = runtimeConfig.BUTTON_ORDER.split(',').reverse();
  }

  const buttonOrder = button => {
    return order.indexOf(button);
  };

  const renderCustomButtons = () => {
    const names = runtimeConfig.CUSTOM_BUTTON_NAME?.split(',');
    const urls = runtimeConfig.CUSTOM_BUTTON_URL?.split(',');
    const altTexts = runtimeConfig.CUSTOM_BUTTON_ALT_TEXT?.split(',');
    const texts = runtimeConfig.CUSTOM_BUTTON_TEXT?.split(',');
    const buttonColors = runtimeConfig.CUSTOM_BUTTON_COLOR?.split(',');
    const textColors = runtimeConfig.CUSTOM_BUTTON_TEXT_COLOR?.split(',');
    const icons = runtimeConfig.CUSTOM_BUTTON_ICON?.split(',');
    // have to clean up some of the strings to standardize for analytics

    return texts.map((t, i) => {
      // do not try to render button unless it has all of the required props
      return (
        <div key={i} order={buttonOrder(names[i]?.trim())}>
          {names &&
            names[i] &&
            urls &&
            urls[i] &&
            texts &&
            texts[i] &&
            buttonColors &&
            buttonColors[i] &&
            textColors &&
            textColors[i] &&
            altTexts &&
            altTexts[i] && (
              <Button
                name={names[i]?.trim().toLowerCase()}
                href={urls[i]?.trim()}
                displayName={texts[i]?.trim()}
                styles={{
                  backgroundColor: buttonColors[i]?.trim(),
                  color: textColors[i]?.trim(),
                }}
                alt={altTexts[i]?.trim()}
                icon={icons && icons[i]?.trim()}
              />
            )}
        </div>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column" >
            <Avatar
              src={runtimeConfig.AVATAR_URL}
              srcSet={runtimeConfig.AVATAR_2X_URL}
              alt={runtimeConfig.AVATAR_ALT}
            />
            <h1>{`${runtimeConfig.NAME}`}</h1>
            <p>{runtimeConfig.BIO}</p>
            <Sort>
              {runtimeConfig.CUSTOM_BUTTON_TEXT && renderCustomButtons()}
              {runtimeConfig.YOUTUBE && (
                <Button
                  name="youtube"
                  href={runtimeConfig.YOUTUBE}
                  displayName="YouTube"
                  logo={youtubeLogo}
                  order={buttonOrder('YOUTUBE')}
                />
              )}
              {runtimeConfig.INSTAGRAM && (
                <Button
                  name="instagram"
                  href={runtimeConfig.INSTAGRAM}
                  displayName="Collection Instagram"
                  logo={instagramLogo}
                  order={buttonOrder('INSTAGRAM')}
                />
              )}
              {runtimeConfig.INSTAGRAM_ALT && (
                <Button
                  name="instagram-alt"
                  href={runtimeConfig.INSTAGRAM_ALT}
                  displayName="Personal Instagram"
                  logo={instagramLogo}
                  order={buttonOrder('INSTAGRAM')}
                />
              )}
              {runtimeConfig.GITHUB && (
                <Button
                  name="github"
                  href={runtimeConfig.GITHUB}
                  displayName="GitHub"
                  logo={githubLogo}
                  order={buttonOrder('GITHUB')}
                />
              )}

              {runtimeConfig.DISCORD && (
                <Button
                  name="discord"
                  href={runtimeConfig.DISCORD}
                  displayName="Discord"
                  logo={discordLogo}
                  order={buttonOrder('DISCORD')}
                />
              )}
              {runtimeConfig.LINKED_IN && (
                <Button
                  name="linkedin"
                  href={runtimeConfig.LINKED_IN}
                  displayName="LinkedIn"
                  logo={linkedinLogo}
                  order={buttonOrder('LINKED_IN')}
                />
              )}
              {runtimeConfig.SPOTIFY && (
                <Button
                  name="spotify"
                  href={runtimeConfig.SPOTIFY}
                  displayName="Spotify"
                  logo={spotifyLogo}
                  order={buttonOrder('SPOTIFY')}
                />
              )}
              {runtimeConfig.BUYMEACOFFEE && (
                <Button
                  name="buymeacoffee"
                  href={runtimeConfig.BUYMEACOFFEE}
                  displayName="Buy Me a Coffee"
                  logo={buyMeACoffeeLogo}
                  order={buttonOrder('BUYMEACOFFEE')}
                />
              )}
              {runtimeConfig.PAYPAL && (
                <Button
                  name="paypal"
                  href={runtimeConfig.PAYPAL}
                  displayName="Paypal"
                  logo={paypalLogo}
                  order={buttonOrder('PAYPAL')}
                />
              )}
            </Sort>
            <div>
              <p className="footer"><img className='me' src={runtimeConfig.FOOTER} srcSet={runtimeConfig.FOOTER_2X} alt={runtimeConfig.FOOTER_ALT} /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Home);
