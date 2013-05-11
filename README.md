quizz-manager
============

Description
---------------------

Quizz manager made using javascript / html / css


Dependencies
---------------------

+ [jQuery](http://jquery.com/) version 1.9.1
+ [handlebars](http://handlebarsjs.com/) version 1.0


Documentation
---------------------

**Set up a quizz**

check : quizz-manager/app/scripts/app.js

```javascript
new QuestionManager({ name : 'quizz' });
```

This will create a quizz instance.
It takes an object as parameter, the only parameter on this object is the name of the quizz which is also the name of the file without any extension.

But the file must be a JSON file :
+ See quizz-manager/data/quizz.json to get to see how is the json made up


**Modifying default configuration**

check : quizz-manager/app/scripts/utils/static.js which keep url, custom events.

If you keep the same folder structure you only need to change on thing :

```javascript
AJAX  : 'http://localhost/github/quizz-manager/'
```


