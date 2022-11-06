import "./App.css";
import Hero from "./component/Hero/Hero";
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
    </div>
  );
}

export default App;
