// Question Bank
class Question {
    constructor (question, oA, oB, oC, oD, answer) {
      this.question = question;
      this.oA = oA;
      this.oB = oB;
      this.oC = oC;
      this.oD = oD;
      this.answer = answer;
    }
  }
  
  const questions = [];
  
  questions.push(new Question("What is Isaac Newton said to have discovered thank to an apple?", "A: Helium", "B: Air", "C: Gravity", "D: Calculus", "C"));
  questions.push(new Question("What does the PS in PSA stand for?", "A: Public Support", "B: Public Service", "C: Postal Service", "D: People support", "B"));
  questions.push(new Question("What is the french word for 'yes'?", "A: Oui", "B: Yo", "C: Owe", "D: Yes", "A"));
  questions.push(new Question("HD TVs are becoming more popular! What does HD stand for?", "A: High Definition", "B: High Division", "C: Hidden Dexterity", "D: Height Definition", "A"));
  questions.push(new Question("SpongeBob & Squidward work at which restaurant?", "A: Krusty Krab", "B: McRonald's", "C: Chum Bucket", "D: Sweet Jesus", "A"));
  questions.push(new Question("The Apollo 11 spacecraft was the first to land where?", "A: Mars", "B: Saturn", "C: Jupiter", "D: Moon", "D"));
  questions.push(new Question("What is the name of the giant screen that lots of stadiums have?", "A: Large Definition TV", "B: Jumbotron", "C: Jumbo TV", "D: HDTV", "B"));
  questions.push(new Question("Which artist wrote the song 'Girl on Fire'?", "A: Rihanna", "B: Alicia Keys", "C: Beyonce", "D: Mariah Carey", "B"));
  questions.push(new Question("Which Paris museum is the most visited in the world?", "A: Le Louvre", "B: Arc de Triomphe", "C: The Eiffel Tower", "D: Musee Picasso", "A"));
  questions.push(new Question("What is the term for sea level rise caused by warming of the ocean?", "A: Gasification", "B: Sea Tides", "C: Thermal Expansion", "D: Tide Roll", "C"));
  questions.push(new Question("When did the Renaissance occur?", "A: 8th-11th centuries", "B: 11th-14th centuries", "C: 14-17th centuries", "D: 17th-20th centuries", "C"));
  questions.push(new Question("What language does the word constellation come from?", "A: Greek", "B: Latin", "C: Old English", "D: French", "B"));
  questions.push(new Question("What is the largest constellation?", "A: Orion", "B: Lyra", "C: Cassiopeia", "D: Hydra", "D"));
  questions.push(new Question("What country's army did Joan of Arc lead?", "A: France", "B: Spain", "C: Portugal", "D: Argentina", "A"));
  questions.push(new Question("About how old was King Tutankhamun when he died?", "A: 17", "B: 19", "C: 21", "D: 23", "B"));
  questions.push(new Question("How old was Pablo Picasso when he had his first art exhibition?", "A: 12", "B: 13", "C: 14", "D: 15", "B"));
  questions.push(new Question("What does the word 'Islam' mean?", "A: The love of god", "B: One True God", "C: The grace of God", "D: Submission to the Will of God", "D"));
  questions.push(new Question("Which actress in Gossip Girl did Deadpool actor Ryan Reynolds marry?", "A: Leighton Meester", "B: Michelle Trachtenberg", "C: Taylor Momsen", "D: Blake Lively", "D"));
  questions.push(new Question("In 1993, Nirvana recorded a song named after a flower. Which one?", "A: Lotus", "B: Marigold", "C: Iris", "D: Gladiolus", "B"));
  questions.push(new Question("About how quickly do humans subconsciously determine if a person is 'right' for them?", "A: Within 21 minutes", "B: Within 11 minutes", "C: Within 3 minutes", "D: Within 45 seconds", "C"));
  questions.push(new Question("How many acts are in the play Romeo and Juliet?", "A: 3", "B: 5", "C: 6", "D: 8", "B"));
  questions.push(new Question("In the 1840s, who began selling the very first mass-produced valentines in the United States?", "A: Virginia Jacobs", "B: Esther A. Howland", "C: Kathleen Boland", "D: Emma Arsenault", "B"));
  questions.push(new Question("How did Cleopatra react to the death of her love, Mark Antony?", "A: She held a snake to her chest and allowed it to bite her.", "B: She stabbed herself.", "C: She drank poison.", "D: She ran away.", "A"));
  questions.push(new Question("What was the name of Queen Victoria's husband?", "A: Prince William", "B: Prince Albert", "C: Prince George", "D: Prince Henry", "B"));
  questions.push(new Question("What is the name of the valve located between the left atrium and the left ventricle?", "A: Aortic valve", "B: Mitral valve", "C: Pulmonary valve", "D: Tricuspid valve", "B"));
   
  
  // moneyTree
  
  var moneyTree = [0, 1000,  10000, 75000, 125000,  500000, 500000, 500000, 500000, 500000];
  let correctNumber = 0;
  
  let bankMoney = 0;
  if (sessionStorage) {
      bankMoney = sessionStorage.getItem("bankMoneySaved");
  }
  let bankBut = document.querySelector("#bankBut");
  
  let stopInterval;
  stopInterval = setInterval(count, 1000);
  let num = 90;
  
  let url = window.location.pathname;
  let filename = url.substring(url.lastIndexOf('/')+1);
  
  //save
  let saveBut = document.querySelector("#saveBut");
  
  let questionSection = document.querySelector("#question");
  let optionABut=document.querySelector("#optionA");
  let optionBBut=document.querySelector("#optionB");
  let optionCBut=document.querySelector("#optionC");
  let optionDBut=document.querySelector("#optionD");
  
  let qIndex = 0; 
  
  let isResumed = true;;
  if (sessionStorage) {
      isResumed = sessionStorage.getItem("isResumed");
      // alert(isResumed);
  }
  if (isResumed == true) {
      retrieveAll();	
  }
  
  function retrieveAll() {
      if (localStorage) {
          qIndex = localStorage.getItem("questionSaved");
          num = localStorage.getItem("timerSaved");
          currentStageAmt = parseInt(localStorage.getItem("currentAmtSaved"));
          // alert("current Stage Amt " + currentStageAmt);
          document.querySelector("#currentMT").innerHTML = currentStageAmt;
          bankMoney = parseInt(localStorage.getItem("bankAmtSaved"));
          // alert(" bank Amt " + bankMoney);
          document.querySelector("#bankMoney").innerHTML = bankMoney;
          correctNumber = localStorage.getItem("correctNumberSaved");
  
      }
      if (sessionStorage) {
          sessionStorage.setItem("bankMoneySaved", bankMoney);
      }	
  }
  
  
  bankBut.addEventListener("click", function(){
      let currentStageAmt = parseInt(document.querySelector("#currentMT").innerHTML);
      if (currentStageAmt == 0){
          alert(`You cannot bank money when you have $0`);
      }
      else {	
          //store money
          bankMoney = parseInt(bankMoney) + moneyTree[correctNumber];
          if (bankMoney > 1000000) {
              bankMoney = 1000000;
          }
          //reset money tree to zero
          correctNumber = 0;
          // var str = bankMoney;
          document.querySelector("#bankMoney").innerHTML = bankMoney;
          document.querySelector("#currentMT").innerHTML = 0;
          if (sessionStorage) {
              sessionStorage.setItem("bankMoneySaved", bankMoney);
          }
          if (bankMoney == 1000000) {
              clearInterval(stopInterval);
              alert("You've banked $1,000,000! You are moving on to the next round.");
              window.location.href="readyRound3.html";			
          }	
      }
  });
  
 
  // timer
  
  function count() {
    num--;
    document.querySelector("#timer").innerHTML = num;
    
      if (num == 0) {
          clearInterval(stopInterval);
          if (bankMoney > 0) {
              alert("Time is up! You are moving on to the next round.");
              window.location.href="readyRound3.html";
          }
          else {
              alert("Time is up! You lose the game since you do not have enough money in your bank.");
              window.location.href="GG.html";
          }
      }
  }
  
  saveBut.addEventListener("click", function() {
      if (localStorage) {
          localStorage.setItem("timerSaved", num);
          localStorage.setItem("questionSaved", qIndex);
          localStorage.setItem("filenameSaved", filename);
          currentStageAmt = parseInt(document.querySelector("#currentMT").innerHTML);
          localStorage.setItem("currentAmtSaved", currentStageAmt);
          localStorage.setItem("bankAmtSaved", bankMoney);
          localStorage.setItem("correctNumberSaved", correctNumber);
  
      }
      alert("Saved!");
  });
  
  function randomQuestionNum(arr, testArr) {
      let tempRandom = 0;
      let valid = true;
      do {
          do {
            tempRandom = Math.random();
                tempRandom = Math.floor(tempRandom * 100);
          } while (tempRandom > 24);
          
          for (let i = 0; i < testArr.length; i++) {
              if (tempRandom == testArr[i]) {
                  valid = false;
                  break;				
              } 
          }
      } while (valid == false);
      return tempRandom;
  }
  
  // new question prompt
  function randomQ() {
      document.querySelector("#bankMoney").innerHTML = bankMoney;
      let testArr = [];
      let corrAns = "";
  
      qIndex = randomQuestionNum(questions, testArr);
      if (isResumed == true) {
          if (localStorage) {
              qIndex = localStorage.getItem("questionSaved");
          }
          isResumed = sessionStorage.setItem("isResumed", false);
      }
      questionSection.innerHTML = questions[qIndex].question;
    
      optionABut.innerHTML = questions[qIndex].oA;
      optionBBut.innerHTML = questions[qIndex].oB;
      optionCBut.innerHTML = questions[qIndex].oC;
      optionDBut.innerHTML = questions[qIndex].oD;
      corrAns = questions[qIndex].answer;
      console.log(`correct answer: ${corrAns}`);
      console.log(`qIndex: ${qIndex}`);
  
      testArr.push(qIndex);
  
      if (bankMoney < 1000000) {    
          optionABut.onclick = function() {
              if (optionABut.value == corrAns) {
                  alert("correct");       
                  correctNumber++;
              }
              else {
                  alert("incorrect");
                  correctNumber = 0;
              }
              let str1 = moneyTree[correctNumber];
              document.querySelector("#currentMT").innerHTML = str1;
              //ask user if they want to bank the money
              randomQ();
          }
          optionBBut.onclick =  function() {
              if (optionBBut.value == corrAns) {
                  alert("correct");        
                  correctNumber++;
              }
              else {
                  alert("incorrect");	
         
                  correctNumber = 0;				
              }
              let str1 = moneyTree[correctNumber];
              document.querySelector("#currentMT").innerHTML = str1;
              randomQ();	
          }
          optionCBut.onclick = function() {
              if (optionCBut.value == corrAns) {
                  alert("correct");
                  correctNumber++;
              }
              else {
                  alert("incorrect");
        
                  correctNumber = 0;
              }
              let str1 = moneyTree[correctNumber];
              document.querySelector("#currentMT").innerHTML = str1;
              randomQ();
              
          }
          optionDBut.onclick = function() {
              if (optionDBut.value == corrAns) {
                  alert("correct");
                  correctNumber++;
              }
              else {
                  alert("incorrect");        
                  correctNumber = 0;
              }
          let str1 = moneyTree[correctNumber];
          document.querySelector("#currentMT").innerHTML = str1;
          randomQ();			
          }
  
      }
  
      else if (bankMoney >= 1000000) {
          clearInterval(stopInterval);
          alert("You've banked $1,000,000! You are moving on to the next round.");
          window.location.href="readyRound3.html";			
          }		
  }
  
  window.addEventListener("load", randomQ);
  

  