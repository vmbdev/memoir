class Questionnaire {
  constructor(db) {
    this.db = db;
    this.id = 0;
    this.count = 0;
    this.totalcount = 0;
  }

  load(id) {
    if (!Number.isInteger(id) || (id < 0) || (id >= this.db.length))
      throw new Error("Failed to load");

    this.id = id;
    this.count = 0;
    this.totalcount = this.db[this.id].data.length;
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
      else {
        let words = statement.split(' ');
        let wordcount = words.filter((n) => n !== '').length;
        let start = Number.parseInt(Math.random() * ((wordcount - 3) - 5) + 5);
        let newanswer = words.slice(start, start+3).join(' ');
        question = {
          text: statement.replace(newanswer, "___________"),
          answer: newanswer,
        }
      }
      this.count++;
      return question;
    }
    else
    throw new Error('No questions left');
  }

  resolved() {
    return this.count;
  }

  total() {
    return this.totalcount;
  }

  questionsLeft() {
    return (this.db[this.id].data.length > 0);
  }

  chapterExists(chapter) {
    return (chapter < this.db.length);
  }

}

export default Questionnaire;