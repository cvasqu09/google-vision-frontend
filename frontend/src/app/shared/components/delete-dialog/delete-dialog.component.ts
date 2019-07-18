import { Component, Inject, Input, OnInit } from '@angular/core';
import { FirebaseItem } from '../../../modules/view/models/FirebaseItem';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: FirebaseItem) { }

  cancel() {
    this.dialogRef.close();
  }

}
