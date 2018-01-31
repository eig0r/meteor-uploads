// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

FlowRouter.route('/mainView', {
    name: 'mainView',
    action() {
        BlazeLayout.render("HomeLayout", {main: "mainView"});
    }
});

FlowRouter.route('/PgConnection', {
    name: 'PgConnection',
    action() {
        BlazeLayout.render("HomeLayout", {main: "PgConnection"});
    }
});

FlowRouter.route('/upload', {
    name: 'upload',
    action() {
        BlazeLayout.render("HomeLayout", {main: "upload"});
    }
});

FlowRouter.route('/MangmentReports', {
    name: 'mangmentReports',
    action() {
        BlazeLayout.render("HomeLayout", {main: "MangmentReports"});
    }
});

FlowRouter.route('/Notification', {
    name: 'Notification',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Notification"});
    }
});

FlowRouter.route('/Search', {
    name: 'search',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Search"});
    }
});



FlowRouter.route('/DownSites', {
    name: 'downSites',
    action() {
        BlazeLayout.render("HomeLayout", {main: "DownSites"});
    }
});

FlowRouter.route('/OneSite', {
    name: 'oneSite',
    action() {
        BlazeLayout.render("HomeLayout", {main: "OneSite"});
    }
});

FlowRouter.route('/AlarmActions', {
    name: 'alarmActions',
    action() {
        BlazeLayout.render("HomeLayout", {main: "AlarmActions"});
    }
});




FlowRouter.route('/SiteAccess', {
    name: 'siteAccess',
    action() {
        BlazeLayout.render("HomeLayout", {main: "SiteAccess"});
    }
});

FlowRouter.route('/Pending', {
    name: 'pending',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Pending"});
    }
});

FlowRouter.route('/ExceedSLA', {
    name: 'exceedSLA',
    action() {
        BlazeLayout.render("HomeLayout", {main: "ExceedSLA"});
    }
});

FlowRouter.route('/OpenAlarms', {
    name: 'OpenAlarms',
    action() {
        BlazeLayout.render("HomeLayout", {main: "OpenAlarms"});
    }
});

FlowRouter.route('/OctoberOffice', {
    name: 'octoberOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "OctoberOffice"});
    }
});

FlowRouter.route('/MohandsenOffice', {
    name: 'mohandsenOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "MohandsenOffice"});
    }
});

FlowRouter.route('/GisrSuezOffice', {
    name: 'gisSuezOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "GisrSuezOffice"});
    }
});

FlowRouter.route('/NewCairoOffice', {
    name: 'newCairoOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "NewCairoOffice"});
    }
});
FlowRouter.route('/ShoubraOffice', {
    name: 'shoubraOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "ShoubraOffice"});
    }
});

FlowRouter.route('/MaadieOffice', {
    name: 'maadieOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "MaadieOffice"});
    }
});

FlowRouter.route('/NasrCityOffice', {
    name: 'nasrCityOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "NasrCityOffice"});
    }
});

FlowRouter.route('/SendMail', {
    name: 'SendMail',
    action() {
        BlazeLayout.render("HomeLayout", {main: "SendMail"});
    }
});

FlowRouter.route('/Setting', {
    name: 'setting',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Setting"});
    }
});
