export class Question {
  constructor(instructions, question, answers, correct) {
    this.instructions = instructions;
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
}