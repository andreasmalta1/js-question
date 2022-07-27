const expandBtn = document.querySelectorAll('.expand-btn')
// let closeBtn = document.getElementById('close-btn')
const questionText = document.getElementsByClassName('question')

expandBtn.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const question = e.currentTarget.parentElement
    const questionTitle = question.parentElement

    if (e.currentTarget.innerText == 'Expand'){
      e.currentTarget.innerText = 'Collapse'
    } else {
      e.currentTarget.innerText = 'Expand'
    }
    
    const nodeList = question.childNodes;
    nodeList[5].classList.toggle('question-visibility')
  })
})

// for (var i = 0; i < expandBtn.length; i++){
//   expandBtn[i].addEventListener('click', () => {
//     toggleQuestion(i)
//   });
// }

// function toggleQuestion(btnNum){
//   console.log(btnNum)
//   // for (var i = 0; i < questionText.length; i++){
//   //   questionText[i].classList.toggle('question-visibility')
//   // }
//   questionText[0].toggleAttribute('question-visibility')
// }
