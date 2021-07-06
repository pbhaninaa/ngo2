import Footer from './Footer'
function Jumbotron() {
    return (<>
        <div className="image">
            <div class="jumbotron" style={{ textAlign: 'center' }}>

                <h3 class=" pt-5">WELCOME!</h3>
                <p class="lea">This is a simple hero unit, a simple jumbotron-style<br /> component for calling extra attention to featured <br />content or information.</p>

                <p>It uses utility classes for typography and spacing <br />to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-md ml-5 " href="#" role="button">Learn more</a>

                </p>

            </div>
            
        </div>

<Footer />

</>
    )

}
export default Jumbotron