import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FirebaseItem } from '../../models/FirebaseItem';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../../../../shared/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.scss']
})
export class UploadViewComponent implements OnInit {
  @Input()
  items: FirebaseItem[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log('items', this.items);
  }

  showDeleteDialog(itemIndex: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: this.items[itemIndex]
    });
  }

}
