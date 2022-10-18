export class Operation {
    constructor(type, left, right) {
        self.type = type,
        self.left = left,
        self.right = right
    } 
    unwrap = () => {
        switch (self.type) {
            case "add":
                self.result = left+right;
                break;
            case "subtract":
                self.result = left-right;
                break;
            case "multiply":
                self.result = left*right;
                break;
            case "divide":
                self.result = left/right;
                break;
        }
        return self.result
    }
}