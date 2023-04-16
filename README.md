<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/arthurbugan/frontend-challenge-coinsynch">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Frontend Challenge for EduSynch</h3>

![Layout do coinsynch](./public/images/screenshot.png)

  <p align="center">
    Crypto landing page and dashboard
    <br />
    <a href="https://frontend-challenge-coinsynch.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-ui">Project UI</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<br />

#### Project UI

[![Figma][Figma-shield]][Figma-url]

#### Built With

- [![Typescript][Typescript-shield]][Typescript-url]
- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Tailwind][Tailwind]][Tailwind-url]
- [![React Hook Form][Hook-Form-shield]][Hook-Form-url]
- [![Vitest][Vitest-shield]][Vitest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

#### Prerequisites

- Tested with npm v9.4.0
- Tested with node v19.6.0

#### Installation

1. Get a free API Key at [https://docs.coinapi.io/](https://docs.coinapi.io/)
2. Clone the repo
   ```sh
   git clone https://github.com/arthurbugan/frontend-challenge-coinsynch.git
   ```
3. Enter on the project folder
   ```sh
     cd frontend-challenge-coinsynch
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API in `.env.local`
   ```js
   API_KEY = "ENTER YOUR API";
   ASSETS_ID = "BTC;ETH;DOGE;XRP;XMR;DOT;LTC;ADA;THETA;ETC;";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: public/images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=flat&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[Hook-Form-shield]: https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white
[Hook-Form-url]: https://react-hook-form.com
[Figma-shield]: https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white
[Figma-url]: https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test
[Vitest-shield]: https://img.shields.io/static/v1?style=flat&message=Vitest&color=6E9F18&logo=Vitest&logoColor=FFFFFF&label=
[Vitest-url]: https://vitest.dev/
[Typescript-shield]: https://img.shields.io/static/v1?style=flat&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=
[Typescript-url]: https://www.typescriptlang.org/
