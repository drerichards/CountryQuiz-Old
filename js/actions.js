'use strict'
var scoreNumber = document.getElementById('scoreNumber');
var questionOne = document.getElementsByClassName('questionOne');
var questionTwo = document.getElementsByClassName('questionTwo');
var questionThree = document.getElementsByClassName('questionThree');
var questionFour = document.getElementsByClassName('questionFour');
var questionFive = document.getElementsByClassName('questionFive');
var wheel = "<img src='images/icon/wheel_icon.png' align='left'>";

var count = 0;
var aClick = false;
var bClick = false;
var cClick = false;
var dClick = false;
var questionLoadCount = 1;
var scoreCount = 0;
var correctFactArray = [];

function hideSections() {
    $('.factBlock').hide();
    $('.question').hide();
    $('.submitBtn').hide();
    $('.nextBtn').hide();
    $('.moreInfo').hide();
}

function loadQuestion(qFillerNum, qPlaceholder, qMarkerNum) {
    $(qPlaceholder).fadeIn(700).text(qMarkerNum);
    $('.flag').html('<img src=' + ((qFillerNum).flag) + ' />');
    $('.country_title').text((qFillerNum).title);
    $('.countryImg').html('<img src=' + ((qFillerNum).pic) + ' />');

    var factArray = [(qFillerNum).rightAnswers[0], (qFillerNum).rightAnswers[1],
        (qFillerNum).wrongAnswers[0], (qFillerNum).wrongAnswers[1]
    ];

    var randArray = [];
    var numOfRands = 4;
    var footerArray = [($('.factAlpha')), ($('.factBeta')), ($('.factCharlie')), ($('.factDelta'))];
    var r = factArray.length;

    function randIndexGen() {
        if (!randArray.length) {
            for (var i = 0; i < numOfRands; i++) {
                randArray.push(i);
            }
        }
        var index = Math.floor(Math.random() * randArray.length);
        var val = randArray[index];
        randArray.splice(index, 1);
        r--;
        footerArray[r].html(wheel + factArray[val]);
        if (val == 0 || val == 1) {
            (footerArray[r]).addClass('correctFact');
        } else if (val == 2) {
            (footerArray[r]).addClass('wrongFact0');
        } else if (val == 3) {
            (footerArray[r]).addClass('wrongFact1');
        }
    }
    for (var i = 0; i < numOfRands; i++) {
        randIndexGen();
    }
    $('.moreInfo').html('<li>' + (qFillerNum).addlInfo[0] + '</li><br>');
    $('.moreInfo').append('<li>' + (qFillerNum).addlInfo[1] + '</li>');
}

function resetClicks() {
    aClick,
    bClick,
    cClick,
    dClick = false;
    count = 0;
    $('.factBlock').removeClass('factSelection');
    correctFactArray = [];
}

function factValidator(factBlk) {
    if ($(factBlk).hasClass('correctFact')) {
        correctFactArray.push(true);
    }
}

function factBlockClick() {
    if (count > 2) {
        showAlert('Too Many Guesses:', 'Please select only TWO answers', 3000);
        resetClicks();
    }
}

function nextQuestionSetup() {
    resetClicks();
    $('.moreInfo li').remove();
    $('.nextBtn').hide().fadeOut(1000);
    $('.submitBtn').show().fadeIn(1000);
    $('.country_title').text('');
    $('#answerFeedback').text('???');
    $('.moreInfo').fadeOut(300);
    $('.factBlock').removeClass('correctFact wrongFact');
}

function showAlert(title, message, duration) {
    $('#alertBar').css('visibility', 'visible');
    $('#alertBar').append('<div class="w3-container w3-section w3-animate-top w3-orange"></div>');
    $('.submitBtn').attr('disabled', true);
    $('footer').fadeOut(100);
    setTimeout(function() {
        $('.w3-container').remove();
        $('.submitBtn').attr('disabled', false);
        $('footer').fadeIn(100);
    }, duration);
    console.log(correctFactArray);
    $('.w3-container').append('<span onclick="this.parentElement.style.display=\'none\'" class="w3-closebtn">&times;</span>');
    $('.w3-container').append('<h3>' + title + '</h3>');
    $('.w3-container').append('<p>' + message + '</p>');
}

