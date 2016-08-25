import { Component } from '@angular/core';
@Component({
  selector: 'nav-block',
  template: `
  <div id="navblock" style="background-image: none;">
    <ul id="nav">
        <li class="nav1 ">
            <a href="#">Admin</a>
            <ul>
                <li><a href="#">Role</a></li>
                <li><a href="#">Form</a></li>
                <li><a href="#">Workflow</a></li>
                <li><a href="#">Keyword</a></li>
            </ul>
        </li>
    </ul>
    <div class="navspace"></div>
</div>
`
})
export class AppComponent { }