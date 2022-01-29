import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-dark">
        <a href="/" class="navbar-brand logo">Srm Hub</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="/" class="nav-link"> Home</a></li>
            <li class="nav-item"><a href="/notes" class="nav-link"> Notes </a></li>
            <li class="nav-item"><a href="/restaurants" class="nav-link"> Restaurants </a></li>
            <li class="nav-item"><a href="#Contact" class="nav-link"> Contact Us </a></li>
          </ul>
        </div>
      </nav>
      
      <div class="container-fluid h-100 mb-5 mt-5 pt-5">
        <div class="row top-buffer text-center align-items-center h-100">
          <div class="col-12 col-md-6">
            <img id="Bldg" alt="Landing Page Background" class="img-fluid" src="/Assets/quite-town.png"/>
          </div>
          <div class="col-12 col-md-6">
            <div class="col-12 font-weight-light text-left">
              <h1>Welcome To</h1>
            </div>
            <div class="col-12 text-left">
              <h2> SRM HUB </h2>
            </div>
            <div class="col-12 font-weight-light casual text-left">
              <p>Find the best notes and restaurant reviews</p>
            </div>
            <div class="col-12 Btns d-flex flex-row">
              <div class="text-lg-right text-center">
                <a href="/restaurants"><button class="btn btn-outline-light btn-lg mt-3 mb-2"> Restaurants </button> </a>
              </div>
              <div class="text-lg-left text-center">
                <a href="/notes"><button class="btn btn-outline-light btn-lg mt-3 mb-2"> Notes </button> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
