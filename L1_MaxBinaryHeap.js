class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(true){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx]
            if(element>parent){
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
                if(leftChild>element){
                    swapIdx = leftChildIdx;
                }
            }

            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if((swapIdx == -1 && rightChild>element)||(swapIdx !=-1 && rightChild>leftChild)){
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap)

heap.extractMax();
console.log(heap)