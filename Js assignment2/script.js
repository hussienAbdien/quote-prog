var quote=[`<h3>"Be yourself; everyone else is already taken."</h3>
                <h4>Oscar Wilde</h4>`,
           `<h3>"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't 
           handle me at my worst, then you sure as hell don't deserve me at my best."</h3><h4>Marilyn Monroe </h4>`,
           
           `<h3>"Two things are infinite: the universe and human
            stupidity; and I'm not sure about the universe."</h3><h4>Albert Einstein</h4>`,

           `<h3>"A room without books is like a body without a soul." </h3><h4> Marcus Tullius Cicero </h4>`,

           `<h3>"You've gotta dance like there's nobody watching,
           Love like you'll never be hurt,
           Sing like there's nobody listening,
           And live like it's heaven on earth." </h3><h4>William W. Purkey</h4>`,

           `<h3>"You only live once, but if you do it right, once is enough." </h3><h4> Mae West </h4>`,

           `<h3>"Be the change that you wish to see in the world." </h3><h4>Mahatma Gandhi </h4>`,
           `<h3>"In three words I can sum up everything I've learned about life: it goes on."</h3><h4> Robert Frost </h4>`,
           `<h3>"If you tell the truth, you don't have to remember anything."</h3><h4>Mark Twin</h4>`,

           `<h3>"Friendship ... is born at the moment when one man says 
           to another "What! You too? I thought that no one but myself . . ." </h3><h4>C.S. Lewis, The Four Loves </h4>`,

           `<h3>"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."</h3><h4> J.K. Rowling, Harry Potter</h4>`,
           ];



function displayQuote(){
var randoNumber = Math.floor(Math.random()*(quote.length));

        document.getElementById("demo").innerHTML=quote[randoNumber];
    
}
