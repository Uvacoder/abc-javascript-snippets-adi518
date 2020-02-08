import React from 'react';
import * as Scroll from 'react-scroll';

import Nav from 'components/Nav';
import Page from 'components/Page';
import Logo from 'components/Logo';
import Title from 'components/Title';
import Motto from 'components/Motto';
import Footer from 'components/Footer';
import Social from 'components/Social';
import Markdown from 'components/Markdown';
import HeroBanner from 'components/HeroBanner';
import { InlineEmoji } from 'components/Emoji';
import GetStarted from 'components/GetStarted';
import GitHubAnchor from 'components/GitHubAnchor';
import FacebookAnchor from 'components/FacebookAnchor';

import 'animate.css/animate.min.css';

function App() {
  return (
    <div className="App">
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <HeroBanner className="animated fadeIn">
        <Nav>
          <Title />
          <Social>
            <FacebookAnchor />
            <GitHubAnchor />
          </Social>
        </Nav>
        <Logo />
        <Motto />
        <GetStarted />
      </HeroBanner>
      <Scroll.Element name="Page-Markdown">
        <Page>
          <h1>Getting started</h1>
          <p>
            JS Snippets is all about staying updated with the latest JavaScript
            APIs. The following snippets consist of new and old APIs, so you get
            to see how things changed over time. JavaScript's undisputed nature
            makes it one of the fastest evolving languages. So go ahead, check
            out some of those snippets and who knows, you might be surprised
            with a feature or API you never knew existed!
            <InlineEmoji>👌</InlineEmoji>
          </p>
          <Markdown />
        </Page>
      </Scroll.Element>
      <Footer />
    </div>
  );
}

export default App;
