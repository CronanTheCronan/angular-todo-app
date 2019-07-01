import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  testArray = [
    {name: 'Test1', isComplete: false},
    {name: 'Test2', isComplete: false},
    {name: 'Test3', isComplete: false}
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem(item: string) {
    let counter = 0;
    for (const testArrayItem of this.testArray) {
      counter++;
    }
    const newItem = {
      id: counter,
      name: item,
      isComplete: false
    };
    this.testArray.push(newItem);
  }

  completeItem(item: string) {
    const result = this.testArray.find(x => x.name === item).name;

    this.testArray.forEach((x) => {
      if (x.name === result && !x.isComplete) {
        x.isComplete = true;
      } else if (x.name === result && x.isComplete) {
        x.isComplete = false;
      }
    });
  }

  deleteItem(item: string) {
    const itemToDelete = this.testArray.find(x => x.name === item).name;
    console.log(itemToDelete);
    this.testArray.forEach(element => {
      console.log(element.name);
    });
    this.testArray = this.testArray.filter(x => x.name !== itemToDelete);
  }
}
