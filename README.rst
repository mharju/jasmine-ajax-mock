AJAX-request mocking for Jasmine/JQuery
=======================================

The simplest way is to illustrate with code::

    describe('Some Test', function { 
        beforeEach(function() {
            // spyOnUrl mocks jQuery.ajax and calls this object to get the resulting object
            // The parameter for ``spyOnUrl`` can be an object or a function.
            // The values of objects can be either strings of a function that returns the resulting
            // object or string (depending on the request type).
            spyOnUrl({
                '/api/v1/feed/': jasmine.getFixtures().read('feed.json'),
                '/api/v1/items/': function(options) {
                    if(options.type == "PUT") { 
                      // Magix here
                    }
                    return jasmine.getFixtures().read('another_one.json');
                }
            });
        });
    });
    

Dependencies
------------

    * jasmine-jquery_
    * jasmine_

.. _jasmine: https://github.com/pivotal/jasmine
.. _jasmine-jquery: https://github.com/velesin/jasmine-jquery
