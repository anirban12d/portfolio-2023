# Anirban Das - Fullstack Developer & UX designer

## Introduction

Welcome to my portfolio! I'm Anirban Das, a passionate web developer from India, and this repository showcases the projects and work I've done to demonstrate my skills and expertise in the field.



[![Homepage](https://github.com/anirban12d/portfolio-2023/assets/72315775/4cf591e4-a387-4982-adb5-9363323c8900)](https://www.anirbandas.in)




## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Introduction

As a web developer, I love crafting digital experiences that are not only visually appealing but also functional and user-friendly. In this portfolio, you will find projects that showcase my proficiency in using **Qwik** as the main framework, along with the integration of **Tailwind CSS** and **React** to create dynamic and responsive web applications. Additionally, I have employed **TypeScript** to bring type safety and enhanced development capabilities to the projects.

## Technologies Used

I have employed a powerful combination of technologies to build these projects, enabling seamless and efficient development:

- **Qwik**: A modern and efficient web framework that streamlines the development process.
- **Tailwind CSS**: A utility-first CSS framework that provides high customization and rapid styling capabilities.
- **React**: A popular JavaScript library for building interactive user interfaces.
- **TypeScript**: A strongly-typed superset of JavaScript that enhances code quality and maintainability.

## Usage

Feel free to use this portfolio as a reference for your own projects or to get in touch with me for potential collaborations, freelance opportunities, or to discuss web development ideas.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Your contributions are greatly appreciated!

## Contact

You can reach out to me through the following channels:

- Email: [anirbandashere@gmail.com](anirbandashere@gmail.com)
- LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/anirban12d)
- Website: [My Website](https://www.anirbandas.in)

## License

This project is licensed under the MIT License.

Thank you for visiting my portfolio! I hope you find my work inspiring and informative.

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `npm run build.server` and `npm run build.client`:

```shell
npm run build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
npm run deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
