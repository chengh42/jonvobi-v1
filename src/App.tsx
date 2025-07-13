import book from "./img/book.webp";
import bookshelf from "./img/bookshelf.webp";
import chair from "./img/chair.webp";
import person from "./img/person.webp";
import photo from "./img/photo.webp";
import stoel from "./img/stoel.webp";
import "./App.css";
import {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Books from "./Books";

function Home() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [randomRotations, setRandomRotations] = useState<
    Record<string, number>
  >({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getRandomRotation = (imageName: string) => {
    if (!randomRotations[imageName]) {
      const randomRotation = Math.random() * 10 - 5; // Random between -5 and 5
      setRandomRotations((prev) => ({...prev, [imageName]: randomRotation}));
      return randomRotation;
    }
    return randomRotations[imageName];
  };

  const getTransform = (
    baseTransform: string,
    movementIntensity: number,
    imageName: string
  ) => {
    const mouseMovement = `translate(${
      (mousePosition.x - 0.5) * movementIntensity
    }px, ${(mousePosition.y - 0.5) * movementIntensity}px)`;
    const hoverTransform =
      hoveredImage === imageName
        ? ` scale(1.1) rotate(${getRandomRotation(imageName)}deg)`
        : "";
    return `${baseTransform} ${mouseMovement}${hoverTransform}`;
  };

  const handleBookshelfClick = () => {
    navigate("/books");
  };

  return (
    <div className="App">
      <div className="scattered-container">
        <img
          src={book}
          alt="book"
          className="scattered-image book"
          style={{
            transform: getTransform("rotate(-15deg)", 20, "book"),
          }}
          onMouseEnter={() => setHoveredImage("book")}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <img
          src={bookshelf}
          alt="bookshelf"
          className="scattered-image bookshelf"
          style={{
            transform: getTransform("", 15, "bookshelf"),
          }}
          onMouseEnter={() => setHoveredImage("bookshelf")}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={handleBookshelfClick}
        />
        <img
          src={chair}
          alt="chair"
          className="scattered-image chair"
          style={{
            transform: getTransform("rotate(-5deg) scaleX(-1)", 25, "chair"),
          }}
          onMouseEnter={() => setHoveredImage("chair")}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <img
          src={person}
          alt="person"
          className="scattered-image person"
          style={{
            transform: getTransform("", 30, "person"),
          }}
          onMouseEnter={() => setHoveredImage("person")}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <img
          src={photo}
          alt="photo"
          className="scattered-image photo"
          style={{
            transform: getTransform("rotate(-10deg)", 18, "photo"),
          }}
          onMouseEnter={() => setHoveredImage("photo")}
          onMouseLeave={() => setHoveredImage(null)}
        />
        <img
          src={stoel}
          alt="stoel"
          className="scattered-image stoel"
          style={{
            transform: getTransform("", 22, "stoel"),
          }}
          onMouseEnter={() => setHoveredImage("stoel")}
          onMouseLeave={() => setHoveredImage(null)}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
