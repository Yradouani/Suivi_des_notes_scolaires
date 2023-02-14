const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");
const dom = new JSDOM(html);

global.document = dom.window.document;
global.window = dom.window;

const connection = require('../js/connexion');

describe('isEmail', () => {
    it('should be a valid email', () => {
        expect(connection.isValidMail("lola.dupont@outlook.com")).toEqual(true);
    });

});