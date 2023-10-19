---
title: 'FAQ Accordion'
weight: 9
draft: false
---
To create new accordion item, just remember that you must change the accordion id, in this example the id is `accordionOne` , when you create a new item than you must change it.
```html
<div class="panel panel-default">
  <div class="panel-heading" id="headingOne" role="tab">
    <a href="#collapseOne">Why Should I choose Medical Health</a>
  </div>
  <div aria-labelledby="headingOne" class="panel-collapse collapse in" id="collapseOne" role="tabpanel">
    <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
      squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
      eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
      shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
      nesciunt you probably haven’t heard of them accusamus labore sustainable VHS. </div>
  </div>
</div>
```