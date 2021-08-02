// 2.Write a function which filter users who has scoresGreaterThan85,
// Write a function which addUser to the user array only if the user does not exist.
// Write a function which addUserSkill which can add skill to a user only if the user exist.
// Write a function which editUser if the user exist in the users array.
// const users = [
// {
// 	name:'Brook', 
// 	scores:75,
// 	skills:['HTM', 'CSS', 'JS'],
// 	age:16
// },
// {
// 	name:'Alex', 
// 	scores:80,
// 	skills:['HTM', 'CSS', 'JS'],
// 	age:18
// }, 
// {
// 	name:'David', 
// 	scores:75,
// 	skills:['HTM', 'CSS'],
// 	age:22
// }, 
// {
// 	name:'John', 
// 	scores:85,
// 	skills:['HTM'],
// 	age:25
// },
// {
// 	name:'Sara',
// 	scores:95,
// 	skills:['HTM', 'CSS', 'JS'],
// 	age: 26
// },
// {
// 	name:'Martha', 
// 	scores:80,
// 	skills:['HTM', 'CSS', 'JS'],
// 	age:18
// },
// {
// 	name:'Thomas',
// 	scores:90,
// 	skills:['HTM', 'CSS', 'JS'],
// 	age:20
// }
// ];
const scoresGreaterThan85 = arr => {
    const scores = [];
    for (const element of arr) {
      if (element.scores > 85) {
        scores.push(element.scores);
      }
    }
    return scores;
  };
  
  console.log(scoresGreaterThan85(users));
  const newUser = {
    name: 'Asabeneh',
    scores: 800,
    skills: ['HTML', 'CSS', 'JS'],
    age: 250
  };
  const addUser = (arr, newUser) => {
    for (const user of arr) {
      if (user['name'] === newUser.name) {
        return ' A user does exist';
      }
    }
    arr.push(newUser);
    return arr;
  };
  console.log(addUser(users, newUser));
  
  const addUserSkill = (arr, name, skill) => {
    let found = false;
    for (const user of arr) {
      if (user['name'] === name) {
        user.skills.push(skill);
        found = true;
        break;
      }
    }
    if (!found) {
      return 'A user does not exist';
    }
  
    return arr;
  };
  console.log(addUserSkill(users, 'Brook', 'Node'));
  
  const editUser = (arr, name, newUser) => {
    let found = false;
    for (const user of arr) {
      if (user['name'] === name) {
        user.name = newUser.name;
        user.scores = newUser.scores;
        user.skills = newUser.skills;
        user.age = newUser.age;
        found = true;
        break;
      } 
    }
    if(!found) {
        return 'A user does not exist';
      }
  
    return arr;
  };
  console.log(editUser(users, "Brook", newUser));
  console.log(users);