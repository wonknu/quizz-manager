quizz-manager
============

Description
---------------------

Quizz manager made using *javascript / html / css*


Dependencies
---------------------

+ [jQuery](http://jquery.com/) version 1.9.1
+ [handlebars](http://handlebarsjs.com/) version 1.0


Documentation
---------------------

__Set up a quizz__

check : *quizz-manager/app/scripts/app.js*

```javascript
new QuestionManager({ name : 'quizz' });
```

This will create a quizz instance.
It takes an object as parameter, the only parameter on this object is the name of the quizz which is also the name of the file without any extension.

But the file must be a JSON file :
+ See *quizz-manager/data/quizz.json* to get to see how is the json made up


__Modifying default configuration__

check : *quizz-manager/app/scripts/utils/static.js* which keep url, custom events.

If you keep the same folder structure you only need to change on thing :

```javascript
AJAX  : 'http://localhost/github/quizz-manager/'
```

Because it was my working space for this tiny project.


Want more
---------------------

The project is small and there are some easy way to improved it.

__Make transition between question__

The best way to get this job done would be to make it on that file *quizz-manager/app/scripts/utils/loader.js*
by adding new parameters to the constructor, for exemple a transition parameter which would call [jQuery animate function](http://api.jquery.com/animate/)
There are many other solutions, but that would be a fine one.

__You can use html to get rendered by handlebars__

Sometime you'd like to have a quizz that ask to choose between images, videos ...
check : *quizz-manager/app/scripts/utils/templating.js*
and : *quizz-manager/app/templates/question.html*

That's right handlebars already is aware that question can have html formated content
