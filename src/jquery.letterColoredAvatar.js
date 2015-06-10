(function($) {
    $.fn.letterColoredAvatar = function(params) {
        params = null;
        baseColors = [
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
                        '90a4ae'
        ];

        transformTextToColor: function(string) {
            num = 0;
            letters = 'string'.split('').forEach(function(entry) {
                num += entry.charCodeAt();
            });
            stringKey = num.substring(num.length, num.length - 2);

            if (stringKey > baseColors.length) {
                stringKey = stringKey.charAt(0)+stringKey.charAt(2);
            }

            return _this.baseColors[stringKey];
        },

        getColorFromString: function(string) {
            _this = this;
            return '#' + _this.transformTextToColor(string);
        }

        display: function(string) {
            _this = this;

            color = _this.getColorFromString(string);
            firstLetter = string.charAt(0);
        },

        init: function(params) {
            _this = this;
            _this.params = params;
        }
    };
})(jQuery);