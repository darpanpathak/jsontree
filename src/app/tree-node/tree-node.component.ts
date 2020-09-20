import { dataTypes } from './../shared/helper';
import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {

  @Input() nodes;

  readonly premitives = dataTypes.premitives;
  readonly nonpremitives = dataTypes.nonpremitives;

  constructor() { }

}
