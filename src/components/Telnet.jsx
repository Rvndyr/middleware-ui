import React from 'react'

const Telnet = () => {

const [formData, setFormData] = useState({
  name: '',
  email: '',
  age: '',
  message: ''
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData); // Output formData object to console

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id="name" type="text" className="validate" onChange={handleChange} />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" onChange={handleChange} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="age" type="number" className="validate" onChange={handleChange} />
              <label htmlFor="age">Age</label>
            </div>
            <div className="input-field col s6">
              <textarea id="message" className="materialize-textarea" onChange={handleChange}></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col s12" id="output"></div>
      </div>
    </div>
  )
}

export default Telnet