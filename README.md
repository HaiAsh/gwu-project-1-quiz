# Quizzy - JavaScript Quiz App

Quizzy is a fun and interactive web-based quiz application built using HTML, CSS, and JavaScript. The app allows users to test their knowledge through a series of trivia questions and provides feedback on their performance. It also features persistent quiz progress through `localStorage`, allowing users to continue from where they left off.

## Features

- **Interactive Quiz**: Users can take the quiz, answer multiple-choice questions, and track their score.
- **Persistent Progress**: The quiz state (current question index and score) is saved to `localStorage`, enabling users to resume their quiz later.
- **Add New Questions**: Administrators or developers can add new questions to the quiz using a simple form, and those questions are saved to `localStorage`.
- **Dynamic Question Loading**: The quiz dynamically loads questions and displays them one by one, allowing for a smooth quiz-taking experience.
- **Results Display**: After completing the quiz, the user's score is displayed.

## Technologies Used

- **HTML5**: Used for the structure of the pages (quiz page, results, and additional forms).
- **CSS3**: For styling the app and making it responsive.
- **JavaScript**: The core logic of the app, including quiz progression, answer validation, and storing quiz data in `localStorage`.

### Open the App

You can open the `index.html` file directly in your browser to view the app. The app is fully client-side, so there is no need for a backend server.

1. Open the `index.html` file in your browser.
2. Click on **Click Here to Start Quiz** to begin.
3. Answer the questions and see your score at the end!

## Project Structure

```plaintext
quizzy/
│
├── index.html              # Main homepage of the app
├── about.html              # About page of the app
├── contact.html            # Contact page
├── quiz.html               # Quiz page with questions
├── reset.css               # CSS file to reset default browser styles
├── home.css                # Custom styles for the homepage and quiz
├── quizapp.js              # JavaScript file to handle quiz functionality
└── README.md               # Project documentation
```

### Files Overview

- **index.html**: The homepage of the app with a welcoming message and a button to start the quiz.
- **about.html**: An about page to describe the app's purpose and features.
- **contact.html**: A page with contact details for support or inquiries.
- **quiz.html**: The main quiz page where questions are presented.
- **reset.css**: CSS file to reset browser's default styles and ensure consistency across browsers.
- **home.css**: Custom styling for the homepage and quiz pages.
- **quizapp.js**: The JavaScript file that handles quiz logic, including:
  - Loading quiz questions from `localStorage` or using initial data.
  - Saving the quiz state (current question and score) to `localStorage`.
  - Handling form submission to add new questions dynamically.

## How the App Works

1. **Homepage**: The user lands on the homepage (`index.html`) where they are greeted with a short introduction about the app and a button to start the quiz.
2. **Start the Quiz**: When the user clicks the **Click Here to Start Quiz** button, the app loads the quiz page (`quiz.html`), presenting one question at a time.
3. **Answer Questions**: The user answers multiple-choice questions, and the app validates their selections.
4. **Track Progress**: As the user progresses through the quiz, their score and current question are saved in `localStorage`. If the user leaves the page and returns later, they can resume from where they left off.
5. **Results**: After completing the quiz, the app shows the user's score and provides an option to restart the quiz or exit.
6. **Add Questions**: New questions can be added using a form, and the questions will be saved to `localStorage`.

## How to Customize

### Adding New Questions

You can add new questions by filling out a simple form. This form is integrated into the JavaScript file (`quizapp.js`), and upon submitting, the new questions are saved to `localStorage`.

Here's how the new questions are structured:

```javascript
{
    "question": "Your question here",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "answer": "Correct answer"
}
```

To add a new question, the user just needs to submit the form, and the new question will be appended to the existing quiz data.

## Local Storage Handling

The app uses `localStorage` to save the user's progress and quiz data:

- **Saving the Quiz State**: The current question index and score are stored to `localStorage` so users can continue from where they left off.
- **Adding New Questions**: New questions are saved to `localStorage` and can persist between sessions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions! If you'd like to contribute to the project, follow these steps:

1. Fork the repository to your own GitHub account.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bugfix.
4. Make your changes.
5. Commit and push your changes to your fork.
6. Open a pull request with your changes.

## Contact

For any questions, suggestions, or support, feel free to contact the project maintainers at:

- **Email**: support@quizapp.com
- **GitHub Profile**: https://github.com/HaiAsh

