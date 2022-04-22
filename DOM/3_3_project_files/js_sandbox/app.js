// // document.getElementById()
//
// console.log(document.getElementById('task-title'));
//
// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
//
// const taskTitle = document.getElementById('task-title');
// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';
//
// // Change content
// taskTitle.textcontent = 'Task List';
// taskTitle.innertext = 'My List';
// taskTitle.innerHTML = '<span style="color:red">task list</span>';

// document.querySelector('selector')
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));
//
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'red';
//
// document.querySelector('li:last-child').style.color = 'red'
// document.querySelector('li:nth-child(4)').textContent = 'Hello World'
// Array.from(document.querySelectorAll('selector'))

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');
console.log(listItems);
