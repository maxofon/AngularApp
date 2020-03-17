var MyValidators = /** @class */ (function () {
    function MyValidators() {
    }
    MyValidators.confirmPassword = function (group) {
        var pass = group.get('password').value;
        var confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { notEqual: true };
    };
    return MyValidators;
}());
export { MyValidators };
//# sourceMappingURL=my.validators.js.map