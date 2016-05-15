'use strict'
var scoreText = document.getElementById('scoreText');
var scoreNumber = document.getElementById('scoreNumber');
var answerFeedback = document.getElementById('answerFeedback');
var factBlock = document.getElementsByClassName('factBlock');
var flag = document.getElementsByClassName('flag');
var country_title = document.getElementsByClassName('country_title');
var question = document.getElementsByClassName('question');
var questionOne = document.getElementsByClassName('questionOne');
var questionTwo = document.getElementsByClassName('questionTwo');
var questionThree = document.getElementsByClassName('questionThree');
var questionFour = document.getElementsByClassName('questionFour');
var questionFive = document.getElementsByClassName('questionFive');
var marker = document.getElementsByClassName('marker');
var markerOne = document.getElementsByClassName('markerOne');
var markerTwo = document.getElementsByClassName('markerTwo');
var markerThree = document.getElementsByClassName('markerThree');
var markerFour = document.getElementsByClassName('markerFour');
var markerFive = document.getElementsByClassName('markerFive');
var playBtn = document.getElementsByClassName('playBtn');
var submitBtn = document.getElementsByClassName('submitBtn');
var nextBtn = document.getElementsByClassName('nextBtn');
var infoBox = document.getElementsByClassName('infoBox');
var moreInfo = document.getElementsByClassName('moreInfo');
var countryImg = document.getElementsByClassName('countryImg');
var factAlpha = document.getElementsByClassName('factAlpha');
var factBeta = document.getElementsByClassName('factBeta');
var factCharlie = document.getElementsByClassName('factCharlie');
var factDelta = document.getElementsByClassName('factDelta');


var count=0;
var aCount=0;
var bCount=0;
var cCount=0;
var dCount=0;
var aClick=false;
var bClick=false;
var cClick=false;
var dClick=false;
var questionLoadCount = 1;
var scoreCount = 0;


function hideSections() {
  $(factBlock).hide();
  $(question).hide();
  $(submitBtn).hide();
  $(nextBtn).hide();
  $(moreInfo).hide();
}

function loadQuestionOne() {
  $(questionOne).show().text('1');
  $(flag).html('<img src='+(question1.flag)+' />')
  $(country_title).text(question1.title);
  $(countryImg).html('<img src='+(question1.pic)+' />');
  $(factAlpha).html(question1.rightAnswers[0]);
  $(factBeta).html(question1.rightAnswers[1]);
  $(factCharlie).html(question1.wrongAnswers[0]);
  $(factDelta).html(question1.wrongAnswers[1]);
  $(moreInfo).html('<li>'+question1.addlInfo[0]+'</li>');
  $(moreInfo).html('<li>'+question1.addlInfo[1]+'</li>');
}

function loadQuestionTwo() {
  $(questionTwo).show().text('2');
  $(flag).html('<img src='+(question2.flag)+' />')
  $(country_title).text(question2.title);
  $(countryImg).html('<img src='+(question2.pic)+' />');
  $(factAlpha).html(question2.rightAnswers[0]);
  $(factBeta).html(question2.rightAnswers[1]);
  $(factCharlie).html(question2.wrongAnswers[0]);
  $(factDelta).html(question2.wrongAnswers[1]);
  $(moreInfo).html('<li>'+question2.addlInfo[0]+'</li>');
  $(moreInfo).html('<li>'+question2.addlInfo[1]+'</li>');
}

function loadQuestionThree() {
  $(questionThree).show().text('3');
  $(flag).html('<img src='+(question3.flag)+' />')
  $(country_title).text(question3.title);
  $(countryImg).html('<img src='+(question3.pic)+' />');
  $(factAlpha).html(question3.rightAnswers[0]);
  $(factBeta).html(question3.rightAnswers[1]);
  $(factCharlie).html(question3.wrongAnswers[0]);
  $(factDelta).html(question3.wrongAnswers[1]);
  $(moreInfo).html('<li>'+question3.addlInfo[0]+'</li>');
  $(moreInfo).html('<li>'+question3.addlInfo[1]+'</li>');
}

function loadQuestionFour() {
  $(questionFour).show().text('4');
  $(flag).html('<img src='+(question4.flag)+' />')
  $(country_title).text(question4.title);
  $(countryImg).html('<img src='+(question4.pic)+' />');
  $(factAlpha).html(question4.rightAnswers[0]);
  $(factBeta).html(question4.rightAnswers[1]);
  $(factCharlie).html(question4.wrongAnswers[0]);
  $(factDelta).html(question4.wrongAnswers[1]);
  $(moreInfo).html('<li>'+question4.addlInfo[0]+'</li>');
  $(moreInfo).html('<li>'+question4.addlInfo[1]+'</li>');
}

