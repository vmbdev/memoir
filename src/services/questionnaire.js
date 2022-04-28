class Questionnaire {
  constructor(db) {
    this.db = db;
    this.id = 0;
    this.count = 0;
    this.totalcount = 0;
    this.random = true;
  }

  load(id) {
    if (!Number.isInteger(id) || (id < 0) || (id >= this.db.length))
      throw new Error("Failed to load");

    this.id = id;
    this.count = 0;
    this.totalcount = this.db[this.id].data.length;

    if (this.random)
      this.shuffleQuestions();
  }

  setRandom(value) {
    this.random = value;

    if (value)
      this.shuffleQuestions();
  }

  shuffleQuestions() {
    let array = this.db[this.id].data;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getIndex() {
    return this.db.map((item, index) => ({index: index, title: item.title}));
  }
  
  retrieveQuestion() {
    if (this.questionsLeft()) {
      let statement = this.db[this.id].data.shift();
      let regex_result = statement.match(/(?<=\[{3})(.*?)(?=\]{3})/g);
      let question = {};
   
      if ((Array.isArray(regex_result)) && (regex_result.length > 0)) {
        let index_ans = Math.floor(Math.random() * regex_result.length);
        question = {
          text: statement.replace(regex_result[index_ans], "___________").replace(/(\[{3})|(\]{3})/g, ""),
          answer: regex_result[index_ans],
        };
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