(function ()
{ 'use strict';
    
    this.Loader = (function ()
    {
        /**
         * Load json file and file it with content
         * @param {String} url, url of the template
         * @param {Object} el, jquery element to inject question
         * @param {Object} tpl, data to give to the template
         * @param {Function} cb, callBack when it's done
         */
        function Loader (url, el, tpl, cb)
        {
            var data = null,
            	t = null,
                jqxhr = $.ajax({
                url     : url,
                type    : 'GET'
            })
            .done(function (data)
            {
            	var template = Handlebars.compile( data );
                el.html(template( tpl ));
            })
            .fail(function (xhr, ajaxOptions, thrownError)
            {
                // console.log(xhr);
            })
            .always(function ()
            {
                cb();
            });
        }
        
        // return object to be used inside the global scope
        return Loader;

    })();

}).call(this);
