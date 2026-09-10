# JavaScript Total — De Cero a Programador Web 🚀

My learning repository for the Udemy course **"JavaScript Total - De Cero a Programador Web en 18 Días"**. Each day lives in its own folder with the day's notes, the code written along the way, and a small standalone project that puts the day's concepts into practice.

The goal of this repo isn't just to store exercises — it's to build a clean, documented trail of the journey from static HTML all the way to dynamic, interactive JavaScript.

---

## 📈 Progress

**6 / 18 days completed**


| Day | Focus | Project | Status |
|:---:|:------|:--------|:------:|
| 01 | Web fundamentals & HTML structure | Personal multi-page site (about me / family) | ✅ |
| 02 | CSS foundations & selectors | Styled version of the personal site | ✅ |
| 03 | JavaScript intro: variables, types & the DOM | ⏱️ "Responde Rápido" — timed quiz game | ✅ |
| 04 | Functions & the `Math` module | 🧮 Web calculator | ✅ |
| 05 | Boolean logic, conditionals & `switch` | 🎬 Cinema movie recommender | ✅ |
| 06 | Decision-making deep dive (conditionals) | In progress | 🔨 |
| 07–18 | — | — | ⬜ Upcoming |

*The table grows as I advance through the course.*

---

## 🗂️ Repository Structure

```text
JavaScript-FrontEnd/
├── .gitignore
├── README.md
│
├── day-01/                     # Web & HTML fundamentals
│   ├── 00_notes.txt                # Concept notes for the day
│   ├── *.html                      # Exercise/code files
│   └── proyecto/                   # Day's mini-project
│
├── day-02/                     # CSS foundations
│   ├── 00_notes.txt
│   ├── *.html  /  *.css
│   └── proyecto/
│
├── day-03/                     # JS intro: variables, types, DOM
│   ├── 00_notes.txt
│   ├── *.html
│   └── proyecto/
│
├── day-04/                     # Functions & Math module
│   ├── 00_notes.txt
│   ├── *.html  /  *.js  /  *.css
│   └── project/
│
├── day-05/                     # Boolean logic & conditionals
│   ├── 00_notes.txt
│   ├── *.html  /  *.js
│   └── project/
│
└── day-06/                     # Decision-making (in progress)
    └── project/
```

Each `day-XX/` folder follows the same pattern: **notes → code → project**, so any day can be opened and understood on its own.

---

## 🧠 Concepts Covered

### Day 01 · How the web works + HTML
- The web transmits **instructions**, not finished objects — the browser rebuilds the page from them.
- The three layers of the web: **structure (HTML)**, **style (CSS)**, and **behavior (JavaScript)**.
- Core HTML: tags, headings, text formatting, images (with attributes like `src`, `alt`, `width`), links, and document organization.

### Day 02 · CSS foundations
- Inline styles vs. external stylesheets, and why external CSS is the scalable choice.
- Selectors and classes; `div` and `span` as structural containers.
- **Combinators**: descendant (`div p`), direct child (`ol > li`), adjacent sibling (`h1 + h2`), and general sibling (`h1 ~ h2`).

### Day 03 · JavaScript starts here
- Variables: `let` (mutable) vs. `const` (immutable), and when each fits.
- Data types: numbers, strings, booleans, arrays, and objects.
- First contact with the **DOM**: `getElementById`, reading `.value`, writing `.textContent`.
- Working with **dates**, and timers with `setTimeout` / `setInterval`.

### Day 04 · Functions & Math
- Declaring functions, passing parameters, returning values, and the payoff: **code reuse**.
- The built-in **`Math`** module: `pow`, `sqrt`, `abs`, `PI`, plus rounding with `round`, `ceil`, and `floor`, and `random`.

### Day 05 · Logic & conditionals
- **Truthy / falsy** — the eight falsy values (`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`) and the rule that *everything else is truthy* (including `[]` and `{}`, unlike Python).
- Logical operators: AND (`&&`), OR (`||`), NOT (`!`).
- Decision-making with `if` / `else` and `switch` / `case`.

### Day 06 · Decision-making deep dive *(current)*
- Nesting and chaining conditionals to model more complex logic.

---

## 🛠️ Featured Projects

| Project | Day | What it does | Concepts applied |
|:--------|:---:|:-------------|:-----------------|
| **Responde Rápido** | 03 | A timed quiz with a live 30-second countdown, a game-over sound, and answer collection on submit. | DOM, timers, dates, audio, events |
| **Web Calculator** | 04 | Two inputs and buttons for sum, subtraction, multiply, divide, power, square root, absolute value, random-in-range, and rounding. Built around a single reusable `mostrarResultado()` function. | Functions, `Math`, code reuse, DOM |
| **Cinema Recommender** | 05 | Recommends a movie based on the viewer's chosen genre and age, using a `switch` over genres with nested `if`s for age filtering. | `switch`/`case`, nested conditionals, DOM |

---

## 💻 Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

**Vanilla** HTML5, CSS3, and JavaScript — no frameworks or libraries. The point is to master the fundamentals before reaching for abstractions.

---

## ▶️ Running the Examples

Everything is plain front-end code, so no build step is required. Either:

1. Open any `.html` file directly in a browser, **or**
2. Use the **Live Server** VS Code extension for auto-reload while editing.

---

## 🌿 Git Workflow

Work is organized with a **branch per day** (`day-4`, `day-5`, `day-6`, …) merged into `develop` and `main`, keeping each day's progress isolated and reviewable.

---

## Author

**Antonio Gómez** — working through the course to sharpen JavaScript for front-end development.

> This is a living repository — updated day by day as the course progresses toward the full 18 days.
