class SmartCalculator {
    constructor(initialValue) {
        this.stack=[initialValue];
        this.res=initialValue;
    }
    count(){
        for(let i = this.stack.length-1;i>=0;--i){
            if(this.stack[i]==='^'){
                this.stack[i-1]=Math.pow(this.stack[i-1],this.stack[i+1]);
                this.stack.splice(i,2);
                i = this.stack.length-1;
            }
        }
        for(let i = 0;i<this.stack.length;++i){
            if(this.stack[i]==='*'){
                this.stack[i-1]*=this.stack[i+1];
                this.stack.splice(i,2);
                i = 0;
            }
            else if(this.stack[i]==='/'){
                this.stack[i-1]/=this.stack[i+1];
                this.stack.splice(i,2);
                i =0;
            }
        }
        for(let i = 0;i<this.stack.length;++i){
            if(this.stack[i]==='+'){
                this.stack[i-1]+=this.stack[i+1];
                this.stack.splice(i,2);
                i =0;
            }
            else if(this.stack[i]==='-'){
                this.stack[i-1]-=this.stack[i+1];
                this.stack.splice(i,2);
                i =0;
            }
        }

        return this.stack[0];
    }
    valueOf(){
        let a = this.count();
        return a;
    }
    toString(){
        let a = this.count();
        return a;
    }
    add(number) {
        // your implementation
        this.stack.push('+');
        this.stack.push(number);
        return this;
    }

    subtract(number) {
        // your implementation
        this.stack.push('-');
        this.stack.push(number);
        return this;
    }

    multiply(number) {
        this.stack.push('*');
        this.stack.push(number);
        return this;
    }

    devide(number) {
        this.stack.push('/');
        this.stack.push(number);
        return this;
    }

    pow(number) {
        this.stack.push('^');
        this.stack.push(number);
        return this;
    }
}

module.exports = SmartCalculator;
