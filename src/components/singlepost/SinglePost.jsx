import './singlePst.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img className="singlePostImg" src="./images/robot.jpg" alt="single" />
          
          <h1 className="singlePostTitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.

            <div className="singlePostEdit">
            <i className='singlePostIcon  bx bxs-message-edit'></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
            </div>

          </h1>
          <div className="singlePostInfo">
            <span className="singlePstAuthor"> Author: <b>David</b> </span>
            <span className="singlePstDate"> 2 hours ago</span>
          </div>
           <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum repellat alias minus placeat adipisci perspiciatis et harum esse explicabo cupiditate, numquam architecto consectetur fugit cumque laborum quidem recusandae qui!
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum repellat alias minus placeat adipisci perspiciatis et harum esse explicabo cupiditate, numquam architecto consectetur fugit cumque laborum quidem recusandae qui!
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum repellat alias minus placeat adipisci perspiciatis et harum esse explicabo cupiditate, numquam architecto consectetur fugit cumque laborum quidem recusandae qui!
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque dolorum repellat alias minus placeat adipisci perspiciatis et harum esse explicabo cupiditate, numquam architecto consectetur fugit cumque laborum quidem recusandae qui!
           </p>





        </div>
    </div>
  )
}
