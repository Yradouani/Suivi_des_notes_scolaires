import { isValidMail } from '../js/controllerStudent.js';

describe('isEmail', () => {
    it('should be a valid email', () => {
        expect(isValidMail("lola.dupont@outlook.com")).toEqual(true);
    });

});