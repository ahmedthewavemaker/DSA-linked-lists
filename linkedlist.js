class _Node{
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList(){
  constructor(){
    this.head = null;
  }
  
  insertFirst(item){
    this.head = new _Node(item, this.head);
  }
  
  insetLast(item){
    if(this.head === null){
      this.insertFirst(item)
    }
    else{
        let tempNode = this.head
        while(tempNode !=== null){
          tempNode = tempNode.next
        }
      tempNode.next = new _Node(item, null)
    }
  }
  
  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item){
      this.head = this.head.next
      return;
    }
    
    let currNode = this.head
    let previousNode = this.head
    
    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode
      currNode = currNode.next;
    }
    
    if(currNode === null){
      console.log('Item not found')
      return;
    }
    
    previousNode.next = currNode.next;
  }
  
  find(item){
    let currNode = this.head
    
    if(!this.head){
      return null;
    }
    
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next
      }
    }
    return currNode;
  }
  
}
 


class _Node{
  constructor(value, next){
     this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  insert(item){
    this.head = new _Node(item, this.head)
  }

  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item){
      this.head = this.head.next
      return;
    }
    
    let currNode = this.head
    let previousNode = this.head
    
    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode
      currNode = currNode.next;
    }
    
    if(currNode === null){
      console.log('Item not found')
      return;
    }
    
    previousNode.next = currNode.next;
  }

  find(item){
    let currNode = this.head
    
    if(!this.head){
      return null;
    }
    
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next
      }
    }
    console.log(currNode)
    return currNode;
  }
}

const myLinkedList = new LinkedList()
myLinkedList.insert('hi')
myLinkedList.insert('hike')
myLinkedList.insert('hi5')
myLinkedList.insert('hi6')
myLinkedList.insert('hi7')
myLinkedList.remove('hi')
myLinkedList.remove('hi7')
myLinkedList.find('hi5')
myLinkedList.insert('hi')

console.log(myLinkedList)





function print(linkedlist){
  let node = linkedlist.head

  while(node){
    console.log(node.value)
    node = node.next
    
  }
  

}
print(myLinkedList)

function counter(linkedlist){
  let node = linkedlist.head
  let count = 0

  while(node){
     node = node.next
    count += 1
  }
  
   console.log(count)
  return count
 
}

counter(myLinkedList)
