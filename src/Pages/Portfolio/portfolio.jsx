import React from "react";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolio-headings">Portfolio</h2>
      <div className="divider"></div>
      <div className="row">
        <div className="proyect">
          <div className="overlay"></div>
          <a
            className="media-figure tw-screenshot undefined"
            href="https://nelsonblackjack.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="open-in-new-tab"
            title="Go to site nelsonblackjack"
          >
            <picture className="tw-border-none tw-m-0 tw-p-0 tw-block tw-w-full tw-align-middle tw-max-w-full tw-h-auto">
              <source
                srcSet="https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/63ff5e861e578913935e069d/screenshot_2023-03-01-14-17-44-0000.png"
                type="image/avif"
              />
              <source
                srcSet="https://screenshot-proxy.netlify.app/f_webp,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/63ff5e861e578913935e069d/screenshot_2023-03-01-14-17-44-0000.png"
                type="image/webp"
              />
              <img
                src="https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/63ff5e861e578913935e069d/screenshot_2023-03-01-14-17-44-0000.png"
                alt=""
                width="168"
                height="105"
                loading="lazy"
                className="tw-align-top tw-h-full tw-w-full"
              />
            </picture>
          </a>
          <div className="info">
            <h3>Blackjack</h3>
            <p>Práctica de JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};
