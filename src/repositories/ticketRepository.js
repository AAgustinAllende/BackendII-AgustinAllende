import TicketDAO from '../DAO/ticketDAO.js';
import { v4 as uuidv4 } from 'uuid';

class TicketRepository {
  constructor() {
    this.ticketDAO = new TicketDAO();
  }

  async createTicket(amount, purchaser) {
    const code = uuidv4(); 
    const ticketDTO = {
      code,
      amount,
      purchaser
    };
    return await this.ticketDAO.create(ticketDTO);
  }

  async findTicketById(id) {
    return await this.ticketDAO.findById(id);
  }

  async findAllTickets() {
    return await this.ticketDAO.findAll();
  }
}

const uniqueId = uuidv4();
console.log(uniqueId);

export default TicketRepository;
