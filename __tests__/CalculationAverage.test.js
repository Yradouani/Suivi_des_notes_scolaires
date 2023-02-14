const controller = require('../js/controllerStudent');

describe('isValidAverage', () => {
    // Validate average
    it('should return true if average is valid', () => {
        expect(controller.average(28, 3)).toEqual(9.33);
    });

});