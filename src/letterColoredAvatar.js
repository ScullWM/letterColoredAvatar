var letterColoredAvatar = function() {
    params = null;
    baseColors = [
                    '808080',
                    'CBA179',
                    'e57373',
                    'f06292',
                    'ba68c8',
                    '9575cd',
                    '7986cb',
                    '64b5f6',
                    '4fc3f7',
                    '4dd0e1',
                    '4db6ac',
                    '81c784',
                    'aed581',
                    'ff8a65',
                    'd4e157',
                    'ffd54f',
                    'ffb74d',
                    'a1887f',
                    '90a4ae',
                    '00408d',
    ];

    return {
        transformTextToColor: function (string){
            _this = this;
            num = 0;
            letters = string.split('');
            initialNbreOfLetter = letters.length;

            for (var i = 0; i < letters.length; i++) {
                num += letters[i].charCodeAt();
            };
            num  = (num+letters.length*2).toString();
            stringKey = num.substring(num.length, num.length - 2);

            if (parseInt(stringKey) > baseColors.length) {
                stringKey = stringKey.toString();
                stringKey = stringKey.charAt(0)+stringKey.charAt(2);
            }

            chosenColor = baseColors[parseInt(stringKey)];
            formula     = '-0.' + parseInt(initialNbreOfLetter.toString().charAt(1)/3);

            return _this.shade(chosenColor, parseFloat(formula));
        },

        shade: function(hex, lum) {

            // validate hex string
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            lum = lum || 0;

            // convert to decimal and change luminosity
            var rgb = "", c, i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i*2,2), 16);
                c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
                rgb += ("00"+c).substr(c.length);
            }

            return rgb;
        },

        getColorFromString: function (string){
            _this = this;
            return '#' + _this.transformTextToColor(string);
        },

        display: function(string){
            _this = this;

            color = _this.getColorFromString(string);
            firstLetter = string.charAt(0);

            return {'color': color, 'firstLetter': firstLetter};
        },

        init: function (params){
            _this = this;
            _this.params = params;
        }
    };
}();