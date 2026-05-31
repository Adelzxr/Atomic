# Admin Dashboard with Atomic Design

This project is a modern, responsive Admin Dashboard web application built using React, TypeScript, and Tailwind CSS. It strictly follows the **Atomic Design Pattern**.

## Atomic Design Pattern Decisions

Atomic Design is a methodology for creating design systems. In this project, the component hierarchy is structured into the following levels:

1. **Atoms (src/components/atoms)**
   - The smallest, indivisible basic building blocks of the UI.
   - Examples: \Button\, \Badge\, \Input\, \Typography\, \Card\.
   - These components are highly reusable and typically don't have complex states.

2. **Molecules (src/components/molecules)**
   - Combinations of atoms bonded together to form a functional group.
   - Example: \StatCard\ combines a \Card\ atom with \Typography\ atoms to display statistical information.

3. **Organisms (src/components/organisms)**
   - Relatively complex UI components composed of combinations of molecules and/or atoms. They form distinct sections of an interface.
   - Examples: \Sidebar\ and \TopNav\. They provide the main layout and navigation structures.

4. **Templates (src/components/templates)**
   - Page-level objects that place components into a layout and articulate the design's underlying content structure.
   - Example: \DashboardTemplate\ combines the \Sidebar\ and \TopNav\ into a reusable layout wrapper for different pages.

5. **Pages (src/components/pages)**
   - Specific instances of templates filled with real representative content and context.
   - Examples: \Dashboard\, \Users\, \Analytics\, \Settings\.

## Features
- **Dashboard**: High-level system overview with KPI stats.
- **Users Page**: Tabular presentation of user states with status badges.
- **Analytics Page**: Chart visualization layout using Recharts.
- **Settings Page**: Form layout to modify preferences.
- **Dark Mode**: Fully supported dark/light theme driven by Context API.

## Project Structure
\\\`nsrc/
+-- components/
¦   +-- atoms/
¦   +-- molecules/
¦   +-- organisms/
¦   +-- templates/
¦   +-- pages/
+-- context/
+-- data/
+-- types/
+-- utils/
+-- App.tsx
\\\`n
## Getting Started

1. Install dependencies: \
pm install\`n2. Start development server: \
pm run dev\`n3. Build for production: \
pm run build\`n
Developed using the Vite React-TS environment and styled rapidly via Tailwind CSS.
