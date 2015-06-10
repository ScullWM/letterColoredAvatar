# Letter Colored Avatar
Display first letter on color like Gmail do. Basic script to do quickly the job.
![capture d ecran 2015-06-10 23 42 27](https://cloud.githubusercontent.com/assets/1017746/8094968/b44b4fe0-0fca-11e5-83e8-ee7fbbaaa158.png)


## Usage
Basic usage of the script:

Create a author block:
```
<div class="authorAvatar" data-name="Thomas P."></div>
<div class="authorAvatar" data-name="thomas@scullwm.com"></div>
<div class="authorAvatar" data-name="Jean Paul"></div>
```

Basic style to adapt for your case (no background color here) :
```
div.authorAvatar {
    width: 48px;
    height: 48px;
    display:table-cell;
    vertical-align:middle;
    text-align: center;
    color: white;
    font-weight: 100;
    line-height: 48px;
    font-size: 40px;
}
```

Transform your author block:
```
$('.authorAvatar').each(function(){
    coloredAvatar = letterColoredAvatar.display($(this).data('name'));
    $(this).css('background', coloredAvatar.color);
    $(this).text(coloredAvatar.firstLetter);
});
```