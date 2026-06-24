# Portfolio (Astro)

A feature-structured portfolio site focused on reusability and clean separation of concerns.

## Architecture

The codebase follows a simple clean architecture layout:

- `src/pages`: route entry points only.
- `src/layouts`: global shell and app-wide concerns.
- `src/shared`: cross-feature configuration and shared utilities.
- `src/features/portfolio/domain`: feature-specific types/contracts.
- `src/features/portfolio/data`: feature data/source objects.
- `src/features/portfolio/components`: reusable UI sections for this feature.
- `src/features/portfolio/PortfolioPage.astro`: feature composer (orchestrates sections and page-level behavior).

## Current Structure

```text
src/
	features/
		portfolio/
			components/
				AboutSection.astro
				ContactSection.astro
				ExperienceSection.astro
				HeroSection.astro
				ProjectsSection.astro
				SkillsSection.astro
				TestimonialsSection.astro
			data/
				portfolio.data.ts
			domain/
				portfolio.types.ts
			PortfolioPage.astro
	layouts/
		Layout.astro
	pages/
		index.astro
	shared/
		config/
			site.ts
```

## Why This Is Cleaner

- Pages stay thin and only compose features.
- Layout reads shared config instead of hardcoded nav/meta values.
- Portfolio content is centralized in typed data objects.
- UI sections are isolated and reusable.
- Feature behavior (typing effect, skill animation, contact UX) stays in the feature entry component.

## Commands

- `npm install`: install dependencies.
- `npm run dev`: run local dev server at `http://localhost:4321`.
- `npm run build`: create production build in `dist`.
- `npm run preview`: preview production build locally.
