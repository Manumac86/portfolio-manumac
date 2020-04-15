import React from 'react';
import './experience-layout.css';
import Media from 'react-bootstrap/Media';
import globantLogo from '../../images/globant.png';
import oneclickLogo from '../../images/oneclick.png';
import olapicLogo from '../../images/olapic.png';
import orangeLogo from '../../images/orange.png';
import '../../fontawesome-free-5.7.2-web/css/all.min.css';

function ExperienceLayout(){
  return (
    <div id="experience">
      <h2>Experience</h2>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3 d-none d-md-block"
          src={olapicLogo}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Olapic</h5>
          <p>
            <strong>FrontEnd Engineer</strong>.
            Since June '19 to actual. Córdoba Office.
          </p>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3 d-none d-md-block"
              src={olapicLogo}
              alt="Disney"
            />
            <Media.Body>
              <h5>Engineering</h5>
              <p>
                <strong>SSr. FrontEnd Engineer</strong> <br></br>
                Working on different business units projects for Olapic platform, mostly dedicated to integrations and media activations.
                The team applies Scrum Agile having daily meetings along with the client/cast members 
                as well as Sprint Planning and Retrospective meetings.
                Among different projects, delivery included: PHP, Javascript, Jquery, AngularJS, ReactJS, Python.
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
    </Media>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3 d-none d-md-block"
        src={globantLogo}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Globant</h5>
        <p>
          <strong>Web UI Developer</strong>.
          Since June '18 to June '19. Córdoba Capitalinas Site.
        </p>

        <Media>
          <img
            width={64}
            height={64}
            className="mr-3 d-none d-md-block"
            src={globantLogo}
            alt="Disney"
          />
          <Media.Body>
            <h5>Disney Parks and Resorts</h5>
            <p>
              <strong>Web UI Developer</strong> <br></br>  
              Working on different business units projects for Disney’s E-Commerce website 
              - lodging, tickets & annual passes, cart and checkout. 
              Dedicated to sustainment and minor new features development.
              The team applies Scrum Agile having daily meetings along with the client/cast members 
              as well as Sprint Planning and Retrospective meetings.Following good practices 
              and developing unit tests are a must. 
              At least a Continuous Integration tool like Jenkins was integrated to early detect avoidable 
              issues in each code release. Among different projects, delivery included: PHP Zend, 
              PHP Unit, Javascript, Jquery, AngularJS, Coffeescript, Karma, Mocha, CSS.
            </p>
          </Media.Body>
        </Media>
      </Media.Body>
    </Media>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3 d-none d-md-block"
        src={oneclickLogo}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>OneClick Store</h5>
        <p>
          <strong>Technical Service</strong>.
          Since Nov '15 to Jun '18. Córdoba Shopping Mall. <br></br>
          <a href="mailto:diegob@oneclickstore.com">Contact: Diego Benedetti</a> <br></br>
          <a href="http://oneclickstore.com.ar" target="_blanck">oneclickstore.com.ar</a>
        </p>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3 d-none d-md-block"
            src={oneclickLogo}
            alt="Disney"
          />
          <Media.Body>
            <h5>Technical Service Leader</h5>
            <p>
              Leading the Technical Service in Córdoba, and training technicians to get Apple Technical Certifications.
              Improve team working, task organization and Technical Sales.
              Working to improve quality Repair-Time, QOS, Customer Satisfaction and Response Time Apple Metrics with the team. 
            </p>
          </Media.Body>
        </Media>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3 d-none d-md-block"
              src={oneclickLogo}
              alt="Disney"
            />
            <Media.Body>
              <h5>Apple Certified Technician</h5>
              <p>
                  Technical Service for iPhone, iPad, Mac and Software related to Apple products. 
                  Working to reach quality Repair-Time, QOS, Customer Satisfaction and Response-Time Apple Metrics.
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
    </Media>
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3 d-none d-md-block"
        src={orangeLogo}
        alt="Generic placeholder"
      />
        <Media.Body>
          <h5>Freelance</h5>
          <p>
            <strong>Multimedia Designer and Developer</strong>.
            Since Nov '11 to actual. Independent Developer for OrangeTools fantasy brand.
              
          </p>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3 d-none d-md-block"
              src={orangeLogo}
              alt="Disney"
            />
            <Media.Body>
              <h5>Independent Projects</h5>
              <p>
                Develop Several Web and Graphic Design Projects, including small and medium clients, like Tarjeta Naranja, Ufo Zona Caliente, Destino Córdoba, among others.
                Most of the projects, included some of the following: 
              </p>
            </Media.Body>
          </Media>
          <ul className="experience-ul row ml-1">
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-html5"></i>HTML5</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-css3"></i>CSS3</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-css3"></i>CSS Grid Layout</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-css3"></i>CSS FlexBox</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-sass"></i>SASS</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fas fa-cube"></i>Webpack</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-js"></i>Javascript</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-react"></i>ReactJS</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-react"></i>NextJS</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fas fa-th"></i>Bootstrap</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fas fa-th"></i>ZURB Foundation</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-wordpress"></i>Wordpress</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fas fa-code-branch"></i>Git</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-bitbucket"></i>BitBucket</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-github"></i>GitHub</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fas fa-upload"></i>Deploy</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-adobe"></i>Adobe Photoshop</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-adobe"></i>Adobe XD</li>
            <li className="col-sm-3 col-md-2 text-left border-bottom border-primary rounded-right mr-3 mt-3"><i class="fab fa-adobe"></i>Adobe Illustrator</li>
          </ul>
        </Media.Body>
      </Media>
    </div>
  );
}
export default ExperienceLayout;