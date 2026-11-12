class Booking {
  constructor(clientName, email, phone, date, sessionType, message) {
    this.clientName = clientName;
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.sessionType = sessionType;
    this.message = message;
    this.status = 'pending';
    this.createdAt = new Date();
  }

  isValidDate() {
    const selectedDate = new Date(this.date);
    const today = new Date();
    return selectedDate > today;
  }
}

export default Booking;
