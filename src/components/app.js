var React = require('react');

var projects = [
  {
    name: 'Knoword',
    description: 'Word game and educational tool',
    url: 'https://knoword.org'
  },
  {
    name: 'Pollenize',
    description: 'Election tool and political non-profit',
    url: 'http://pollenize.org'
  },
  {
    name: 'Fishsticss',
    description: 'CSS to LESS/SASS/SCSS conversion tool',
    url: 'http://fishsticss.com'
  }
];

var awards = [
  {
    name: 'Webby Awards',
    description: 'Honoree 2013, 2016' // 😡
  },
  {
    name: 'W3 Awards',
    description: 'Best in Show 2013'
  },
  {
    name: 'Awwwards',
    description: 'Site of the Day 2014; Honorable Mention 2015, 2016'
  },
  {
    name: 'Applied Arts',
    description: 'Best Digital Single 2014'
  }
];

var App = React.createClass({
  render: function() {
    return (
      <div className="tb-app">
        <div className="tb-app-header">
          <h1>Trevor Blades</h1>
          <h4>Web <em>developer</em> and <em>designer</em></h4>
        </div>
        <div className="tb-app-content">
          <h5>I make stuff</h5>
          <ul>
            {projects.map(function(project, index) {
              return (
                <li key={index}>
                  <h5>
                    <a href={project.url} target="_blank">{project.name}</a>
                  </h5>
                  <h6>{project.description}</h6>
                </li>
              );
            })}
          </ul>
          <h5>People like it</h5>
          <ul>
            {awards.map(function(award, index) {
              return (
                <li key={index}>
                  <h5>{award.name}</h5>
                  <h6>{award.description}</h6>
                </li>
              );
            })}
          </ul>
          <h5>Want to chat?</h5>
          <p>
            <span>Give me a shout on </span>
            <a href="https://twitter.com/trevorblades" target="_blank">Twitter</a>
            <span>, or get at me on </span>
            <a href="https://github.com/trevorblades" target="_blank">GitHub</a>
            <span> or </span>
            <a href="https://linkedin.com/in/trevorblades" target="_blank">LinkedIn</a>
            <span> or </span>
            <a href="https://facebook.com/tblades" target="_blank">Facebook</a>
            <span> or </span>
            <a href="mailto:email@trevorblades.com">something</a>
            <span>.</span>
          </p>
          <p>
            <span>Check out my crew, </span>
            <a href="http://reallyawesomedoings.com" target="_blank">Really Awesome Doings</a>
            <span>.</span>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = App;
