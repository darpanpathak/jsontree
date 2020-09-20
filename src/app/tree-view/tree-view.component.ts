import { dataTypes } from './../shared/helper';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit, OnChanges {

  @Input() data: any;
  key: string;
  arr = [];
  @Input() title = null;
  @Input() className = '';
  isVisible = false;
  @Input() keyLength = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildTree();
  }

  ngOnInit() {
  }

  buildTree() {
    console.log(this.data, this.keyLength);

    if (dataTypes.premitives.includes(typeof this.data) || this.data === null) {
      this.key = '';
      const ctype = this.data === null ? 'string' : typeof this.data;
      this.arr.push({ key: this.key, type: typeof this.data, val: this.data });
    } else {
      this.key = 'object';
      const keys = Object.keys(this.data);
      this.keyLength = keys.length;

      // tslint:disable-next-line: forin
      for (const key in this.data) {
          const innerKeys = (typeof this.data[key] === 'object' && this.data[key] !== null) ? Object.keys(this.data[key]).length : 0;
          this.arr.push({ key, type: typeof this.data[key], val: this.data[key], keyLength: innerKeys });
      }

    }
  }

  toggleView($event) {
    this.isVisible = !this.isVisible;
    $event.stopPropagation();
  }

}
