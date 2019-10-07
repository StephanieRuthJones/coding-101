//write a submit event listener for the comment form that adds a comment to the comment list
//What steps do we need to take:
//1. Access the comment form by id #comment-form
//2. access comment input by id #comment-input
//3. access ul where comments will be listed by id #comments-list
//4. add event listener to submit button
//5. add event.preventDefault() - to do what?
//6. add delete button to list items that removes list item when clicked
const commentForm = document.querySelector("#comment-form")
const commentInput = document.querySelector("#comment-input")
const comments = document.querySelector("#comments-list")

// commentForm.addEventListener("submit", event => {
//     //without event.preventDefault
//     event.preventDefault()
//     //look at the event object to see target - will use different aspects of the target
//     console.log("event to look at event object and see the target", event)

//     const comment = document.createElement("li")
//     comment.className = "comment"
//     comment.innerText = "Comment: " + commentInput.value

//     // optional delete button if we have time:
//     const deleteButton = document.createElement("button")
//     deleteButton.innerText = "Delete"

//     deleteButton.addEventListener('click', event => {
//         event.preventDefault()
//         console.log("delete button clicked", event.target.parentNode)
//         event.target.parentNode.remove()

//     })

//     comment.appendChild(deleteButton)

//     comments.appendChild(comment)
//     commentInput.value = ""
// })



//non-event delegation: add a click event listener to each list item

//const listItems = document.querySelectorAll('li')
// listItems.forEach(item => {
//     item.addEventListener('click', handleClick)
// })
// function handleClick(event) {
//     console.log(event.target.innerText)
// }

//event delegation
// const instructions = document.querySelector('ol')
// instructions.addEventListener('click', seeInstruction)

// function seeInstruction(event) {
//     console.log(event.target.innerText)
// }