$(document).ready(function() {
    hideSections();
    $('.playBtn').click(function() {
        $('.playBtn').fadeOut(1000);
        $('.submitBtn').fadeIn(1000);
        $('.factBlock').fadeIn(1000);
        $('#answerFeedback').text('???');
        loadQuestion(question1, questionOne, 1);
    });

    $('.factAlpha').click(function() {
        $(this).toggleClass('factSelection');
        if ($(this).hasClass('factSelection')) {
            aClick = true;
            count++;
        } else {
            aClick = false;
            count--;
        }
        factValidator('.factAlpha');
        factBlockClick();
    });

    $('.factBeta').click(function() {
        $(this).toggleClass('factSelection');
        if ($(this).hasClass('factSelection')) {
            bClick = true;
            count++;
        } else {
            bClick = false;
            count--;
        }
        factValidator('.factBeta');
        factBlockClick();
    });

    $('.factCharlie').click(function() {
        $(this).toggleClass('factSelection');
        if ($(this).hasClass('factSelection')) {
            cClick = true;
            count++;
        } else {
            cClick = false;
            count--;
        }
        factValidator('.factCharlie');
        factBlockClick();
    });

    $('.factDelta').click(function() {
        $(this).toggleClass('factSelection');
        if ($(this).hasClass('factSelection')) {
            dClick = true;
            count++;
        } else {
            dClick = false;
            count--;
        }
        factValidator('.factDelta');
        factBlockClick();
    });

    $('.submitBtn').click(function() {
        if (count == 2) {
            if (correctFactArray.length == 2) {
                $('#answerFeedback').text('You\'re Right!');
                $('.markerOne').append('<img src="images/icon/check.png">');
                scoreCount += 20;
            } else if (correctFactArray.length <= 1) {
                $('#answerFeedback').text('Sorry!');
                $('.markerOne').append('<img src="images/icon/ex.png">');
            } else {
                $('#answerFeedback').text('Error');
            }

            if (scoreCount == 100) {
                scoreNumber.style.color = '#00C8DE';
            } else if (scoreCount >= 60) {
                scoreNumber.style.color = '#1ADB61';
            } else {
                scoreNumber.style.color = '#fff';
            }
            $('.moreInfo').fadeIn(300);
            $('.submitBtn').fadeOut(1000);
            $('.nextBtn').fadeIn(1000);
            questionLoadCount++;

            $(scoreNumber).text(scoreCount);
        } else if (count == 0) {
            showAlert('Missing Input:', 'Please make your first selection', 3000);
        } else if (count < 2) {
            showAlert('Missing Input:', 'Please make a second selection', 3000);
        }
    });

    $('.nextBtn').click(function() {
        nextQuestionSetup();
        switch (questionLoadCount) {
            case 2:
                loadQuestion(question2, questionTwo, 2);
                break;
            case 3:
                loadQuestion(question3, questionThree, 3);
                break;
            case 4:
                loadQuestion(question4, questionFour, 4);
                break;
            case 5:
                loadQuestion(question5, questionFive, 5);
                break;
            case 6:
                $('.submitBtn').fadeOut(500);
                $('.questionMarker').fadeOut(500);
                $('.flag').fadeOut(1000);
                if (scoreCount == 100) {
                    showAlert('Your score: '+scoreCount+'%', 'You\'re a World Class Traveler!!!<br>Thanks For Playing!', 30000);
                } else if ((scoreCount >= 60) && (scoreCount < 100)) {
                    showAlert('Your score: '+scoreCount+'%', 'Not too shabby, Geo Wiz!<br>Thanks For Playing!', 30000);
                } else {
                    showAlert('Your score: '+scoreCount+'%', 'Time to brush up on Geography maybe?<br>Thanks For Playing!', 30000);
                }
                $('.country_title').text('Great Job!');
                $('.countryImg').fadeOut(1000);
                $('.factBlock').fadeOut(1000);
                setTimeout(function () {
                    location.reload(true);
                }, 30000);
        }
    });

    $('.legend_icon').click(function() {
        $('.infoBox > p').toggle(700);
    });

});
