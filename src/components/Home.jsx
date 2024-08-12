import Hero from "./Hero";

const Home = () => {
  return ( 
    <>
    <Hero text = "Welcome to react 201"/>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 my-5">
          <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate incidunt, itaque modi rerum ex porro ad optio labore, nulla, suscipit magnam architecto nemo eius. Aliquid tempore reprehenderit iure excepturi.
          </p>
          </div>
      </div>
    </div>
    </>
   );
}
 
export default Home;