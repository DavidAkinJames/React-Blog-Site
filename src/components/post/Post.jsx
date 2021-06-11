import './post.css'

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="/images/main.jpg" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </span>
        <hr />
        <span className="postDate">4 hour ago</span>
      </div>
       <p className="postDesc">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat ab veritatis nesciunt nostrum tempore inventore cupiditate non vel atque quod animi culpa error sequi consequuntur voluptas, distinctio quasi magni?
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat ab veritatis nesciunt nostrum tempore inventore cupiditate non vel atque quod animi culpa error sequi consequuntur voluptas, distinctio quasi magni?
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat ab veritatis nesciunt nostrum tempore inventore cupiditate non vel atque quod animi culpa error sequi consequuntur voluptas, distinctio quasi magni?
       </p>
    </div>
  )
}
