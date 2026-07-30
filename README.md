# Blue Coral Frontend Assignment

Frontend implementation based on the provided design.

## Live Demo

https://blue-coral-liart.vercel.app/

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Getting Started

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run typecheck
```

## Project Structure

```text
src/
 |-- components/
 |   `-- ui/
 |-- constants/
 |-- features/
 |   |-- everything-you-need/
 |   |-- hero/
 |   `-- navbar/
 |-- lib/
 `-- App.tsx
```

## Architecture

The project is organized by feature while sharing small reusable UI primitives.

- `components/ui` contains shared primitives such as buttons, pills, dropdowns, and icon labels.
- `features/*` contains section-specific components and data.
- `constants` contains shared asset paths, colors, and visual tokens.
- `lib` contains small shared utilities.

## Notes

- Implemented to closely match the provided design.
- Responsive across mobile, tablet, and desktop.
- Reusable UI primitives are used to keep the code maintainable.
- No additional UI libraries were introduced.

## Future Improvements

- Add unit tests for reusable components.
- Improve keyboard navigation and ARIA coverage.
- Optimize image sizes and lazy loading.
