class NeuralNet {
    readonly layers = [];
    readonly weights = [];
    readonly cache = [];
    readonly activationFunction = (x: number) => 1 / (1 + Math.exp(-x))
    constructor(layers = []) {

    }

    forward() {

    }

    calculateWeightedInput(a_i: number, w_j : number, b_j: number) {
        return a_i * w_j + b_j;
    }

    calculateCost(actual:number, expected:number) {
        return (actual - expected) ** 2;
    }

    deriveActivationOverWeightedInput(weightedInput: number) {
        const activation = this.activationFunction(weightedInput);
        return activation * (1 - activation);
    }

    deriveCostOverActivation(actual:number, expected:number) {
        return 2 * (actual - expected)
    }

    trainOnce() {


    }

    trainNTimes(n: number) {
        for (let i = 0; i < n; i++) {
            this.trainOnce();
        }
    }
    
}