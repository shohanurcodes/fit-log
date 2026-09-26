# FitLog

FitLog is a responsive workout library and workout planning web application. Users can explore workouts, view workout details, add workouts to today's plan, and save workouts for later.

## Technologies

* Next.js
* TypeScript
* React
* Tailwind CSS
* DaisyUI
* Lucide React
* REST API

## Features

* Browse workouts from the workout library
* View detailed information for each workout
* Add workouts to today's plan
* Save workouts for later
* Prevent duplicate workouts
* Limit today's plan to 5 workouts
* Track exercises, total minutes, and calories
* View saved workouts separately
* Mark workouts as done
* Remove workouts from the plan or saved list
* Responsive design for mobile, tablet, and desktop
* Dynamic Plan and Saved counters in the navbar
* Custom 404 page for invalid workout routes
* Toast notifications for workout actions

## API

The application uses the FitLog API:

* All workouts: `https://api.abcz.workers.dev/api/fitlog`
* Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── Home/
│   │   ├── Navbar/
│   │   ├── WorkoutDetails/
│   │   └── Footer/
│   ├── my-plan/
│   ├── workout/
│   │   └── [id]/
│   ├── layout.tsx
│   └── page.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── lib/
│   └── api.ts
│
└── types/
    └── workout.ts
```

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Author

Built as a web development assignment project using Next.js, TypeScript, React, and Tailwind CSS.
