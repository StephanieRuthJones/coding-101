window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
    //write an event listener for the submit button that adds a comment to the comment list
    const submitButton = document.querySelector("#submit-button")
    const commentInput = document.querySelector("#comment-input")
    const comments = document.querySelector("#comments")

    submitButton.addEventListener("submit", event => {
        event.preventDefault()

        const comment = document.createElement("li")
        comment.className = "comment"
        comment.innerText = "Comment: " + commentInput.value

        // optional delete button if we have time:
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"

        deleteButton.addEventListener('click', event => {
            event.preventDefault()
            console.log("delete button clicked", event.target.parentNode)
            event.target.parentNode.remove()

        })

        comment.appendChild(deleteButton)

        comments.appendChild(comment)
        commentInput.value = ""
    })



    //non-event delegation: add a click event listener to each list item

    const listItems = document.querySelectorAll('li')
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

})