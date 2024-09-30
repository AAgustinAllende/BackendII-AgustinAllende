import Ticket from '../repositories/ticketRepository.js';

export const createTicketService = async (ticketData) => {
    return await Ticket.create(ticketData);
};

export const getAllTicketsService = async () => {
    return await Ticket.getAll();
};
