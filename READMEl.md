# RB Services

A modern website for **RB Services**, built with
[Astro](https://astro.build/) and [Sanity](https://www.sanity.io/) as
the content management system.

The project is structured to keep the website frontend separate from the
Sanity Studio, making it easier to build, manage, and update site
content.

## Tech Stack

-   **Astro** --- website framework
-   **Sanity** --- headless CMS for managing content
-   **TypeScript** --- typed JavaScript support
-   **Tailwind CSS** --- styling (if configured in the project)
-   **Cloudflare** --- deployment target/configuration

## Project Structure

``` text
rb-services/
├── public/                 # Static assets served as-is
├── src/                    # Astro website source code
│   └── pages/              # Website routes
├── studio-hello-world/     # Sanity Studio project
├── astro.config.mjs        # Astro configuration
├── package.json            # Frontend dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── wrangler.jsonc          # Cloudflare Wrangler configuration
```

## Getting Started

### Requirements

Install the following before starting:

-   [Node.js](https://nodejs.org/) (use a current LTS release)
-   npm (included with Node.js)

### 1. Clone the repository

``` bash
git clone https://github.com/fatimahashmi2018-ops/rb-services.git
cd rb-services
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the Astro development server

``` bash
npm run dev
```

Open the local URL printed in your terminal (usually
`http://localhost:4321`).

### 4. Build the website

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

## Sanity Studio

The Sanity Studio lives in the `studio-hello-world/` directory.

To install its dependencies:

``` bash
cd studio-hello-world
npm install
```

Start the Studio's local development server:

``` bash
npm run dev
```

Use the local URL printed in the terminal to open the Studio.

> The frontend and Studio have separate package files and dependencies.
> Run commands from the relevant directory.

## Environment Variables

If the project uses private API credentials or environment-specific
settings, keep them in a local `.env` file and configure the same
variables in your deployment environment.

-   Do not commit `.env` files or secret API tokens.
-   Check the Sanity client configuration and deployment settings for
    the exact variable names required by this project.
-   Share required variable names (not secret values) with collaborators
    through secure project documentation.

## Deployment

The repository includes a `wrangler.jsonc` configuration for Cloudflare
tooling.

Before deploying, verify the build and deployment settings in:

-   `astro.config.mjs`
-   `wrangler.jsonc`
-   `package.json`

Configure any required environment variables in the Cloudflare project,
then use the deployment command configured for this project.

## Git Workflow

After making changes:

``` bash
git add .
git commit -m "Describe your changes"
git push
```

## Useful Links

-   [Live website](https://rbservicestn.com/)
-   [GitHub
    repository](https://github.com/fatimahashmi2018-ops/rb-services)
-   [Astro documentation](https://docs.astro.build/)
-   [Sanity documentation](https://www.sanity.io/docs)
-   [Cloudflare Workers
    documentation](https://developers.cloudflare.com/workers/)

------------------------------------------------------------------------

Built with Astro for RB Services.
