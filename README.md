# Dogger

Small Vue 3 app to browse dog breeds. Uses the [Dog CEO API](https://dog.ceo/dog-api/).

## Setup

```bash
npm install
npm run dev
```

## What it does

There are two pages. The home page shows all main dog breeds in a grid (sub-breeds are not included). Clicking on a breed takes you to a detail page with a random photo of that breed.

Breed data and images are cached with TanStack Query, so going back to a page you already visited won't make a new API request or change the image.

## Stack

- Vue 3 (Composition API)
- Vue Router
- TanStack Query
- Naive UI
- Vite
