import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillEye, AiTwotoneEyeInvisible } from 'react-icons/ai'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../actions/userActions'
import Loader from '../../components/Loader/Loader'
const Register = () => {
  const dispatch = useDispatch();
  const registerState = useSelector(state => state.registerUserReducer)
  console.log(registerState);
  const { success, loading, error } = registerState;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[2].value !== e.target[3].value) {
      alert("Passwords entered does not match");
    }
    else {
      const user = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
      }
      console.log(user)
      dispatch(registerUser(user))
      if (loading === false) {
        if (success) {
          alert("User successfully registered");
          navigate("/login")
        }
        else {
          alert("Error in registering user. Try again")
        }
      }
      else {
        <div>

          <Loader />
        </div>
      }
    }

  }
  const navigate = useNavigate();
  const [see, setSee] = useState(false)
  const [csee, setcSee] = useState(false)

  return (
    <div className='register'>
      <div className="registerContainer">
        <h2
          style={{
            marginBottom: "2rem"
          }}
        >Register</h2>
        <form action="" className='registerForm' onSubmit={handleSubmit}>
          <input type="text"
            placeholder='Name'
            className='nameinp'
          />

          <input type="email"
            placeholder='Email'
            className='emailinp'
          />
          <div className="pass">
            <input type={see ? "text" : "password"}
              placeholder='Password'
              className='passinp'

            />
            <span
              onClick={() => {
                setSee(!see)
              }}
              style={{
                fontSize: "20px"
              }}
            >{see ? <AiTwotoneEyeInvisible /> : <AiFillEye />}</span>
          </div>
          <div className="pass">
            <input type={csee ? "text" : "password"}
              placeholder='Confirm Password'
              className='passinp'

            />
            <span
              onClick={() => {
                setcSee(!csee)
              }}
              style={{
                fontSize: "20px"
              }}
            >{csee ? <AiTwotoneEyeInvisible /> : <AiFillEye />}</span>
          </div>
          <button className='registerButton'>Register</button>
        </form>
        <p>Already have an account? <span
          style={{
            color: "blue",
            cursor: "pointer"

          }}
          onClick={() => {
            navigate("/login")
          }}
        >Login!!</span></p>
      </div>
    </div>
  )
}

export default Register