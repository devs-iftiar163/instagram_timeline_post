// Declare Variables
const createForm = document.getElementById("form_post");
const message = document.querySelector(".message");
const postLists = document.querySelector(".post-container");

// Show Post
const showPosts = () => {
  const post = getData("posts");
  let content = "";

  if (post.length > 0) {
    post.reverse().map((item, index) => {
      content += `  <div class="post-header">
        <div class="author">
          <div class="author-profile-img">
            <img src="${item.author_photo}" alt="" />
          </div>
          <div class="post-author-name">
            <a href="#">${item.author_name}</a>
            <span><i class="fas fa-circle"></i> ${timeAgo(
              item.post_time
            )}</span>
            <a href="#"></a>
            <p>Costa Titch, Champuru Makhenzo</p>
          </div>
        </div>
        <div class="three-dot">
          <a href="#"><i class="fas fa-ellipsis-h"></i></a>
        </div>
      </div>

      <!------ Post Body ------>
      <div class="post-body">
        <div class="post-img">
          <img src="${item.post_photo ? item.post_photo : ""}" alt="" />
        </div>
        <div class="post-reaction">
          <div class="p-reaction-left">
            <div class="post-like post-icon">
              <span><i class="far fa-heart"></i></span>
            </div>
            <div class="post-comment post-icon">
              <span><i class="far fa-comment"></i></span>
            </div>
            <div class="post-share post-icon">
              <span><i class="far fa-paper-plane"></i></span>
            </div>
          </div>
          <div class="post-save post-icon">
            <span><i class="far fa-bookmark"></i></span>
          </div>
        </div>
        <div class="post-like-total">
          <p>5,691,354 likes</p>
        </div>
        <div class="post-content">
          <p>
            <a href="#">taylorswift</a>${
              item.post_content ? item.post_content : ""
            }
            <a href="#" class="post-tag">@taylorehill / @gettyimages</a>
          </p>
        </div>
        <div class="write-comment">
          <p>View all 204 comments</p>
          <form action="#">
            <input
              type="text"
              name=""
              id=""
              placeholder="Add a comment…"
            />
          </form>
          <span><i class="far fa-smile"></i></span>
        </div>
      </div>`;
    });
  } else {
    content = `<h3>No Post Found</h3>`;
  }
  postLists.innerHTML = content;
};
showPosts();
// Form Data
createForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  if (!data.author_name || !data.author_photo) {
    message.innerHTML = createAlert("Author Name & Photo Cannot Be Empty.");
  } else {
    // Get Previous Data
    const prevData = getData("posts");
    prevData.push({
      author_name: data.author_name,
      author_photo: data.author_photo,
      post_content: data.post_content ?? null,
      post_photo: data.post_photo ?? null,
      post_time: Date.now(),
    });

    // Send Data
    sendData("posts", prevData);
    showPosts();
    e.target.reset();
  }
};
