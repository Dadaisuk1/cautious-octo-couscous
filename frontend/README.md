# Frontend

This is the frontend of the project, built with React and Tailwind CSS.

## Features

- React 18
- Vite
- Tailwind CSS v3
- PostCSS
- ESLint
- Tailwind CSS Plugins:
  - @tailwindcss/forms - Form elements styling
  - @tailwindcss/typography - Prose styling

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Tailwind CSS

This project uses Tailwind CSS with the following enhancements:

- Just-In-Time (JIT) mode enabled by default
- Custom font configuration (Poppins)
- Forms plugin for better form elements styling
- Typography plugin for rich text content
- Full PostCSS integration
- VS Code IntelliSense support

### Available Plugins

1. @tailwindcss/forms
   - Provides better default styling for form elements
   - No configuration needed
   - [Documentation](https://github.com/tailwindlabs/tailwindcss-forms)

2. @tailwindcss/typography
   - Adds the `prose` class for rich text styling
   - Perfect for markdown or CMS content
   - [Documentation](https://tailwindcss.com/docs/typography-plugin)

## VS Code Setup

Install recommended extensions:
- Tailwind CSS IntelliSense
