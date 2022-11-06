import "./App.css";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Join from "./component/Join/Join";
import Plans from "./component/Plans/Plans";
import Programs from "./component/Programs/Programs";
import Reasons from "./component/Reasons/Reasons";
import Testimonial from "./component/Testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
