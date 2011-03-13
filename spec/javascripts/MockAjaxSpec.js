describe('Ajax Mocking Utility', function () {
    it('should take on an object with URL mappings', function () {
      spyOnUrl({
          '/test/': 'hello'
      });

      var result;
      runs(function() {
          $.ajax({url: "/test/"})
            .done(function(a_result) {
                result = a_result;
            });
      });
      
      waitsFor(function() { 
          return result !== undefined; 
      }, 500);

      runs(function() {
          expect(result).toEqual('hello');
      });
    });

    it('should take on a function returning correct stuff for us', function() {
      spyOnUrl(function(url) {
          return 'hullo';
      });

      var result;
      runs(function() {
          $.ajax({url: "/test/"})
            .done(function(a_result) {
                result = a_result;
            });
      });
      
      waitsFor(function() { 
          return result !== undefined; 
      }, 500);

      runs(function() {
          expect(result).toEqual('hullo');
      });
    });

    it('should also work with success-callbak on options', function() {
      spyOnUrl(function(url) {
          return 'hullo';
      });

      var result;
      runs(function() {
          $.ajax({url: "/test/", 
            success: function(a_result) {
                result = a_result;
            }
          });
      });
      
      waitsFor(function() { 
          return result !== undefined; 
      }, 500);

      runs(function() {
          expect(result).toEqual('hullo');
      });
    });
});

