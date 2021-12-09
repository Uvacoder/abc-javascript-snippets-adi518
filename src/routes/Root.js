import React from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

import Ad from 'components/Ad';
import Nav from 'components/Nav';
import Page from 'components/Page';
import Logo from 'components/Logo';
import Emoji from 'components/Emoji';
import Title from 'components/Title';
import Motto from 'components/Motto';
import Footer from 'components/Footer';
import Social from 'components/Social';
import HeroPage from 'components/HeroPage';
import Markdown from 'components/Markdown';
import GetStarted from 'components/GetStarted';
import GitHubAnchor from 'components/GitHubAnchor';


import snippetsPath from 'SNIPPETS.md';
import promo from 'images/promo.png';
import isDev from 'utils/is-dev';

import 'animate.css/animate.min.css';

function Root() {
  return (
    <React.Fragment>
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      <HeroPage className="animated fadeIn">
        <Nav>
          <Title />
          <Social>
            
            <GitHubAnchor />
          </Social>
        </Nav>
        <Logo />
        <Motto />
        <GetStarted />
      </HeroPage>
      <Scroll.Element name="Page-Markdown">
        <Page>
          <h1>Getting started</h1>
          <p>
            JS Snippets is all about staying updated with the latest JavaScript
            APIs. The following snippets consist of new and old APIs, so you get
            to see how things changed over time. JavaScript's undisputed nature
            makes it one of the fastest evolving languages. So go ahead, check
            out some of those snippets and who knows, you might be surprised
            with a feature or API you never knew existed! <Emoji>👌</Emoji>
          </p>
          <h1>Hold on, check out our Node.TLV promotion!</h1>
          <Ad>
            <img src={promo} alt="Promo" />
          </Ad>
          {isDev && (
            <React.Fragment>
              <h1>Go to quiz</h1>
              <p>
                Check out your JavaScript knowledge in our quiz. Click{' '}
                <Link to="/quiz">here</Link> to get started!
              </p>
            </React.Fragment>
          )}
          <Markdown inline pathToMarkdown={snippetsPath} />
        </Page>
      </Scroll.Element>
      <Footer />
    </React.Fragment>
  );
}

export default Root;
