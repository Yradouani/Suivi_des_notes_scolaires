const fetchMock = require('jest-fetch-mock');

// Configurer le mock fetch
fetchMock.enableMocks();

// Simuler la réponse de la requête fetch
fetchMock.mockResponse(JSON.stringify({ /* Données simulées ici */ }));

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../teacher.html"), "utf-8");
const dom = new JSDOM(html);

global.document = dom.window.document;
global.window = dom.window;

const reportCard = require('../js/teacher');

describe('isValidGrade', () => {
    // Validate value of grade
    it('should return true for a number between 0 and 20', () => {
        expect(reportCard.isValidValue(14)).toEqual(true);
        expect(reportCard.isValidValue(0)).toEqual(true);
        expect(reportCard.isValidValue(20)).toEqual(true);
    });

    it('should return false for an invalid value', () => {
        expect(reportCard.isValidValue(-1)).toBe(false);
        expect(reportCard.isValidValue(25)).toBe(false);
        expect(reportCard.isValidValue('abc')).toBe(false);
    });

    // Validate date of grade
    it('should return true for a date with this format AAAA-MM-JJ', () => {
        expect(reportCard.isValidDate("2023-01-04")).toEqual(true);
    });

    it('should return false for an invalid date', () => {
        expect(reportCard.isValidDate("2023-01-44")).toEqual(false);
        expect(reportCard.isValidDate("2023-22-20")).toEqual(false);
        expect(reportCard.isValidDate("23-01-20")).toEqual(false);
    });


    it('should return true for a date before or equal to today', () => {
        expect(reportCard.isDateBeforeToday("2023-01-04")).toEqual(true);
    });

    it('should return true for a date before or equal to today', () => {
        expect(reportCard.isDateBeforeToday("2060-01-04")).toEqual(false);
    });

    // Validate grade's comment
    it('should return true if comment doesn\'t contain =+*%\'"[{(', () => {
        expect(reportCard.isValidComment("Bonjour ! Comment allez-vous ?")).toEqual(true);
    });

    it('should return false if comment contain =+*%\'"[{(', () => {
        expect(reportCard.isValidComment("Bonjour = Comment allez-vous ?")).toEqual(false);
        expect(reportCard.isValidComment("Bonjour + Comment allez-vous ?")).toEqual(false);
        expect(reportCard.isValidComment("Bonjour *")).toEqual(false);
        expect(reportCard.isValidComment("Bonjour %")).toEqual(false);
        expect(reportCard.isValidComment("Bonjour ''")).toEqual(false);
        expect(reportCard.isValidComment("Bonjour \"\"")).toEqual(false);
        expect(reportCard.isValidComment("Bonjour []")).toEqual(false);
    });

    // Validate grade's type
    it('should return true if grade\'s type is oral or écrit', () => {
        expect(reportCard.isValidGradeType("oral")).toEqual(true);
        expect(reportCard.isValidGradeType("écrit")).toEqual(true);
    });

    it('should return false if grade\'s type is not oral or écrit', () => {
        expect(reportCard.isValidGradeType("hello")).toEqual(false);
        expect(reportCard.isValidGradeType(2)).toEqual(false);
    });

    // Validate grade's subject
    it('should return true if grade\'s subject is Histoire or Anglais or Physique or Français or Mathématiques', () => {
        expect(reportCard.isValidGradeSubject("Histoire")).toEqual(true);
        expect(reportCard.isValidGradeSubject("Anglais")).toEqual(true);
        expect(reportCard.isValidGradeSubject("Physique")).toEqual(true);
        expect(reportCard.isValidGradeSubject("Français")).toEqual(true);
        expect(reportCard.isValidGradeSubject("Mathématiques")).toEqual(true);
    });

    it('should return false if grade\'s subject isn\'t Histoire or Anglais or Physique or Français or Mathématiques', () => {
        expect(reportCard.isValidGradeSubject("Sport")).toEqual(false);
        expect(reportCard.isValidGradeSubject(2)).toEqual(false);
        expect(reportCard.isValidGradeSubject("Histoire Anglais")).toEqual(false);
    });
});