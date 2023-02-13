const { teacherEmailValue, teacherPasswordValue } = require('../js/connexion');

describe('isEmail', () => {
    it('should be retrieve an email', () => {
        expect(teacherEmailValue.length).toBeGreaterThan(0)
    });
});