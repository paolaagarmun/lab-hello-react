import img1 from '../Images/declarative.png'
import img2 from '../Images/components.png'
import img3 from '../Images/single-way.png'
import img4 from '../Images/jsx.png'



function Card() {
    return (
        <div id = "cards">
        <div class="card">
        <img class="card-img-top" src={img1} alt="Card cap"/>
        <div class="card-body">
            <h2 class="card-text">Declarative</h2>
            <p class="card-text">React makes it painless to create interactive UIs</p>
        </div>
        </div>
        <div class="card">
        <img class="card-img-top" src={img2} alt="Card cap"/>
        <div class="card-body">
            <h2 class="card-text">Components</h2>
            <p class="card-text">Build encapsulated components that manage their state.</p>
        </div>
        </div>
        <div class="card">
        <img class="card-img-top" src={img3} alt="Card cap"/>
        <div class="card-body">
            <h2 class="card-text">Single-Way</h2>
            <p class="card-text">A set of inmutable values are passed to the component's.</p>
        </div>
        </div>
        <div class="card">
        <img class="card-img-top" src={img4} alt="Card cap"/>
        <div class="card-body">
            <h2 class="card-text">JSX</h2>
            <p class="card-text">Statically-typed, designed to run on modern browsers.</p>
        </div>
        </div>
        </div>

    )
}

export default Card;