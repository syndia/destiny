/**
 * External dependencies
 */
import React from 'react'
import FacebookIcon from 'react-icons/lib/fa/facebook-square'
import GitHubIcon from 'react-icons/lib/fa/github'
import TwitchIcon from 'react-icons/lib/fa/twitch'
import TwitterIcon from 'react-icons/lib/fa/twitter'

const ICONS = { FacebookIcon, GitHubIcon, TwitchIcon, TwitterIcon }

const FACEBOOK = `FACEBOOK`
const GITHUB = `GITHUB`
const TWITCH = `TWITCH`
const TWITTER = `TWITTER`

export const PROVIDER_REGEX = new Map([
  [FACEBOOK, /facebook.com/],
  [GITHUB, /github.com/],
  [TWITCH, /twitch.tv/],
  [TWITTER, /twitter.com/],
])

export const PROVIDER_NAMES = new Map([
  [FACEBOOK, `Facebook`],
  [GITHUB, `GitHub`],
  [TWITCH, `Twitch`],
  [TWITTER, `Twitter`],
])

export const PROVIDER_ICONS = new Map([
  [FACEBOOK, <ICONS.FacebookIcon key="facebook-icon" />],
  [GITHUB, <ICONS.GitHubIcon key="github-icon" />],
  [TWITCH, <ICONS.TwitchIcon key="twitch-icon" />],
  [TWITTER, <ICONS.TwitterIcon key="twitter-icon" />],
])
