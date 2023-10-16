window.onload = () => {

    getRandomQuote();

}

function getRandomQuote() {

    var quote_btn = document.getElementById("quote_btn");

    quote_btn.onclick = () => {

        var randomQuoteArray = [

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
            "Every morning brings new potential, but only if you make the most of it.",
            "Success is not just a destination; it's a journey of continuous effort.",
            "Embrace the challenges of today, they will become the strength you need for tomorrow.",
            "In the middle of difficulty lies opportunity.",
            "Your dreams don't work unless you do.",
            "The best way to predict your future is to create it.",
            "The only limit to our realization of tomorrow will be our doubts of today.",
            "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
            "Hard work beats talent when talent doesn't work hard.",
            "Believe in the magic of new beginnings.",
            "The only thing standing between you and your goal is the story you keep telling yourself.",
            "Every accomplishment starts with the decision to try.",
            "Your attitude determines your direction.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Your life is your story, write well, edit often.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Every day may not be good, but there's something good in every day.",
            "Be a voice, not an echo.",
            "The harder you work for something, the greater you'll feel when you achieve it.",
            "Difficulties in life are intended to make us better, not bitter.",

        ]

        var random_quote = document.getElementById("random_quote");

        var rand = Math.floor(Math.random() * 37);

        random_quote.textContent = "\"" + randomQuoteArray[rand] + "\"";

    }

}