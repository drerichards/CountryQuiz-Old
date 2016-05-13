'use strict'
var score = document.getElementById('score');
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
var playBtn = document.getElementsByClassName('playBtn');
var submitBtn = document.getElementsByClassName('submitBtn');
var nextBtn = document.getElementsByClassName('nextBtn');
var moreInfo = document.getElementsByClassName('moreInfo');
var countryImg = document.getElementsByClassName('countryImg');
var factAlpha = document.getElementsByClassName('factAlpha');
var factBeta = document.getElementsByClassName('factBeta');
var factCharlie = document.getElementsByClassName('factCharlie');
var factDelta = document.getElementsByClassName('factDelta');


var count=0;
var aClick=false;
var bClick=false;
var cClick=false;
var dClick=false;


function hideSections() {
  $(factBlock).hide();
  $(question).hide();
  $(submitBtn).hide();
  $(nextBtn).hide();
  $(moreInfo).hide();
}

function loadQuestionOne() {
  $(questionOne).show();
  $(flag).append('<img src='+(question1.flag)+' />')
  $(country_title).text(question1.title);
  $(countryImg).append('<img src='+(question1.pic)+' />');
  $(factAlpha).append(question1.rightAnswers[0]);
  $(factBeta).append(question1.rightAnswers[1]);
  $(factCharlie).append(question1.wrongAnswers[0]);
  $(factDelta).append(question1.wrongAnswers[1]);
  $(moreInfo).append('<li>'+question1.addlInfo[0]+'</li>');
  $(moreInfo).append('<li></li>');
  $(moreInfo).append('<li>'+question1.addlInfo[1]+'</li>');
}

function loadQuestionTwo() {
  $(questionTwo).show();
  $(flag).append('<img src='+(question2.flag)+' />')
  $(country_title).text(question2.title);
  $(countryImg).append('<img src='+(question2.pic)+' />');
  $(factAlpha).append(question2.rightAnswers[0]);
  $(factBeta).append(question2.rightAnswers[1]);
  $(factCharlie).append(question2.wrongAnswers[0]);
  $(factDelta).append(question2.wrongAnswers[1]);
}

function loadQuestionThree() {
  $(questionThree).show();
  $(flag).append('<img src='+(question3.flag)+' />')
  $(country_title).text(question3.title);
  $(countryImg).append('<img src='+(question3.pic)+' />');
  $(factAlpha).append(question3.rightAnswers[0]);
  $(factBeta).append(question3.rightAnswers[1]);
  $(factCharlie).append(question3.wrongAnswers[0]);
  $(factDelta).append(question3.wrongAnswers[1]);
}

function loadQuestionFour() {
  $(questionFour).show();
  $(flag).append('<img src='+(question4.flag)+' />')
  $(country_title).text(question4.title);
  $(countryImg).append('<img src='+(question4.pic)+' />');
  $(factAlpha).append(question4.rightAnswers[0]);
  $(factBeta).append(question4.rightAnswers[1]);
  $(factCharlie).append(question4.wrongAnswers[0]);
  $(factDelta).append(question4.wrongAnswers[1]);
}

function loadQuestionFive() {
  $(questionFive).show();
  $(flag).append('<img src='+(question5.flag)+' />')
  $(country_title).text(question5.title);
  $(countryImg).append('<img src='+(question5.pic)+' />');
  $(factAlpha).append(question5.rightAnswers[0]);
  $(factBeta).append(question5.rightAnswers[1]);
  $(factCharlie).append(question5.wrongAnswers[0]);
  $(factDelta).append(question5.wrongAnswers[1]);
}

function resetClicks() {
  aClick=false;
  bClick=false;
  cClick=false;
  dClick=false;
  count=0;
}

function factBlockClick() {
  count++;
  if (count > 2){
    alert('Please select only TWO answers');
    resetClicks();
    $(factBlock).removeClass('factSelection');
  }
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

  $(factAlpha).click(function (event) {
    aClick=true;
    $(this).addClass('factSelection');
    factBlockClick();
  });

  $(factBeta).click(function (event) {
    bClick=true;
    $(this).addClass('factSelection');
    factBlockClick();
  });

  $(factCharlie).click(function (event) {
    cClick=true;
    $(this).addClass('factSelection');
    factBlockClick();
  });

  $(factDelta).click(function (event) {
    dClick=true;
    $(this).addClass('factSelection');
    factBlockClick();
  });

  $('.submitBtn').click(function () {
    if (count == 2){
      if (aClick == true && bClick == true){
          $(answerFeedback).text('You\'re Right!');
         resetClicks();
         $(moreInfo).show();
         $(submitBtn).hide();
         $(nextBtn).show();
         $(factBlock).removeClass('factSelection');
       } else if(cClick == true || dClick == true) {
           $(answerFeedback).text('Sorry!');
           resetClicks();
           $(moreInfo).show();
           $(submitBtn).hide();
           $(nextBtn).show();
           $(factBlock).removeClass('factSelection');
         }
    } else if (count == 0){
        alert('Please make your first selection');
      } else if (count <2){
            alert('Please make a second selection');
          }
  });

  $('.legend_icon').click(function () {

  });

});
