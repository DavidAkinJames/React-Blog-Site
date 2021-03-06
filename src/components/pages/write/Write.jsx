import './write.css'

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg"
      src="./images/mountain.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className='writeIcon  bx bxs-add-to-queue'></i>
          </label>
          <input type="file" id="fileInput" style={{display: "none"}}/>
          <input type="text"  placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText" placeholder="tell your story..." type="text"></textarea>
        </div>
        <button className="writeSubmit">
          Publish
        </button>

      </form>

        </div>
  )
}
