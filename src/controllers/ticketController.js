import ticketService from '../services/ticketService.js';
import { ticketDTO } from '../DTOs/ticketDTO.js';

export const createTicket = async (req, res) => {
  try {
    const ticket = await ticketService.createTicket(req.body);
    res.status(201).json(ticketDTO(ticket));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await ticketService.getAllTickets();
    res.status(200).json(tickets.map(ticketDTO));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await ticketService.getTicketById(id);
    res.status(200).json(ticketDTO(ticket));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
