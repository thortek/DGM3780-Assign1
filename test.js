var expect = require('chai').expect;
var aboutme = require('./aboutme.js');

describe('Student Object', function() {

    it('The object should exist', function () {
        expect(aboutme).to.exist;
    });

    it('Should have a name property', function () {
        expect(aboutme.student).to.have.property('name');
    });

    it('The name prop should be a string', function () {
        expect(aboutme.student.name).to.be.a('string')
    });

    it('Should have a gender property', function () {
        expect(aboutme.student).to.have.property('gender');
    });

    it('The gender prop should be a string', function () {
        expect(aboutme.student.gender).to.be.a('string');
    });

    it('Should have a age property', function () {
        expect(aboutme.student).to.have.property('age');
    });

    it('The age prop should be a number', function () {
        expect(aboutme.student.age).to.be.a('number');
    });

    it('Should have a bio property', function () {
        expect(aboutme.student).to.have.property('bio');
    });

    it('The bio prop should be a string', function () {
        expect(aboutme.student.bio).to.be.a('string');
    });

    it('The bio should be desicriptive', function () {
        expect(aboutme.student.bio).to.have.length.above(140);
    });

    it('Should have an interests property', function () {
        expect(aboutme.student).to.have.property('interests');
    });

    it('The interests prop should be an array', function () {
        expect(aboutme.student.interests).to.be.instanceof(Array);
    });

    it('The interests array should have 3 elements', function () {
        expect(aboutme.student.interests).to.have.length.above(2);
    });

});
