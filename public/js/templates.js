angular.module("clientApp").run(["$templateCache", function($templateCache) {$templateCache.put("views/_resume.html","<div class=\"page contact-details\">\n  <img ng-cloak class=\"profile-img\" ng-src=\"{{ resume.picture }}\" ng-class=\"{ \'hidden\' : pictureHidden }\" ng-if=\"resume.picture\">\n\n  <h1><a href=\"#\" editable-text=\"resume.name\">{{ resume.name || \"Full name\" }}</a></h1>\n\n  <h2 class=\"title\"><a href=\"#\" editable-text=\"resume.title\">{{ resume.title || \"Title / position\" }}</a></h2>\n\n  <section class=\"summary-section\" ng-class=\"{ \'hidden\' : summaryHidden }\" ng-if=\"resume.summary.length\">\n    <button class=\"toggle-section\" ng-click=\"toggle(\'summaryHidden\')\">{{ booleanLabel(\'summaryHidden\') }}</button>\n\n    <h3 class=\"summary\" editable-textarea=\"resume.summary\"> {{ resume.summary }}</h3>\n  </section>\n\n  <h3 class=\"contact\"><a ng-href=\"mailto:{{resume.email}}\" editable-text=\"resume.email\">{{ resume.email || \"name@example.com\" }}</a></h3>\n\n  <h3 class=\"contact\"><a ng-href=\"tel:{{resume.phone}}\" editable-text=\"resume.phone\">{{ resume.phone || \"+1 123 456-7890\" }}</a></h3>\n\n  <h3 class=\"contact\"><a ng-href=\"http://maps.google.com/?q={{resume.address}}\" editable-text=\"resume.address\">{{ resume.address || \"123 Example St Toronto\" }}</a></h3>\n\n  <table class=\"contact-links\">\n    <tr ng-repeat=\"website in resume.websites\">\n      <th editable-text=\"website.name\">{{ website.name || \"Website Name\" }}</th>\n      <td>\n        <a ng-href=\"{{website.link}}\" editable-text=\"website.link\">{{ website.link || \"example.com\" }}</a>\n      </td>\n      <td class=\"hidden\"><button class=\"remove-button\" ng-click=\"removeWebsite(link)\">Remove</button></td>\n    </tr>\n  </table>\n\n  <button class=\"add-link\" ng-click=\"addWebsite()\">Add Link</button>\n</div>\n\n<div class=\"page work-history\" ng-class=\"{ \'hidden\' : workHidden }\">\n  <section ng-class=\"{ \'hidden\' : workHidden }\">\n    <button class=\"toggle-section\" ng-click=\"toggle(\'workHidden\')\">{{ booleanLabel(\'workHidden\') }}</button>\n\n    <h2 editable-text=\"workTitle\"> {{ workTitle || \'Work\' }}</h2>\n\n    <ol>\n      <li ng-repeat=\"job in resume.current_companies\">\n        <h4>\n          <span editable-text=\"job.title\">{{ job.title }}</span>\n          <em>{{ job.start_date | date : \'MMM y\' }} -</em>\n        </h4>\n\n        <h5 editable-text=\"job.company\">{{ job.company }}</h5>\n\n        <div class=\"description\">\n          <small editable-textarea=\"job.description_html\" ng-bind-html=\"job.description_html\"></small>\n        </div>\n      </li>\n\n      <li class=\"document-item\" ng-repeat=\"job in resume.past_companies\">\n        <h4>\n          <span editable-text=\"job.title\">{{ job.title }}</span>\n          <em>{{ job.start_date | date : \'MMM y\' }} - {{ job.end_date | date : \'MMM y\' }}</em>\n        </h4>\n\n        <h5 editable-text=\"job.company\">{{ job.company }}</h5>\n\n        <div class=\"description\">\n          <small editable-textarea=\"job.description_html\" ng-bind-html=\"job.description_html\"></small>\n        </div>\n      </li>\n    </ol>\n  </section>\n</div>\n\n<div class=\"page other-history\" ng-class=\"{ \'hidden\' : educationHidden && volunteeringHidden && skillsHidden }\">\n  <section ng-class=\"{ \'hidden\' : educationHidden }\" ng-if=\"resume.education.length\">\n    <button class=\"toggle-section\" ng-click=\"toggle(\'educationHidden\')\"> {{ booleanLabel(\'educationHidden\') }}</button>\n\n    <h2 editable-text=\"educationTitle\"> {{ educationTitle || \'Education\' }}</h2>\n\n    <ol>\n      <li ng-repeat=\"item in resume.education\">\n        <h4>\n          <span editable-text=\"item.degree\">{{ item.degree }}</span>\n          <em editable-text=\"item.period\">{{ item.period }}</em>\n        </h4>\n\n        <h5 editable-text=\"item.name\">{{ item.name }}</h5>\n\n        <div class=\"description\">\n          <small editable-textarea=\"item.description\" ng-bind-html=\"item.description\"></small>\n        </div>\n      </li>\n    </ol>\n  </section>\n\n  <section ng-class=\"{ \'hidden\' : volunteeringHidden }\" ng-if=\"resume.volunteering.length\">\n    <button class=\"toggle-section\" ng-click=\"toggle(\'volunteeringHidden\')\">{{ booleanLabel(\'volunteeringHidden\') }}</button>\n\n    <h2 editable-text=\"volunteeringTitle\"> {{ volunteeringTitle || \'Volunteering\' }}</h2>\n\n    <ol>\n      <li ng-repeat=\"item in resume.volunteering\">\n        <h4>\n          <span editable-text=\"item.title\">{{ item.title }}</span>\n          <em editable-text=\"item.period\">{{ item.period }}</em>\n        </h4>\n\n        <h5 editable-text=\"item.name\">{{ item.name }}</h5>\n\n        <div class=\"description\">\n          <small editable-textarea=\"item.description\" ng-bind-html=\"item.description\"></small>\n        </div>\n      </li>\n    </ol>\n  </section>\n\n  <section ng-class=\"{ \'hidden\' : skillsHidden }\" ng-if=\"resume.skills.length\">\n    <button class=\"toggle-section\" ng-click=\"toggle(\'skillsHidden\')\">{{ booleanLabel(\'skillsHidden\') }}</button>\n\n    <h2 editable-text=\"skillsTitle\"> {{ skillsTitle || \'Skills\' }}</h2>\n\n    <figure class=\"skills\">\n      <label ng-repeat=\"skill in resume.skills\" editable-text=\"skill\">{{ skill }}</label>\n    </figure>\n  </section>\n\n  <section ng-class=\"{ \'hidden\' : languagesHidden }\" ng-if=\"resume.languages.length\">\n    <button class=\"toggle-section\" ng-click=\"toggle(\'languagesHidden\')\">{{ booleanLabel(\'languagesHidden\') }}</button>\n\n    <h2 editable-text=\"languagesTitle\"> {{ languagesTitle || \'Languages\' }}</h2>\n\n    <ol class=\"inline\">\n      <li ng-repeat=\"item in resume.languages\">\n        <h4>\n          <span editable-text=\"item.language\">{{ item.language }}</span>\n        </h4>\n\n        <h5 editable-text=\"item.proficiency\">{{ item.proficiency }}</h5>\n      </li>\n    </ol>\n  </section>\n</div>\n\n<link id=\"pdf-css\" rel=\"stylesheet\" type=\"text/css\" href=\"/css/pdf.css\" />\n\n<style id=\"theme-css\" type=\"text/css\"> @page { margin: 20mm 0 20mm 0; } </style>\n\n<style type=\"text/css\">\n  .page { font-family: {{ bodyFont.name || \'Source Sans Pro\' }}; }\n\n  .page h1, .page h2, .page h3, .page h4 { font-family: {{ headingFont.name || \'Source Sans Pro\' }}; }\n</style>\n");
$templateCache.put("views/preview.html","<div class=\"preview\">\n  <form class=\"form\" ng-class=\"{ \'visible\' : designVisible }\" method=\"post\" action=\"http://resume-pdf-renderer.herokuapp.com/render\" ng-submit=\"prepareAndSubmitForm($event)\">\n    <input type=\"hidden\" name=\"html\" value=\"\" />\n    <input type=\"hidden\" name=\"include_custom_fonts\" value=\"true\" />\n\n    <a ui-sref=\"username\" class=\"button back-button\">Back</a>\n\n    <fieldset>\n      <legend>Design</legend>\n\n      <span class=\'button\' ng-class=\"{\'active\' : pictureHidden }\" ng-if=\"resume.picture\" ng-click=\"toggle(\'pictureHidden\')\">{{ booleanLabel(\'pictureHidden\') }} Profile Picture</span>\n\n      <div class=\"fields\">\n        <div class=\"form-field\">\n          <label>Heading Font</label>\n          <select ng-model=\"headingFont\" ng-options=\"option.name for option in fonts track by option.value\">\n            <option selected=\"selected\" value=\"\">Default</option>\n          </select>\n        </div>\n\n        <div class=\"form-field\">\n          <label>Body Font</label>\n          <select ng-model=\"bodyFont\" ng-options=\"option.name for option in fonts track by option.value\">\n            <option selected=\"selected\" value=\"\">Default</option>\n          </select>\n        </div>\n\n        <div class=\"form-field\">\n          <label>Theme</label>\n          <select ng-model=\"theme\" ng-change=\"togglePrintCss()\">\n            <option selected=\"selected\" value=\"\">Minimal</option>\n            <option value=\"condensed\">Condensed</option>\n          </select>\n        </div>\n      </div>\n    </fieldset>\n\n    <fieldset class=\"buttons\">\n      <button class=\"submit-button\" type=\"submit\">Generate PDF</button>\n      <button class=\"print-button\" onclick=\"event.preventDefault(); window.print()\">Print</button>\n    </fieldset>\n  </form>\n\n  <button class=\"toggle-form\" ng-click=\"toggle(\'designVisible\')\">\n    <span ng-if=\"!designVisible\">Edit / Generate</span>\n    <span ng-if=\"designVisible\">Close</span>\n  </button>\n\n  <div class=\"wrapper\">\n    <div class=\"resume\" ng-class=\"theme\" ng-include=\"\'views/_resume.html\'\"></div>\n  </div>\n</div>\n");
$templateCache.put("views/username.html","<div class=\"container\">\n  <svg class=\"logo\" style=\"enable-background:new 0 0 512 512;\" viewBox=\"0 0 512 512\" x=\"0px\" y=\"0px\">\n    <path d=\"M458.9,114.5c-11.1-15.1-26.6-32.8-43.6-49.9S380.6,32.1,365.4,21C339.7,2.2,327.2,0,320,0H72C49.9,0,32,17.9,32,40v432 c0,22.1,17.9,40,40,40h368c22.1,0,40-17.9,40-40V160C480,152.8,477.8,140.3,458.9,114.5z M392.7,87.3c15.4,15.3,27.4,29.2,36.3,40.7 h-77V51C363.5,59.9,377.3,72,392.7,87.3L392.7,87.3z M448,472c0,4.3-3.7,8-8,8H72c-4.3,0-8-3.7-8-8V40c0-4.3,3.7-8,8-8h248v112 c0,8.8,7.2,16,16,16h112V472z\"/>\n    <path d=\"M368,416H144c-8.8,0-16-7.2-16-16s7.2-16,16-16h224c8.8,0,16,7.2,16,16S376.8,416,368,416z\"/>\n    <path d=\"M368,352H144c-8.8,0-16-7.2-16-16s7.2-16,16-16h224c8.8,0,16,7.2,16,16S376.8,352,368,352z\"/>\n    <path d=\"M368,288H144c-8.8,0-16-7.2-16-16s7.2-16,16-16h224c8.8,0,16,7.2,16,16S376.8,288,368,288z\"/>\n    <path d=\"M237.5,189.5v8.6c-3.4,0.7-6.5,1.1-9.1,1.4c-2.6,0.2-5.2,0.3-7.6,0.3c-3.3,0-6.4-0.2-9.1-0.6c-2.7-0.4-5.1-1.1-7.2-2.2 c-2.1-1-3.8-2.5-5.2-4.4s-2.4-4.3-2.9-7.3l-4.5-22.9c-1.2-5.6-3.2-9.5-6-11.7c-2.9-2.2-7.2-3.3-12.9-3.3h-5.3c0,6.8,0,13.5,0,20.3 s0.1,13.5,0.3,20.3l14.3,1.6v8.6h-53.8v-8.6l14-1.6c0.2-7.1,0.3-14.3,0.3-21.5s0-14.5,0-21.8v-6c0-7.2,0-14.5,0-21.6 c0-7.2-0.1-14.4-0.3-21.6l-14-1.6v-8.6h53.8c13,0,23.1,2.5,30.3,7.6s10.8,12,10.8,20.9c0,2.8-0.4,5.6-1.3,8.5s-2.3,5.8-4.3,8.5 s-4.7,5.1-7.9,7.2c-3.3,2.1-7.3,3.8-12.2,5.1c5.5,1.6,10.1,4.3,13.6,8c3.6,3.7,6,8.7,7.2,14.9l4.7,22.1L237.5,189.5z M175.3,138 c4.4,0,8.1-0.6,11.1-1.8s5.5-2.8,7.4-4.8s3.3-4.4,4.1-7.2s1.3-5.7,1.3-8.8c0-6.9-1.9-12.1-5.7-15.5s-9.9-5.2-18.3-5.2H168 c-0.2,7.1-0.3,14.3-0.3,21.5s0,14.5,0,21.8H175.3z\"/>\n  </svg>\n\n  <h1>Resume Builder</h1>\n\n  <p>Enter your LinkedIn username below to build a stylish PDF resume from your public Linkedin Profile. <strong>No data entered is saved or used for any other purpose</strong>.</p>\n\n  <p><small>N.B. Not everything on LinkedIn is available on your public profile, but the data captured will be editable.</small></p>\n\n  <br/>\n\n  <form method=\"post\" ng-submit=\"submitUsername()\">\n    <label>Enter your LinkedIn username</label>\n\n    <div class=\"username-form\">\n      <span class=\"monospace\">http://linkedin.com/in/</span>\n      <input class=\"inline monospace\" ng-model=\"username\" ng-style=\"{ \'width\' : (username.length * .6) + \'em\' }\" placeholder=\"rowanhogan\" type=\"text\"></input>\n    </div>\n\n    <button ng-disabled=\"!username\" type=\"submit\">Start!</button>\n  </form>\n</div>\n");}]);