/**
 * Used to register helper for Handlebars.js templating system
 */

/**
 * Can use html with templating systeme
 */
Handlebars.registerHelper('hasHTML', function (text, url)
{ 
	return new Handlebars.SafeString(text);
});

/**
 * Retrieve true answer from all the aswer possible in the array of answer for a question 
 */
Handlebars.registerHelper('trueAnswer', function (answers)
{
    var trueAnswer = '', i;
    for (i = 0; i < answers.length; i++) {
        if(answers[i].secret == "true"){
            trueAnswer = answers[i].text;
            break;
        }
    };
    return trueAnswer;
});
