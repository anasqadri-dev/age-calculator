# Age Calculator

> A vanilla JavaScript application that calculates a user's exact age in years, months, and days using the JavaScript Date API.

---

## Demo

---

## Tech Stack

| Technology          | Purpose           |
| ------------------- | ----------------- |
| HTML5               | Page structure    |
| CSS3                | Responsive UI     |
| JavaScript (ES6)    | Application logic |
| JavaScript Date API | Date calculations |

---

## Features

- Calculate exact age in years, months, and days
- Prevent future dates from being selected
- Input validation for empty or invalid dates
- Responsive design for desktop and mobile
- Clean and minimal interface

---

## Project Structure

```text id="7v31xq"
age-calculator/
├── index.html
├── style.css
└── script.js
```

---

## How It Works

1. The user selects a birth date.
2. JavaScript retrieves the current date.
3. The application compares the birth date with today's date.
4. It adjusts years, months, and days when the birthday hasn't yet occurred in the current month or year.
5. The final age is displayed in years, months, and days.

---

## Key JavaScript Concepts

- JavaScript Date API
- Date comparison
- DOM manipulation
- Input validation
- Conditional logic
- Helper functions

---

## What I Learned

- Calendar calculations require more than simple subtraction.
- The JavaScript `Date` object can determine the number of days in any month, including leap years.
- Native HTML date inputs simplify collecting valid date information.
- Input validation improves both reliability and user experience.

---

## License

MIT
