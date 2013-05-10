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
