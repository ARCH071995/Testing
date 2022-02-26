class Stack 
{
    array; //if the maxsixe is 3 then the array will be [0,1,2]
    first; //top item of the stack
    maxsize; //maximum size of the stack

    constructor(maxsize)
    {
        this.array = []
        this.first = -1;
        this.maxsize = maxsize;
    }
  
 push(item)  //Push an item in the Stack : Adds a single or multiple items to the top of the Stack.
    {
        if (this.first+1 == this.maxsize)
        {  
           console.log ("Stack Overflow") //Display message when array is full
        }
        else
        {
           this.first++;
           this.array[this.first] = item;
           console.log (`The item pushed is ${item}`,"\n")
           return this.first;
        }
    }
}

const s = new Stack (5);
s.push(1);
s.push(2);