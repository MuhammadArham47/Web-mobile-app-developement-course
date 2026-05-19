import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const { Title } = Typography

function Hero() {

  const navigate = useNavigate();

  const [todo, setTodo] = useState([]);
  const [showing, setShowing] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (user) {
      const visibleTodos = todos.filter(todo => todo.user_id === user.id);
      setTodo(visibleTodos);
    };
  }, []);

  return (
    <main className='py-5'>
      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">

          <div>
            <h1 className='fw-bold mb-1'>
              My Todos
            </h1>

            <p className='text-secondary mb-0'>
              Manage your tasks professionally
            </p>
          </div>

          <button className='btn btn-primary btn-lg rounded-4 px-4' onClick={() => navigate("/dashboard")}>
            + Add Todo
          </button>

        </div>

        {/* Todos Grid */}
        <div className="row g-4">
          {todo.length > 0 ? (
            todo.map((todo) => (
              <div key={todo.id} className='col-12 col-sm-6 col-md-4 col-lg-4'>
                <div
                  className="card border-0 shadow-sm h-100 p-3"
                  style={{ borderRadius: "24px" }} >
                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <span className={`badge rounded-pill px-3 py-2 ${todo.priority?.toLowerCase() === "high"
                      ? "bg-danger text-white"
                      : todo.priority?.toLowerCase() === "medium"
                        ? "bg-warning text-dark"
                        : "bg-success text-white"
                      }`}>
                      {todo.priority}
                    </span>
                    <small className='text-secondary'>
                      {todo.status}
                    </small>

                  </div>
                  <h4 className='fw-bold text-dark mb-3'>
                    {todo.title}
                  </h4>
                  <p className='text-secondary flex-grow-1'>
                    {todo.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4">

                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <small className='text-muted'>
                        Created At:
                      </small>

                      <small className='fw-semibold'>
                        {todo.created_at}
                      </small>

                    </div>

                    <div className="d-flex gap-2">

                      <button className='btn btn-primary w-100 rounded-4'>
                        Edit
                      </button>

                      <button className='btn btn-outline-danger w-100 rounded-4'>
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))
          ) : (
            <div className="col-12 text-center py-5">
              <div className="p-5 mx-auto text-secondary" style={{ maxWidth: "400px" }}>
                {/* FontAwesome ya Bootstrap ka koi bhi clipboard/box icon */}
                <i className="fa-regular fa-clipboard display-1 text-muted mb-4 d-block"></i>
                <h3 className="fw-bold text-dark mb-2">No Tasks Found</h3>
                <p className="text-muted small mb-0">
                  Aapka schedule bilkul saaf hai! Naya todo create karne ke liye upar diye gaye button par click karein.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Hero