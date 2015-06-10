# Letter Colored Avatar
Display first letter on color like Gmail do. Basic script to do quickly the job.

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