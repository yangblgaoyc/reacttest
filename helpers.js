/**
 * Created by yangbolun on 2019/1/11.
 */
module.exports = {
    setup: function (hbs) {
        hbs.registerHelper('css', function(str, option) {
            var cssList = this.cssList || [];
            if(cssList.indexOf(str) < 0) {
                cssList.push(str);
            }
            this.cssList = cssList.concat();
        });

        hbs.registerHelper('js', function(str, option) {
            var jsList = this.jsList || [];
            if(jsList.indexOf(str) < 0) {
                jsList.push(str);
            }
            this.jsList = jsList.concat();
        });
    }
};
