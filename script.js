const expandBtn = document.querySelectorAll('.expand-btn')
const questions = document.getElementsByClassName('question')


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

    for (const key in questions){
      if (questions[key] !== questionTitle && typeof questions[key] === 'object'){
        otherText = questions[key].childNodes[1].childNodes[5];
        otherText.classList.add('question-visibility')
      }
    }

  })
})
