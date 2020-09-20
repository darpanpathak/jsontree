import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pgrove';
  jstring: any;
  data: any;
  isError = false;

  jsonChange(value) {
    setTimeout(() => {
      try {
        this.data = '';
        this.data = JSON.parse(value);
        this.isError = false;
      } catch {
        this.data = '';
        this.isError = true;
      }
    }, 50);

  }

  formatJson() {
    if (this.validateJson(this.jstring)) {
      const res = JSON.parse(this.jstring);
      this.jstring = JSON.stringify(res, null, 2);
    } else {
      alert('Invalid JSON');
    }
  }

  compactJson() {
    if (this.validateJson(this.jstring)) {
      this.jstring = JSON.stringify(JSON.parse(this.jstring));
    } else {
      alert('Invalid JSON');
    }
  }

  validateJson(val) {
    if (!val) {
      return false;
    }

    return JSON.parse(val);
  }
}
