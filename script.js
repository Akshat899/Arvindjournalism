document.addEventListener('DOMContentLoaded', () => {
    let likes = 24;
    let views = 103;

    document.getElementById('like-btn').addEventListener('click', () => {
        likes++;
        document.getElementById('likes').textContent = likes;
    });
    document.addEventListener("DOMContentLoaded", function() {
        const heading = document.getElementById("hero-heading");
        heading.style.opacity = "0";
        heading.style.transform = "translateY(20px)";
        setTimeout(() => {
            heading.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            heading.style.opacity = "1";
            heading.style.transform = "translateY(0)";
        }, 500);
    });
    // Add a simple comment system
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentText = document.getElementById('comment').value;

        if (commentText) {
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
            document.getElementById('comment').value = '';
        }
    });
    const container = document.getElementById("categories-container");
                categories.forEach(category => {
                    let categoryDiv = document.createElement("div");
                    categoryDiv.className = "category";
                    categoryDiv.style.backgroundImage = `url('${category.image}')`;
                    categoryDiv.innerHTML = `${category.name}`;
                    categoryDiv.onclick = function() {
                        window.location.href = `#`;
                    };
                    container.appendChild(categoryDiv);
                });
});
