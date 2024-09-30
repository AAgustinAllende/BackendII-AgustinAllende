export class TicketDTO {
    constructor(ticket) {
      this.id = ticket._id;
      this.code = ticket.code;
      this.purchaseDateTime = ticket.purchase_datetime;
      this.amount = ticket.amount;
      this.purchaser = ticket.purchaser;
    }
  }
  