import ('./Clock');

class ExtendedClock extends Clock{
    constructor({ template }, precision = 1000) {
        super(template);
        this.precision = precision
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}