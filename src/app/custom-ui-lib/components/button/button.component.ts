import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() buttonClass: string = 'button-primary';
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
