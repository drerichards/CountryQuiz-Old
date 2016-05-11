'use strict'
var score = document.getElementById('score');
var answerFeedback = document.getElementById('answerFeedback');
var factBlock = document.getElementsByClassName('factBlock');
var flag = document.getElementsByClassName('flag');
var country_title = document.getElementsByClassName('country_title');
var question = document.getElementsByClassName('question');
var questionOne = document.getElementsByClassName('one');
var questionTwo = document.getElementsByClassName('two');
var questionThree = document.getElementsByClassName('three');
var questionFour = document.getElementsByClassName('four');
var questionFive = document.getElementsByClassName('five');
var playBtn = document.getElementsByClassName('playBtn');
var submitBtn = document.getElementsByClassName('submitBtn');
var moreInfo = document.getElementsByClassName('moreInfo');

function hideSections() {
  $(factBlock).hide();
  $(question).hide();
  $(submitBtn).hide();
  $(moreInfo).hide();
}

function loadQuestionOne() {
  $(flag).append('<img src='+(question1.flag)+' />')
  $(country_title).text(question1.title);
  $()
}

$(document).ready(function() {
  hideSections();


  $('.playBtn').click(function () {
    $(playBtn).hide();
    $(submitBtn).show();
    $(factBlock).show();
    $(questionOne).show();
    loadQuestionOne();
    // $(questionTwo).show();

    // $(score).text('Score: ');
    $(answerFeedback).text('Make Your Picks');
  });

  $('.legend_icon').click(function () {

  });

});
