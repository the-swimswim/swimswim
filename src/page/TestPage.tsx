import { Link } from "react-router-dom";

function TestPage() {
  return (
    <>
      <h1>Test Page</h1>
      <div className="test-page__grid">
        <Link className="test-page__grid-item" to="1"><p>1</p></Link>
        <Link className="test-page__grid-item" to="2"><p>2</p></Link>
        <Link className="test-page__grid-item" to="3"><p>3</p></Link>
        <Link className="test-page__grid-item" to="4"><p>4</p></Link>
        <Link className="test-page__grid-item" to="5"><p>5</p></Link>
        <Link className="test-page__grid-item" to="6"><p>6</p></Link>
        <Link className="test-page__grid-item" to="7"><p>7</p></Link>
      </div>
    </>
  )
}

export default TestPage;
