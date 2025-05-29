# Shopify x Bun

**A minimal setup for TypeScript use in a Shopify theme - compiled by Bun 🔥**

Before you get started, you need to have Bun & Shopify CLI installed on your machine 👇

- Bun -> https://bun.sh
- Shopify CLI -> https://shopify.dev/docs/api/shopify-cli

**Getting started**

1. Create a ```.env``` file in the root of your theme. For this to work you only need 1 variable:

```
# All you need is your password generated via the Theme Access app on the store you are working on!
# Theme Access -> https://apps.shopify.com/theme-access

THEME_ACCESS_PASSWORD=shptka_123abcxyz
```
2. Get the deps by running ```bun i```

3. Run ```bun dev``` then your theme will be up and running with a live compiler 🤖

Now you can also add any other lib / package from npm by running ```bun i package-name```

Happy theme building 👍 🛍️ 🛒
 
**No dependencies (apart from TypeScript duh 😂)**
