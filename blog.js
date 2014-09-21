$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("bBQvikwcUgKJgPj0WFcc6tHOBeTT8ire8jF3xFmn", "4LMnOtk2Ga4h7Fl2lX7qRWsxjCBFtjgMX3ep03lx");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});
console.log("WTF");
