class Calculate {
    constructor(weight, height) {
        let _bmi = weight / (height ** 2);
        this.showBmi = () => _bmi;
    }
}