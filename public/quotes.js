const getQuote = () => {
    var quotes = [
        {
            quote: "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
            name: "Ada Lovelace"
        },
        {
	    	quote: "All problems in computer science can be solved by another level of indirection. But that usually will create another problem.",
	    	name: "David Wheeler"
        },
        {
	    	quote: "A day without sunshine is like, you know, night.",
	    	name: "Steve Martin"
        },
        {
	    	quote: "Always do whatever's next.",
	    	name: "George Carlin"
        },
        {
	    	quote: "Always remember that you are absolutely unique. Just like everyone else.",
	    	name: "Margaret Mead"
        },
        {
	    	quote: "Don't watch the clock; do what it does. Keep going.",
	    	name: "Sam Levenson"
        },
        {
	    	quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name: "Thomas A. Edison"
        },
        {
            quote: "Simplicity is prerequisite for reliability.",
            name: "Edsger Dijkstra"
        },
        {
            quote: "If we wish to count lines of code, we should not regard them as ‘lines produced’ but as ‘lines spent.",
            name: "Edsger Dijkstra"
        },
        {
            quote: "It’s harder to read code than to write it.",
            name: "Joel Spolsky"
        },
        {
            quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            name: "Martin Fowler"
        },
        {
            quote: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
            name: "Leon Bambrick"
        },
        {
            quote: "Don’t repeat yourself. Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.",
            name: "Andy Hunt and Dave Thomas"
        },
    ]
    var quoteArrayLength = quotes.length

    //gets random quote from quotes array
    var randomNumber= Math.floor(Math.random()*quoteArrayLength)
    var newQuote = '"' + quotes[randomNumber].quote + '"'
    var newName = quotes[randomNumber].name
    
    //displays the new random quote and name
    document.getElementById('quote').innerText = newQuote
    document.getElementById('name').innerText = newName
}

//onclick function for the refresh button
const rotate = () => {
    document.getElementById('refresh').classList.add('rotation')
    setTimeout(
        function(){
        document.getElementById('refresh').classList.remove('rotation')
    }, 1400)

    getQuote()
    
}

//gets quote on page load
getQuote()
