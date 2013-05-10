/**
 * @author Wonknu
 *
 * pattern : Revealing module
 * Object which is a question in the whole quizz
 */
(function ()
{ 'use strict';
	this.Question = (function ()
	{
  	
	    /**
	     * Constructor
	     * @param {Object} o, o.id = id of the question
	     */
		function Question (o)
		{
	        this.opt = {
	        	id : -1
	        };
			$.extend(true, this.opt, o);
			
			this.selected = null;
			this.display();
	    }
	    
	    /**
	     * Display a question 
	     */
	    Question.prototype.display = function ()
	    {
			var _this = this;
        	new Loader( STATIC.PATH.PAGES + "question.html",
                        $('.container-quizz'),
                        this.opt,
                        function ()
                        {
							_this.initListener();
                        }
            );
	    };
	    
	    /**
	     * Add listener to check when user has make hes choice and answered this current question
	     */
	    Question.prototype.initListener = function ()
	    {
			var _this = this;
	    	$('.answer a').on('click', function (e)
	    	{
	    		e.preventDefault();
	    		_this.selected = $(this).find('input');
	    	});
	    	
	    	$('.validate').on('click', function (e)
	    	{
	    		if(notNull(_this.selected)){
	    			_this.removeListener();
	    			$(window).trigger(STATIC.EVENTS.QUIZZ_ANSWERED, [_this.selected]);
	    		}
	    	});
	    };
		
		/**
		 * Remove previous events listener 
		 */
	    Question.prototype.removeListener = function ()
	    {
			var _this = this;
	    	$('.answer a').off('click');
	    	$('.validate').off('click');
	    };
		
	    return Question;

	})();

}).call(this);
