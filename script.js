   // Tvoj Web App URL (Apps Script deployment)
     const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycby-EwC1iN6YvG1tIrQDiHXETee_5DqLZ2I2Jbb2SceuGesDHYcIf6ACPWP6BntwmhbFHw/exec';

//OVO JE DRUGI DEO KODA

    let imeKorisnika = "";
    let tacno = "";
    let ocena = "";
   
   
    function pokreniKviz() {
      imeKorisnika = document.getElementById("ime").value.trim();
     
      if (imeKorisnika === "" ) {
        alert("Molimo unesite svoje ime");
        return;
      }
      document.getElementById("intro").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      document.getElementById("pozdrav").textContent = `Srećno, ${imeKorisnika}!`;

      speak(`Srećno, ${imeKorisnika}!`);
      showQuestion();
    }
    // ----------- KONFIGURACIJA -----------
    const Q1_QUESTIONS = 0;   // sabiranje
    const Q2_QUESTIONS = 0;   // množenje
    const Q3_QUESTIONS = 0;   // deljenje
    const Q4_QUESTIONS = 5;   // simpleQuestions1
    const Q5_QUESTIONS = 5;   // simpleQuestions2
    const Q6_QUESTIONS = 10;  // simpleQuestions3 (teža pitanja)
    const TOTAL = Q1_QUESTIONS
                  + Q2_QUESTIONS
                  + Q3_QUESTIONS
                  + Q4_QUESTIONS
                  + Q5_QUESTIONS
                  + Q6_QUESTIONS;
    // 10 jednostavnih pitanja
    const simpleQuestions1 = [
  { 
    text: 'Zbir razlomaka 1/4 i 2/4', 
    options: ['3/4', '2/4', '3/8', '1/4'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 2/5 i 1/5', 
    options: ['3/5', '3/10', '1/5', '4/5'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 3/6 i 2/6', 
    options: ['5/6', '1/2', '5/12', '3/6'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 4/7 i 1/7', 
    options: ['5/7', '5/14', '1/7', '4/7'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 5/9 i 2/9', 
    options: ['7/9', '5/18', '3/9', '7/18'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 1/3 i 2/3', 
    options: ['3/3', '4/3', '1/3', '2/3'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 2/8 i 3/8', 
    options: ['5/8', '5/16', '2/8', '3/8'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 4/10 i 5/10', 
    options: ['9/10', '9/20', '1', '4/10'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 3/12 i 4/12', 
    options: ['7/12', '7/24', '1/2', '4/12'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 6/11 i 2/11', 
    options: ['8/11', '6/22', '2/11', '1'], 
    correctIndex: 0 
  }
    ];
    // 10 pitanja srednje težine
    const simpleQuestions2 = [
  { text: 'Razlika razlomaka 3/4 i 1/4',      options: ['1/2', '4/4', '3/4', '1/4'],    correctIndex: 0 },
  { text: 'Razlika razlomaka 2/5 i 1/5',      options: ['1/5', '2/5', '1/3', '3/5'],    correctIndex: 0 },
  { text: 'Razlika razlomaka 6/7 i 2/7',      options: ['4/7', '3/7', '6/7', '2/7'],    correctIndex: 0 },
  { text: 'Razlika razlomaka 5/9 i 3/9',      options: ['2/9', '5/9', '3/9', '8/9'],    correctIndex: 0 },
  { text: 'Razlika razlomaka 7/8 i 1/8',      options: ['6/8', '7/8', '3/4', '8/8'],    correctIndex: 0 },
  { text: 'Razlika razlomaka 4/6 i 2/6',      options: ['2/6', '6/6', '4/6', '2/3'],    correctIndex: 0 },
  { text: 'Razlika razlomaka 8/10 i 3/10',    options: ['5/10', '11/10', '3/10', '8/10'], correctIndex: 0 },
  { text: 'Razlika razlomaka 9/12 i 4/12',    options: ['5/12', '1/2', '9/12', '13/12'], correctIndex: 0 },
  { text: 'Razlika razlomaka 5/11 i 2/11',    options: ['3/11', '2/11', '5/11', '7/11'], correctIndex: 0 },
  { text: 'Razlika razlomaka 10/13 i 6/13',   options: ['4/13', '16/13', '10/13', '2/13'], correctIndex: 0 }
    ];
    // 10 težih pitanja
    const simpleQuestions3 = [
  { 
    text: 'Zbir razlomaka 1/2 i 1/3', 
    options: ['5/6', '1/3', '2/5', '4/6'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 2/3 i 1/4', 
    options: ['11/12', '3/7', '7/12', '5/12'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 1/5 i 2/10', 
    options: ['2/5', '3/15', '1/2', '3/10'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 3/8 i 1/4', 
    options: ['5/8', '4/8', '7/24', '4/12'], 
    correctIndex: 0 
  },
  { 
    text: 'Zbir razlomaka 5/12 i 1/3', 
    options: ['9/12', '6/12', '2/3', '1'], 
    correctIndex: 0 
  },
  { 
    text: 'Proizvod razlomaka 1/2 i 2/3', 
    options: ['1/3', '2/3', '1/2', '2/5'], 
    correctIndex: 0 
  },
  { 
    text: 'Proizvod razlomaka 3/4 i 2/5', 
    options: ['3/10', '5/20', '1/2', '5/8'], 
    correctIndex: 0 
  },
  { 
    text: 'Proizvod razlomaka 5/6 i 3/7', 
    options: ['5/14', '15/13', '1/2', '5/21'], 
    correctIndex: 0 
  },
  { 
    text: 'Proizvod razlomaka 5/9 i 9/4', 
    options: ['5/4', '45/9', '14/36', '4/5'], 
    correctIndex: 0 
  },
  { 
    text: 'Proizvod razlomaka 3/5 i 5/8', 
    options: ['3/8', '15/5', '15/8', '8/40'], 
    correctIndex: 0 
  },
  { 
    text: 'Količnik razlomaka 1/2 i 2/3', 
    options: ['3/4', '2/3', '1', '1/4'], 
    correctIndex: 0 
  },
  { 
    text: 'Količnik razlomaka 3/4 i 1/2', 
    options: ['3/2', '4/6', '3/8', '2/3'], 
    correctIndex: 0 
  },
  { 
    text: 'Količnik razlomaka 5/6 i 2/3', 
    options: ['5/4', '10/18', '1', '4/5'], 
    correctIndex: 0 
  },
  { 
    text: 'Količnik razlomaka 2/5 i 3/10', 
    options: ['4/3', '20/5', '2/5', '6/30'], 
    correctIndex: 0 
  },
  { 
    text: 'Količnik razlomaka 4/7 i 2/7', 
    options: ['2', '6/7', '6/14', '8/7'], 
    correctIndex: 0 
  }
    ];
    // slučajni indeksi za svaki skup
    const indices1 = [];
    while (indices1.length < Q4_QUESTIONS) {
      const r = Math.floor(Math.random() * simpleQuestions1.length);
      if (!indices1.includes(r)) indices1.push(r);
    }
    const indices2 = [];
    while (indices2.length < Q5_QUESTIONS) {
      const r = Math.floor(Math.random() * simpleQuestions2.length);
      if (!indices2.includes(r)) indices2.push(r);
    }
    const indices3 = [];
    while (indices3.length < Q6_QUESTIONS) {
      const r = Math.floor(Math.random() * simpleQuestions3.length);
      if (!indices3.includes(r)) indices3.push(r);
    }
    // ----------- STATE -----------
    let count = 0;
    let points = 0;
    let correctAnswer;
   

    const questionEl  = document.getElementById('question');
    const buttonsEl   = document.getElementById('answer-buttons');
    const feedbackEl  = document.getElementById('feedback');
    const scoreEl     = document.getElementById('score');
    const nextBtn     = document.getElementById('next-btn');
    const resultEl    = document.getElementById('result-screen');
    // ----------- POMOĆNE FUNKCIJE -----------
    function randomInt() {
      let n;
      do {
        n = Math.floor(Math.random() * 21) - 10;
      } while (n === 0);
      return n;
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
//OVO JE TREĆI DEO KODA
    // ----------- PRIKAZ PITANJA -----------
    function showQuestion() {
      feedbackEl.innerText = '';
      buttonsEl.innerHTML  = '';
      nextBtn.style.display = 'none';
      resultEl.classList.add('hidden');
      if (count >= TOTAL) {
       //  speak(` ${imeKorisnika} osvojio si ${points} poena.`);


        questionEl.innerText = 'Kraj kviza! 🎉';
        resultEl.innerHTML   = `<p> ${imeKorisnika} Ukupan rezultat: <strong>${points}</strong> poena</p>`;
        resultEl.classList.remove('hidden');
 prikaziDugmeKraj();
        return;  
      }
      count++;
      scoreEl.innerText = `Poeni ${imeKorisnika} : ${points} | Pitanje: ${count}/${TOTAL}`;
      let options = [];
      if (count <= Q1_QUESTIONS) {
        const a = randomInt(), b = randomInt();
        correctAnswer = a + b;
         
         speak(`Zbir brojeva ${a} i ${b}`);
         
        questionEl.innerText = `Zbir brojeva ${a} i ${b}`;
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS) {
        const a = randomInt(), b = randomInt();
        correctAnswer = a * b;

         speak(`Proizvod brojeva ${a} i ${b}`);
         
        questionEl.innerText = `Proizvod brojeva ${a} i ${b}`;
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS + Q3_QUESTIONS) {
        const res = Math.floor(Math.random() * 11) + 1;
        const b   = randomInt(), a = res * b;
        correctAnswer = res;

         speak(`Koliko je ${a} / ${b}?`);
         
        questionEl.innerText = `Koliko je ${a} / ${b}?`;
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS + Q3_QUESTIONS + Q4_QUESTIONS) {
        const idx = indices1[count - Q1_QUESTIONS - Q2_QUESTIONS - Q3_QUESTIONS - 1];
        const q   = simpleQuestions1[idx];

         speak(`${q.text}`);
         
        questionEl.innerText  = q.text;
        correctAnswer         = q.options[q.correctIndex];
        options               = [...q.options];
      }
      else if (count <= Q1_QUESTIONS + Q2_QUESTIONS + Q3_QUESTIONS + Q4_QUESTIONS + Q5_QUESTIONS) {
        const idx = indices2[count - Q1_QUESTIONS - Q2_QUESTIONS - Q3_QUESTIONS - Q4_QUESTIONS - 1];
        const q   = simpleQuestions2[idx];
        
         speak(`${q.text}`);
         
        questionEl.innerText  = q.text;
        correctAnswer         = q.options[q.correctIndex];
        options               = [...q.options];
      }
      else {
        // Q6: teža pitanja
        const idx = indices3[count
          - Q1_QUESTIONS
          - Q2_QUESTIONS
          - Q3_QUESTIONS
          - Q4_QUESTIONS
          - Q5_QUESTIONS
          - 1];
        const q   = simpleQuestions3[idx];

         speak(`${q.text}`);
         
        questionEl.innerText  = q.text;
        correctAnswer         = q.options[q.correctIndex];
        options               = [...q.options];
      }

      if (options.length === 0) {
        options = [correctAnswer];
        while (options.length < 4) {
          const fake = correctAnswer + (Math.floor(Math.random() * 21) - 10);
          if (fake !== correctAnswer && !options.includes(fake)) {
            options.push(fake);
          }
        }
      }
      shuffle(options).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = opt;
        btn.onclick   = () => selectAnswer(opt, btn);
        buttonsEl.appendChild(btn);
      });
    }
    // ----------- ODABIR ODGOVORA -----------
    function selectAnswer(choice, btn) {
      Array.from(buttonsEl.children).forEach(b => b.disabled = true);

      if (choice === correctAnswer) {
        points += 5;

        tacno=tacno+" 5✅ ";

        feedbackEl.innerText      = '✅ Tačno! +5 poena';
        btn.style.backgroundColor = '#16a34a';
      } else {
        feedbackEl.innerText      = `❌ Netačno. Tačan odgovor je ${correctAnswer}`;
        btn.style.backgroundColor = '#dc2626';

      tacno=tacno+" 0❌ ";

      }

      scoreEl.innerText = `Poeni: ${points} | Pitanje: ${count}/${TOTAL}`;
      nextBtn.style.display = 'inline-block';
    }

    nextBtn.onclick = showQuestion;
    

    function speak(text) {
       const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'sr-RS'; // srpski jezik
        window.speechSynthesis.speak(msg);
                    }

function prikaziDugmeKraj() {
  const dugme = document.getElementById("dugmeKraj");
  dugme.style.display = "inline-block";

  dugme.addEventListener("click", () => {
    // sakrij inner-quiz
    document.getElementById("quiz").style.display = "none";

    // prikaži završnu poruku
    document.getElementById("porukaKraj").style.display = "block";
    zavrsiKviz(points);

    // pripremi i prikaži diplomu
    const diploma      = document.getElementById("diploma");
    const tekstDiplome = document.getElementById("tekstDiplome");
    tekstDiplome.textContent =
      `Ovom diplomom se potvrđuje da je ${imeKorisnika}  ` +
      `uspešno završio/la kviz! 🎓`;
    diploma.style.display = "block";

    // dugme „Prekini”
    document.getElementById("prekiniBtn").onclick = () => {
      diploma.style.display = "none";
      document.getElementById("porukaKraj").textContent = "Hvala na učešću!";
    window.close();
    window.location.href = "https://ggmikica.wordpress.com/";
    };

    // dugme „Odigraj ponovo”
   // document.getElementById("ponovoBtn").onclick = () => {

      // reset stanja
     // count  = 0;
     // points = 0;

      // sakrij sve finalne ekrane
      //diploma.style.display      = "none";
      //document.getElementById("porukaKraj").style.display = "none";
      //dugme.style.display        = "none";
      //document.getElementById("kraj").style.display = "none";

      // vrati intro i očisti polja za ime
      //document.getElementById("intro").style.display = "block";
      //document.getElementById("ime").value           = "";
      
      // osveži prikaz skora
      //scoreEl.innerText = `Poeni: 0 | Pitanje: 0/${TOTAL}`;
      //showQuestion();
    //};
  });
}


function zavrsiKviz(brojPoena) {
  const krajDiv = document.getElementById("kraj");
  let poruka = `${imeKorisnika}, završio si kviz sa ${brojPoena} poena! `;
  let procenat= 0;
  procenat = Math.floor(100*points/(TOTAL*5));
  if (brojPoena >= 0.7*TOTAL*5) {
    ocena += `Uspešnost: ${procenat}%.  😄`;
  } else if (brojPoena >= 0.5*TOTAL*5) {
    ocena += `Uspešnost: ${procenat}%.  😉`;
  } else {
    ocena += `Uspešnost: ${procenat}%.  😢`;
  } 



  posalji();

  if (brojPoena === TOTAL*5) {
    poruka += "Savršeno! 👑😄";
  } else if (brojPoena >= 0.7*TOTAL*5) {
    poruka += "Odlično! 💪";
  } else if (brojPoena >=  0.5*TOTAL*5) {
    poruka += "Dobro je, ali možeš još bolje! 😉";
  } else {
    poruka += "Ne brini😢, sledeći put ćeš biti bolji! 🚀";
  }

  krajDiv.textContent = poruka;
  krajDiv.style.display = "block";
}


function posalji() {

     const data = {
        playerName: imeKorisnika,
        score: tacno,
        poeni: points,
        uspesnost: ocena
      };

      // Slanje rezultata (koristimo no-cors zbog ograničenja CORS-a)
      fetch(WEB_APP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(data)
      })
      .then(() => console.log('Rezultati poslati.'))
      .catch(err => console.error('Greška pri slanju:', err));


}





