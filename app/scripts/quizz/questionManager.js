/**
 * @author Wonknu
 *
 * pattern : Revealing module
 * Object which create / manage quizz
 */
(function ()
{ 'use strict';
	this.QuestionManager = (function ()
	{
  	
	    /**
	     * Constructor
	     * @param o, o.name -> file name for the json & also name of the quizz
	     */
		function QuestionManager (o)
		{
	        this.opt = {
	        	name : ''
	        };
			$.extend(true, this.opt, o);
			
			this.data = null;
			this.currentQuestion = -1;
			this.arrAnswer = [];
			this.arrAnswerText = [];
			this.score = 0;
			
			this.loadJSON();
	    }
	    
	    /**
	     * Load all question for a Quizz
	     */
	    QuestionManager.prototype.loadJSON = function ()
	    {
        	var _this = this,
        		jqxhr = $.ajax({
                url     : STATIC.PATH.QUIZZ + this.opt.name + '.json',
                type    : 'GET',
			    dataType: 'json',
			    async	: false
            })
            .done(function (data)
            {
            	_this.data = data.questions;
            })
            .fail(function (xhr, ajaxOptions, thrownError)
            {
            	if(_this.data == null) _this.data = { error : true };
            })
            .always(function ()
            {
                if(notNull(_this.data.error)) return;
            	$(window).on(STATIC.EVENTS.QUIZZ_ANSWERED, function (evt, el)
            	{
            		_this.displayQuestion(el);
            	});
            	$(window).trigger(STATIC.EVENTS.QUIZZ_ANSWERED, [null]);
            });
	    };
		
	    /**
	     * Go to next question
	     * @param el, current question object
	     */
	    QuestionManager.prototype.displayQuestion = function (el)
	    {
	    	if(notNull(el)){
	    		this.arrAnswer.push(el.attr('data-secret'));
	    		this.arrAnswerText.push(el.text());
	    	}
	    	
	    	if(!notNull(this.data[++this.currentQuestion])) {
	    		$(window).off(STATIC.EVENTS.QUIZZ_ANSWERED);
	    		for (var i=0; i < this.arrAnswer.length; i++)
					if(this.arrAnswer[i] == "true") this.score++;
	    		this.displayResult();
	    		return;
	    	}
	    	var currentData = this.data[this.currentQuestion];
	    	currentData.current = 'Question ' + (this.currentQuestion + 1) + '/' + this.data.length;
	    	currentData.title = 'Quizz ' + this.opt.name;
	    	currentData.btn = 'next';
	        new Question(currentData);
	    };
		
		/*
		 * Display result page with score ...
		 */
	    QuestionManager.prototype.displayResult = function ()
	    {
			// NOW YOU CAN SEVE THE SCORE -> this.score
			
			var _this = this,
				data = {
					title : "Quizz is over!",
					btn : "See answers",
					score : "Your score is " + (this.score + "/" + this.data.length),
					congratulation : "Nice you've competed the quizz"
				};
				
        	new Loader( STATIC.PATH.PAGES + "result.html",
                        $('.container-quizz'),
                        data,
                        function ()
                        {
							_this.listenBtnAnswer();
                        }
            );
	    };
	    
	    /**
	     * Listen for user asking to see answers for each question
	     * Also his own answer versus the true answer
	     */
	    QuestionManager.prototype.listenBtnAnswer = function ()
	    {
			var _this = this;
	    	$('.btn-result').on('click', function (e)
	    	{
	    		e.preventDefault();
	    		for (var i=0; i < _this.data.length; i++) {
					_this.data[i].arrAnswer = _this.arrAnswer[i];
					_this.data[i].arrAnswerText = _this.arrAnswerText[i];
				};
	        	new Loader( STATIC.PATH.PAGES + "see-answers.html",
	                        $('.container-quizz'),
	                        {
	                        	title : 'Quizz answers :',
	                        	result : _this.data,
	                        	btnevent : window.location.replace("#", ""),
	                        	btn : 'Play again ?'
	                        },
	                        function ()
	                        {
								
	                        }
	            );
	    	});
	    };
	    
	    return QuestionManager;

	})();

}).call(this);
