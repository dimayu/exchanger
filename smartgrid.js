let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '16px',
    mobileFirst: false,
    container: {
        maxWidth: '1200px',
        fields: '120px'
    },
    breakPoints: {
        lm: {
            width: '1280px',
            fields: '50px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '800px',
            fields: '25px'
        },
        xxs: {
            width: '620px',
            fields: '25px'
        },
        xs: {
            width: '480px',
            fields: '14px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
