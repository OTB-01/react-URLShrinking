import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import URLShrinking from "./components/URLShrinking";

function App() {
  return (
    <div className="container">
      <Header />
      <URLShrinking />
    </div>
  );
}

export default App;
