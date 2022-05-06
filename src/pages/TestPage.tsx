import { Link } from "react-router-dom";

function TestPage() {
  return (
    <>
      <h1>Test Page</h1>
      <div className="test-page__grid">
        <Link className="test-page__grid-item" to="intro"><p>intro</p></Link>
        <Link className="test-page__grid-item" to="1"><p>1</p></Link>
        <Link className="test-page__grid-item" to="2"><p>2</p></Link>
        <Link className="test-page__grid-item" to="3"><p>3</p></Link>
      </div>
    </>
  )
}

export default TestPage;