function loadQuestionFive() {
  $(questionFive).show().text('5');
  $(flag).html('<img src='+(question5.flag)+' />')
  $(country_title).text(question5.title);
  $(countryImg).html('<img src='+(question5.pic)+' />');
  $(factAlpha).html(question5.rightAnswers[0]);
  $(factBeta).html(question5.rightAnswers[1]);
  $(factCharlie).html(question5.wrongAnswers[0]);
  $(factDelta).html(question5.wrongAnswers[1]);
  $(moreInfo).html('<li>'+question5.addlInfo[0]+'</li>');
  $(moreInfo).html('<li>'+question5.addlInfo[1]+'</li>');
}

function resetClicks() {
  aClick=false;
  bClick=false;
  cClick=false;
  dClick=false;
  count=0;
  $(factBlock).removeClass('factSelection');
}

function duplicateClick() {
  if (aCount > 1){
    $(factAlpha).removeClass('factSelection');
    aCount=0;
    aClick=false;
    count=1;
  }

  if (bCount > 1){
    $(factBeta).removeClass('factSelection');
    bCount=0;
    bClick=false;
    count=1;
  }

  if (cCount > 1){
    $(factCharlie).removeClass('factSelection');
    cCount=0;
    cClick=false;
    count=1;
  }

  if (dCount > 1){
    $(factDelta).removeClass('factSelection');
    dCount=0;
    dClick=false;
    count=1;
  }
}

function factBlockClick() {
  count++;
  if (count > 3){
    alert('Please select only TWO answers');
    resetClicks();
  }
}

function nextQuestionSetup() {
  resetClicks();
  $(nextBtn).hide();
  $(submitBtn).show();
  $(country_title).text('');
  $(answerFeedback).text('???');
  $(moreInfo).hide();
}

$(document).ready(function() {
  hideSections();

  $('.playBtn').click(function () {
    $(playBtn).hide();
    $(submitBtn).show();
    $(factBlock).show();
    $(answerFeedback).text('???');
    loadQuestionOne();
  });

  $(factAlpha).click(function () {
    aClick=true;
    aCount++;
    $(this).addClass('factSelection');
    factBlockClick();
    duplicateClick();
  });

  $(factBeta).click(function () {
    bClick=true;
    bCount++;
    $(this).addClass('factSelection');
    factBlockClick();
    duplicateClick();
  });

  $(factCharlie).click(function () {
    cClick=true;
    cCount++;
    $(this).addClass('factSelection');
    factBlockClick();
    duplicateClick();
  });

  $(factDelta).click(function () {
    dClick=true;
    dCount++;
    $(this).addClass('factSelection');
    factBlockClick();
    duplicateClick();
  });

  $('.submitBtn').click(function () {
    if (count == 2){
      if (aClick == true && bClick == true){
         $(answerFeedback).text('You\'re Right!');
         $(markerOne).append('<img src="images/icon/check.png">');
         $(moreInfo).show();
         $(submitBtn).hide();
         $(nextBtn).show();
         questionLoadCount++;
         scoreCount+=20;
       } else {
           $(answerFeedback).text('Sorry!');
           $(markerOne).append('<img src="images/icon/ex.png">');
           $(moreInfo).show();
           $(submitBtn).hide();
           $(nextBtn).show();
           questionLoadCount++;
           scoreCount-=20;
         }
         if (scoreCount == 100){
           scoreNumber.style.color = '#1ADB61';
         } else if (scoreCount >= 0){
            scoreNumber.style.color = '#fff';
            } else{
                scoreNumber.style.color = '#DB1A1A';
         }
         $(scoreNumber).text(scoreCount);
    } else if (count == 0){
        alert('Please make your first selection');
      } else if (count <2){
          alert('Please make a second selection');
        }
  });

  $('.nextBtn').click(function () {
    nextQuestionSetup();
    switch (questionLoadCount) {
      case 2:
        loadQuestionTwo();
        $(questionTwo).show();
      break;
      case 3:
        loadQuestionThree();
        $(questionThree).show();
      break;
      case 4:
        loadQuestionFour();
        $(questionFour).show();
      break;
      case 5:
        loadQuestionFive();
        $(questionFive).show();
        //  will show results
      break;
      case 6:
        $(submitBtn).hide();
        $(playBtn).show();
        $(questionMarker).hide();
        resetClicks();
        scoreCount = 0;
        $(scoreCount).text('0');


    }

  });

  $('.legend_icon').click(function () {
    $(infoBox).append('<p>Test your knowledge of the world by choosing from the four answers below. Which TWO facts about the shown country are not facts at all? Choose wisely and Win!</p>');
  });

});
