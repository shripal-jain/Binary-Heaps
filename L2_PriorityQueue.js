class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx]
            if(element.priority < parent.priority){
                this.values[idx]=parent;
                this.values[parentIdx]=element;
                idx=parentIdx;
            }
            else{
                break;
            }
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0]= end;
        this.sinkDown();
        return max;
    }
    sinkDown(){
        let idx = 0;
        let element = this.values[0];
        let length = this.values.length;
        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx +2;
            let leftChild, rightChild;
            let swapIdx = -1;
            if(leftChildIdx<length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swapIdx = leftChildIdx;
                }
            }

            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if((swapIdx == -1 && rightChild.priority<element.priority)||(swapIdx !=-1 && rightChild.priority<leftChild.priority)){
                    swapIdx = rightChildIdx;
                }
            }

            if(swapIdx == -1){
                break;
            }
            else{
                this.values[idx] = this.values[swapIdx];
                this.values[swapIdx] = element;

                idx = swapIdx;
            }
        }
    }
}

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)