//3. Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.

class vehicle {
    constructor(wheels, engine) {
        this.wheels = wheels;
        this.engine = engine;
    }
}

class car extends vehicle{
    constructor(wheelCount, engineType, transmission) {
        super(wheelCount, engineType);
        this.transmission = transmission;
    }
}

class audi extends car {
    constructor(wheelCount, engineType, transmission, model) {
        super(wheelCount, engineType, transmission);
        this.model = model;
    }

    getCarInfo = () => {
        return {
            wheels: this.wheels,
            engine: this.engine,
            transmission: this.transmission,
            model: this.model
        };
    }
}

let spider = new audi(4, "v8", "automatic", "R8");
console.log(spider.getCarInfo());