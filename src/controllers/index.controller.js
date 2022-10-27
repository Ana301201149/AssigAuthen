const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
   res.render('index')
};

indexCtrl.renderAbout = (req, res) => {
   res.render('about')
};

indexCtrl.renderProjects = (req, res) => {
   res.render('projects')
};

indexCtrl.renderServices = (req, res) => {
   res.render('services')
};

indexCtrl.renderContact = (req, res) => {
   res.render('contact')
};

module.exports = indexCtrl;