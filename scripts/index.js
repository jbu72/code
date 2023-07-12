//
  // main.js
  //
  
  let questionsData = [
    {
      text: "Date de création de l'ENAM",
      answers: [
        {
          text: "21 décembre 1958",
          isCorrect: false
        },
        {
          text: "4 décembre 1959",
          isCorrect: true
        },
        {
          text: "6 octobre 1960",
          isCorrect: false
        }
      ]
    },
    {
        text: "Qui est l'auteur de l'oeuvre (on ne nait pas femme, on le devient)",
        answers: [
          {
            text: "Jules Ferry",
            isCorrect: false
          },
          {
            text: "Simone de Beauvoir",
            isCorrect: true
          },
          {
            text: "Thomas Sankara",
            isCorrect: false
          }
        ]
      },
    {
      text: "Combien de femmes ministres compte le gouvernement KYELEM III?",
      answers: [
        {
          text: "4",
          isCorrect: true
        },
        {
          text: "3",
          isCorrect: false
        },
        {
          text: "5",
          isCorrect: false
        },
        {
          text: "Aucune bonne réponse",
          isCorrect: false
        }
      ]
    },
    {
      text: "Quelle est la date du début de l'inondation de la mine de Perkoa?",
      answers: [
        {
          text: "3 mai 2022",
          isCorrect: false
        },
        {
          text: "29 avril 2022",
          isCorrect: false
        },
        {
          text: "16 avril 2022",
          isCorrect: true
        }
      ]
    },
    {
      text: "Qui est le fondateur de Telegram et qu'elle est sa nationalité?",
      answers: [
        {
          text: "Pavel Dourov / Russe",
          isCorrect: true
        },
        {
          text: "Zhang Yiming / Chinois",
          isCorrect: false
        },
        {
          text: "Jack Dorsey / Américain",
          isCorrect: false
        },
        {
          text: "Mark Zuckerberg / Français",
          isCorrect: false
        }
      ]
    },
    {
      text: "Qui préside la Commission de l'informatique et des libertés?",
      answers: [
        {
          text: "Halguièta NASSA/TRAWINA",
          isCorrect: true
        },
        {
          text: "Mariam TRAORE/OUEDRAOGO",
          isCorrect: false
        },
        {
          text: "Korotimi KABORE/OUANGRE",
          isCorrect: true
        },
        {
          text: "Aucune bonne réponse",
          isCorrect: false
        }
      ]
    }
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
      }, 100);
    }
  });
  
  console.log(questions, questionsData);