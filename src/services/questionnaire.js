class Questionnaire {
  constructor(db) {
    this.db = db;
    this.id = 0;
  }

  load(id) {
    if (!Number.isInteger(id) || (id < 0) || (id >= this.db.length))
      throw new Error("Failed to load");

    this.id = id;
  }

  retrieveQuestion() {
    if (this.questionsLeft()) {
      let statement = this.db[this.id].data.pop();
      let regex_result = statement.match(/(?<=\[{3})(.*?)(?=\]{3})/g);
      let question = {};
   
      if ((Array.isArray(regex_result)) && (regex_result.length > 0)) {
        let index_ans = Math.floor(Math.random() * regex_result.length);
        question = {
          text: statement.replace(regex_result[index_ans], "___________").replace(/(\[{3})|(\]{3})/g, ""),
          answer: regex_result[index_ans],
        };
        //let index_db = Math.floor(Math.random() * this.db.length);
      }
      return question;
    }
    else
      throw new Error('No questions left');
  }

  questionsLeft() {
    return (this.db[this.id].data.length > 0);
  }

}

export default Questionnaire;