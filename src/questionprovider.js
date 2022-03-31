import data from './db.js';

class QuestionProvider {
  constructor(source_path) {
    this.source_path = source_path;
    this.db = [];

    this.load();
  }

  load() {
    for (const line of data) {
      let regex_result = line.match(/(?<=\[{3})(.*?)(?=\]{3})/g);
      if ((Array.isArray(regex_result)) && (regex_result.length > 0)) {
        let index_ans = Math.floor(Math.random() * regex_result.length);
        let question = {
          text: line.replace(regex_result[index_ans], "___________").replace(/(\[{3})|(\]{3})/g, ""),
          answer: regex_result[index_ans],
        };
        let index_db = Math.floor(Math.random() * this.db.length);
        this.db.splice(index_db, 0, question);
      }
      else
        console.log(`Discarded: ${line}`);
    }
  }

  retrieveQuestion() {
    if (this.questionsLeft())
      return this.db.pop();
    else
      throw new Error('No questions left');
  }

  questionsLeft() {
    return (this.db.length > 0);
  }

}

export default QuestionProvider;