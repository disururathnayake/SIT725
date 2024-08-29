const { expect } = require("chai");
const request = require("request");
let url = 'http://localhost:3000/api/dog';
let dog = {paht:'dog1.jpg',title:'DogTest'};


describe('test GET api', function() {
    it('returns statusCode of 200 on successful fetch', function(done) {
        request(url, function(a, b, c) {
            let responseObj = JSON.parse(c);
            expect(responseObj.statusCode).to.equal(200);
            done();
        });
    });

  

    it('handles invalid URL', function(done) {
        request('http://localhost:3000/api/nonexistent', function(a, b, c) {
            expect(b.statusCode).to.equal(404);
            done();
        });
    });

    it('returns correct content-type', function(done) {
        request(url, function(a, b, c) {
            expect(b.headers['content-type']).to.include('application/json');
            done();
        });
    });
});


describe('test POST api', function(){
    it('post dog to DB', function(done){
        request.post({url:url,form:dog}, function(a,b,c){
            
            done();
        });
    });

    

});

describe('test DELETE api', function(){
    it('delete a dog', function(done){
        request.delete({url:url,form:dog}, function(a,b,c){
            
            done();
        });
    });

    
});