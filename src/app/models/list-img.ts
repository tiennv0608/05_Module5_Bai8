export class ListImg {
  // @ts-ignore
  private listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  getListImage() {
    return this.listImage;
  }

  setListImage(value: string[]) {
    this.listImage = value;
  }

  getImgByIndex(index: number) {
    return this.listImage[index];
  }

  getLength(): number {
    return this.listImage.length;
  }
}
