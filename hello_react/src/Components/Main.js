import img1 from "../Images/ironhacklogo.png"
import img2 from "../Images/menuimg.png"

function Main() {
    return(
        <div id="main-div">
            <div class="imgs-main">
            <img class="card-img-top" src={img1} alt="Iron logo"/>
            <img class="card-img-top" src={img2} alt="Card cap"/>
            
            </div>
            <div class="hello-msg">
                <h3>Say hello to ReactJS</h3>
                <p class="welcome-p">You will learn how to use the most popular frontend
                library, and become a super Ninja developer.</p>
            </div>
            <div class="button">
                <button type="button">Awesome!</button>
            </div>
        </div>
    )
}

export default Main