
$(document).ready(function(){

    // ------------------------------------ variables 

    const loader = $('#loader');
    const result = $('#result');
    const resultGif = $('#resultGif');
    const resultTitle = $('#resultTitle');
    const resultTxt = $('#resultTxt');
    const resultDescription = $('#resultDescription');
    const resultFeedback = $('#resultFeedback');
    const feedbackOptions = $('#feedbackOptions');
    const allFeedbackIcons = $('#feedbackOptions i');
    const btnGoBackHome = $('#btnGoBackHome');
    
    const savedResult = JSON.parse(window.localStorage.getItem('RESULT'));

    // ------------------------------------ FIRST LOAD 
    
    if(savedResult) {
        getGif('ZdNlmHHr7czumQPvNE');
        resultTitle.text(`Congrats!`);
        resultTxt.html(`You are a <span>${savedResult.role}</span> at heart!`);
        resultDescription.text(`${savedResult.description}`);
    } else {
        getGif('h2TL9kJUgFoaeuEVR9');
        resultTitle.text(`Sorry`);
        resultTxt.text(`Something went wrong`);
    }

    addFeedback(allFeedbackIcons);

    // ------------------------------------ events

    btnGoBackHome.on('click', goBackHome);
    
    // ------------------------------------ functions 

    function getGif(gifID) {
        $.ajax({
            type: 'GET',
            url: `https://api.giphy.com/v1/gifs/${gifID}?api_key=CYW3EuyjrCi3vADzppFkwvvgdyierAxf`,
            dataType: 'json',
            beforeSend: (xhr) => {
                loader.show();
                result.hide();
            },
            success: (res) => {
                const { data: {title}, data: {images: {original: {url}}} } = res;
                const img = $('<img>').attr({
                        'src' : url,
                        'alt' : title,
                        'class' : 'result__gif'
                    });
                resultGif.append(img);
            },
            error: (error) => {
                resultGif.remove();
            }, 
            complete: (xhr) => {
                loader.hide();
                result.show();
            }
        });
    }  

    function addFeedback(elementsArray) {
        elementsArray.each((index, element) => {
            $(element).click(sayThanks);
        });
    }

    function sayThanks() {
        feedbackOptions.remove();
        resultFeedback.html(`<div>Thank you so much for your feedback!</div>`);
    }

    function goBackHome() {
        window.location.href = "../index.html";
    }

});

