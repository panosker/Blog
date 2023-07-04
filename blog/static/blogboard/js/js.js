const toggleComments = function(postId) {
    const commentsDiv = document.querySelector(`#comments_div_${postId}`);
    const commentButton = document.querySelector(`#commentbutton_${postId}`);
    
    if (commentsDiv.classList.contains('hidden')) {
      commentsDiv.classList.remove('hidden');
      commentButton.textContent = "Hide comments";
    } else {
      commentsDiv.classList.add('hidden');
      commentButton.textContent = "Show comments";
    }
  };
  
  const commentButtons = document.querySelectorAll("[id^='commentbutton_']");
  commentButtons.forEach(button => {
    const postId = button.id.split("_")[1];
    button.addEventListener('click', () => toggleComments(postId));
  });
  