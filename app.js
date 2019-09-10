window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')

    const submitButton = document.querySelector("#submit-button")
    const commentInput = document.querySelector("#comment-input")
    const comments = document.querySelector("#comments")

    submitButton.addEventListener("click", event => {
        event.preventDefault()

        const comment = document.createElement("li")
        comment.className = "comment"
        comment.innerText = "Comment: " + commentInput.value

        //optional delete button if we have time:
        // const deleteButton = document.createElement("button")
        // deleteButton.innerText = "Delete"

        // deleteButton.addEventListener('click', event => {
        //     event.preventDefault()
        //     console.log("delete button clicked", event.target.parentNode)
        //     event.target.parentNode.remove()

        // })

        // comment.appendChild(deleteButton)

        comments.appendChild(comment)
        commentInput.value = ""
    })


})