// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    'userId': 14,
    'id': 1,
    'title': 'delectus aut autem',
    'completed': false,
  },
  {
    'userId': 20,
    'id': 2,
    'title': 'delectus aut autem',
    'completed': false,
  }]


const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

let ol =document.getElementById('todo-list')
  const populateTodos = () => {
  const ol = document.getElementById('todo-list');
  for (let index = 0; index < arrayOfTodos.length; index++) {
    const title = arrayOfTodos[index].title;

    let li = document.createElement('li');
    var text = document.createTextNode(title);
    let x = document.createElement('INPUT');
    x.setAttribute('type', 'checkbox');
    if (arrayOfTodos[index].completed) {
      x.checked = true;
    } else {
      x.checked = false;

      li.append(text);
      ol.append(li);
      li.prepend(x);
    }
  }
};

// let id = document.createElement('list');
const FilterUserId = () => {
  let userid = document.getElementById("Filter");
  var inputval = userid.value
  console.log('inputval', inputval)
  let isUser = [] 
  isUser = arrayOfTodos.filter((todo) => todo.userId == inputval );
  console.log('isuser', isUser);
  console.log('arr' , arrayOfTodos)
  ol.innerHTML = '';
  
  for (let index = 0; index < isUser.length; index++) {
    let title = isUser[index].title;
    let li = document.createElement('li');
    var text = document.createTextNode(title);
    let x = document.createElement('INPUT');
    x.setAttribute('type', 'checkbox');
    if (isUser[index].completed) {
      x.checked = true;
    } else {
      x.checked = false;
    }

    li.append(text);
    ol.append(li);
    li.prepend(x);
  }

  // document.getElementById("Filter").value
//   var Filter = arrayOfTodos.filter(function(arrayOfTodos) {
//     return arrayOfTodos.userid ==="3"
//   })
}
