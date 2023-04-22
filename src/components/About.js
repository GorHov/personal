import avatar from '../assets/img/header-img.png'
import '../App.css'

export const About = () => {
  return (
    <section className="skill">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow flex">
              <div className='avatar'>
                  <img src={avatar} alt="avatar"/>
              </div>
              <div className='text'>
                <h2>Summary</h2>
                <p className='summary'>I am a React developer with 4+ years of experience, I have developed expertise in building web applications using React, a popular JavaScript library for building user interfaces. I am well-versed in HTML, CSS, and JavaScript and have experience with front-end technologies like Redux, React Router, and Axios. I am also familiar with back-end technologies such as Node.js and Express.js which are commonly used with React.I have a strong understanding of React's core concepts such as components, props, state, and lifecycle methods. With my 4+ years of experience, I have the ability to work collaboratively with a team and deliver quality products in a timely manner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};