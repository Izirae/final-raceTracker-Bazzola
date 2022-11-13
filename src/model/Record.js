class Record {
  constructor(id, title, image, address, coords, date, category, time, user_id) {
    this.id = id.toString();
    this.title = title;
    this.image = image;
    this.address = address;
    this.coords = coords;
    this.date = date;
    this.category = category;
    this.time = time;
    this.user_id = user_id;
  }
}

export default Record;