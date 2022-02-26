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

    pop() //Pop an item from the Stack : Removes and Returns the top item of the Stack.
    { 
        if (this.first == -1) 
        {  
           console.log ("Stack Underflow","\n") //Display message when there are no elements in the stack
        }
        else
        {
           console.log ("The top item after the stack popped is " + this.array[this.first],"\n");
           this.first--;
           return this.first;

        }    
    }

    peek()  //Peek top item from the Stack : Returns the top item of the Stack.
    {
        if (this.first == -1)
        {  
           console.log ("There is no item in the Stack. Stack is Empty!","\n") //Display message when there are no elements in the stack
           return null;
        }
        else
        {
           console.log ("The top item after the stack peeked is " + this.array[this.first],"\n");
        }
    }
    
    size() //The current size and total size of the stack
    {
     console.log ("The current size of the stack is " + this.array.length,"\n");
     console.log ("The total size of the stack is " + this.maxsize,"\n");
    }
}

 
const s = new Stack (5);
s.push(1);
s.push(2);
s.pop();
s.peek();
s.size();