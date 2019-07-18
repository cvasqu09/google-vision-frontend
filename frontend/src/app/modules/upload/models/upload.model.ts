export class Upload {
  file: File;
  name: string;

  constructor(file: File) {
    this.file = file;
    this.name = file.name;
  }
}
