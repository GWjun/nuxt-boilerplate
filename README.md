# Nuxt 3 Custom Boilerplate

Refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for more information.



## Key Modules

This starter includes the following key modules:

*   `pinia`
*   `vueuse`
*   `@nuxt/image`

<br/>

## Type Checking

Enable type-checking at build or development time,

```json
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  }
})
```

<br/>

## Disable Auto Imports

Auto imports are partially disabled in this starter due to issues with tracking and refactoring. 

This means you will need to import components and functions manually.

However, core Vue/Nuxt features like `ref` and `defineStore` are still auto-imported and available.

```json
export default defineNuxtConfig({
  imports: {
    scan: false,
  },
  components: {
    dirs: [],
  },
})
```

<br/>

## Setup

Install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server at `http://localhost:3000`:

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

See the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more info.