# Global Health Sphere – React + Tailwind CSS

Responsive health-awareness website built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Styling approach

- All page, section, card, header, footer, navigation, dropdown and responsive layout styling is written with Tailwind utility classes directly in the relevant `.jsx` files.
- There are no page-specific CSS files and no custom component CSS rules.
- `src/index.css` is reserved for the global font, box sizing, body defaults, heading and paragraph defaults, and responsive root font sizing.
- Global font: Plus Jakarta Sans.
- Brand colours: navy blue `#123C8C`, teal `#079DA7`, and green `#35C94A`.

## Global typography (`src/index.css`)

| Viewport | Root font size |
| --- | ---: |
| 1550px and wider | 20px |
| 1200px–1549px | 18px |
| 561px–1199px (tablet) | 17px |
| Up to 560px (mobile) | 16px |

Body paragraphs inherit the root size and use dark ink `#172A43` for readability. Headings use the same font family, bold weight and centered alignment by default. A page can override alignment with Tailwind utilities such as `text-left`.

## Main folders

```text
src/
  assets/       Images and logo only
  components/   Reusable Header, Footer, ArticleCard, CountryCard, Newsletter
  data/         Health categories, articles and countries
  pages/        Home, article, category, country and static pages
  App.jsx       Website routes
  index.css     Global typography and base styles only
  main.jsx      React entry point
```

## Where to edit

- Global font, paragraph colour, heading defaults and responsive font scale: `src/index.css`
- Header and dropdown utility classes: `src/components/Header.jsx`
- Footer: `src/components/Footer.jsx`
- Homepage layout and slider: `src/pages/HomePage.jsx`
- Health category names and subtopics: `src/data/categories.js`
- Articles, including the diabetes awareness article: `src/data/articles.js`
- Country hubs: `src/data/countries.js`
- Individual category/subtopic display: `src/pages/CategoryPage.jsx`
- Routes: `src/App.jsx`

## Page container

Pages use Tailwind classes with a maximum width of 1400px. The layout uses a fluid width with responsive horizontal gutters, then centres the content using `mx-auto`.
