class Begin {
    constructor() {
        this.inputHeight = document.querySelector('.height');
        this.inputWeight = document.querySelector('.weight');
        this.showBmi = document.querySelector('.bmi span');

        this.header = document.querySelector('header');
        this.main = document.querySelector('main');
        this.result = document.querySelector('.result');

        document.querySelector('button').addEventListener('click', this.startCalculate.bind(this));
        document.querySelector('.exit').addEventListener('click', this.reset.bind(this))
    }

    startCalculate() {
        this.calcBmi = new Calculate(this.inputWeight.value, this.inputHeight.value);
        this.validate();
        const bmiValue = this.calcBmi.showBmi().toFixed(1);
        this.showBmi.textContent = bmiValue;
        this.setColor(bmiValue);
    }

    validate() {
        if (this.inputWeight.value == '' || this.inputHeight.value == '') return alert('You have to complete the form.');
        if (this.inputHeight.value > 2.75) {
            this.inputHeight.value = '';
            return alert('Input a real value in meters!');
        }
        this.blur();
    }

    blur() {
        this.header.classList.add('blur');
        this.main.classList.add('blur');
        this.result.style.display = 'block';
    }

    setColor(bmiValue) {
        if (bmiValue < 18.5 || bmiValue > 30) this.showBmi.style.color = 'red';
        else if (bmiValue <= 29.9 && bmiValue >= 25) this.showBmi.style.color = 'orangered';
        else if (bmiValue <= 24.9 && bmiValue >= 18.5) this.showBmi.style.color = 'green';
    }

    reset() {
        this.inputWeight.value = '';
        this.inputHeight.value = '';
        this.header.classList.remove('blur');
        this.main.classList.remove('blur');
        this.result.style.display = 'none';
    }
}