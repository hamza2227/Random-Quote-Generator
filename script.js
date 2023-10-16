window.onload = function () {

    getRandomQuote();

}

function getRandomQuote() {

    var quote_btn = document.getElementById("quote_btn");

    quote_btn.onclick = () => {

        var randomQuoteArray = [
            "Your attitude determines your direction.",
            "Dream big, work hard, stay focused, and surround yourself with good people.",
            "The only way to achieve the impossible is to believe it is possible.",
            "Your life does not get better by chance, it gets better by change.",
            "Opportunities don't happen, you create them.",
            "Success is not just about making money. It's about making a difference.",
            "The best way to predict the future is to create it.",
            "Don't watch the clock; do what it does. Keep going.",
            "Your time is limited, don't waste it living someone else's life.",
            "Strive not to be a success, but rather to be of value.",
            "Don’t wait for the perfect moment, take the moment and make it perfect.",
            "The difference between a stumbling block and a stepping stone is how you use it.",
            "Your life is your message to the world. Make sure it’s inspiring.",
            "Success is not in what you have, but who you are.",
            "The only way to do great work is to love what you do.",
            "Believe you can and you're halfway there.",
            "Life is 10% what happens to us and 90% how we react to it.",
        ]

        var random_quote = document.getElementById("random_quote");

        var rand = Math.floor(Math.random()*16);

        random_quote.textContent = "\""+randomQuoteArray[rand]+"\""; 

    }

}