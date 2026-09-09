import { useState } from 'react';


function Registration() {
     const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: ''
    });
  };
  return (
    <section className="section">
      <div className="section-center">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required value={formData.name}
              onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required value={formData.name}
              onChange={handleChange} />
          </div>
          
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required value={formData.name}
              onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required value={formData.name}
              onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required value={formData.name}
              onChange={handleChange}/>
          </div>
          
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
};

export default Registration