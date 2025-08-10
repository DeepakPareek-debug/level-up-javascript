// Write your code here
function getStudents(classroom){
  let {hasTeachingAssistant, classList} = classroom;
  let teacher,teachingAssistant,Students;

  if(hasTeachingAssistant){
    [teacher,teachingAssistant,...Students] = classList;
  }else{
    [teacher,...Students] = classList;
  }

  return Students
}

console.log(getStudents({
  hasTeachingAssistant: true,
  classList: ["A","B","C","D","E"]
}));
