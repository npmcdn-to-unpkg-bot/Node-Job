var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hao.c',
    jobs: [
      {
        "compmay" : "IBM",
        "title": "User Interface/JAVA developer",
        "pic": "images/jobs/IBM-logo.jpg",
        "location": "Ottawa",
        "description": "The Associate Partner (AP) in the Security Services Practice helps to lead the growth and management of all facets of the business. "
      },
      {
        "compmay" : "IBM",
        "title": "Business Development Executive - Testing",
        "pic": "images/jobs/IBM-logo.jpg",
        "location": "Ottawa",
        "description": "IBM Global Business Services: Join a Leader. Consult with us.IBM Global Business Services helps top-tier clients solve their most complex business and technical issues. As a Business Development Executive - Testing the candidate will deliver innovative business consulting, business process design, systems integration, and application design and management to leading sector organizations in 17 industries worldwide. "
      },
      {
        "compmay" : "IBM",
        "title": "Associate Partner - Ottawa",
        "pic": "images/jobs/IBM-logo.jpg",
        "location": "Ottawa",
        "description": "A sales leader Business Development Executive Testing is required to further develop and assist in closing our substantial testing opportunity pipeline. Working with our existing testing sales and delivery teams, the candidate will be primarily focused on clients. "
      },
      {
        "compmay": "IBM",
        "title": "Watson - Dialogue Test Specialist",
        "pic": "images/jobs/IBM-logo.jpg",
        "location": "Ottawa",
        "description": "A sales leader Business Development Executive Testing is required to further develop and assist in closing our substantial testing opportunity pipeline. "
      },
      {
        "compmay": "IBM",
        "title": "Mobile User Experience (UX) Designer",
        "pic": "images/jobs/IBM-logo.jpg",
        "location": "Ottawa",
        "description": "IBM Global Business Services: Join a Leader. Consult with us."
      },
      {
        "compmay" : "IBM",
        "title": "User Interface/JAVA developer",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "The Associate Partner (AP) in the Security Services Practice helps to lead the growth and management of all facets of the business. "
      },
      {
        "compmay" : "IBM",
        "title": "Business Development Executive - Testing",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "IBM Global Business Services: Join a Leader. Consult with us.IBM Global Business Services helps top-tier clients solve their most complex business and technical issues. As a Business Development Executive - Testing the candidate will deliver innovative business consulting, business process design, systems integration, and application design and management to leading sector organizations in 17 industries worldwide. "
      },
      {
        "compmay" : "IBM",
        "title": "Associate Partner - Ottawa",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "A sales leader Business Development Executive Testing is required to further develop and assist in closing our substantial testing opportunity pipeline. Working with our existing testing sales and delivery teams, the candidate will be primarily focused on clients. "
      },
      {
        "compmay": "IBM",
        "title": "Watson - Dialogue Test Specialist",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "A sales leader Business Development Executive Testing is required to further develop and assist in closing our substantial testing opportunity pipeline. "
      },
      {
        "compmay": "IBM",
        "title": "Mobile User Experience (UX) Designer",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "IBM Global Business Services: Join a Leader. Consult with us."
      },{
        "compmay" : "IBM",
        "title": "User Interface/JAVA developer",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "The Associate Partner (AP) in the Security Services Practice helps to lead the growth and management of all facets of the business. "
      },
      {
        "compmay" : "IBM",
        "title": "Business Development Executive - Testing",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "IBM Global Business Services: Join a Leader. Consult with us.IBM Global Business Services helps top-tier clients solve their most complex business and technical issues. As a Business Development Executive - Testing the candidate will deliver innovative business consulting, business process design, systems integration, and application design and management to leading sector organizations in 17 industries worldwide. "
      },
      {
        "compmay" : "IBM",
        "title": "Associate Partner - Ottawa",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "A sales leader Business Development Executive Testing is required to further develop and assist in closing our substantial testing opportunity pipeline. Working with our existing testing sales and delivery teams, the candidate will be primarily focused on clients. "
      },
      {
        "compmay": "IBM",
        "title": "Watson - Dialogue Test Specialist",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "A sales leader Business Development Executive Testing is required to further develop and assist in closing our substantial testing opportunity pipeline. "
      },
      {
        "compmay": "IBM",
        "title": "Mobile User Experience (UX) Designer",
        "pic": "images/jobs/IBM-logo.jpg",
        "description": "IBM Global Business Services: Join a Leader. Consult with us."
      },
    ]
  });
});

router.get('/about', function(req, res, next) {
  res.render('about')});

      module.exports = router;
