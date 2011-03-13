function spyOnUrl(mappings) {
    var self = this;
    var getResult = function(options) {
        var result;
        
        if($.isFunction(mappings)) {
            result = mappings.apply(self, [options.url]);
        } else {
            result = mappings[options.url];
        }

        if($.isFunction(result)) {
            return result.apply(self, [options]);
        }
        
        return result;
    };
    
    this.spyOn(jQuery, 'ajax').andCallFake(function(options) {
       if($.isFunction(options.success)) {
           options.success( getResult(options) );
           return;
       } else {
           var dfd = $.Deferred();
           dfd.resolve( getResult(options) );
           return dfd.promise();
       } 

       throw 'yikes';
   });
}


