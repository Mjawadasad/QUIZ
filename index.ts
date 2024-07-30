import inquirer from 'inquirer';

// Define questions
const questions = [
  {
    type: 'list',
    name: 'question1',
    message: 'What is the capital of France?',
    choices: ['Paris', 'London', 'Rome'],
  },
  {
    type: 'list',
    name: 'question2',
    message: 'What is 2 + 2?',
    choices: ['3', '4', '5'],
  },
  {
    type: 'list',
    name: 'question3',
    message: 'What is the color of the sky?',
    choices: ['Blue', 'Green', 'Red'],
  },
];

// Function to start the quiz
async function startQuiz() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log('Quiz Results:');
    console.log(answers);
  } catch (error) {
    console.error('Error while running the quiz:', error);
  }
}

// Start the quiz
startQuiz();
