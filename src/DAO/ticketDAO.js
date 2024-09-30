import Ticket from '../models/Ticket.js';

class TicketDAO {
  async createTicket(ticketData) {
    const ticket = new Ticket(ticketData);
    return await ticket.save();
  }

  async getTicketById(id) {
    return await Ticket.findById(id);
  }

  async getAllTickets() {
    return await Ticket.find();
  }
}

export default new TicketDAO();
