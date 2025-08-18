import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { userId, venueId, slotId, totalAmount } = req.body;
    
    const booking = await prisma.booking.create({
      data: {
        userId,
        venueId,
        slotId,
        totalAmount,
        status: 'PENDING'
      }
    });
    
    await prisma.slot.update({
      where: { id: slotId },
      data: { isAvailable: false }
    });
    
    res.json(booking);
  } catch (error) {
    res.status(400).json({ error: 'Booking failed' });
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.params.userId },
      include: {
        venue: true,
        slot: true
      },
      orderBy: { createdAt: 'desc' }
    });
    
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

export default router;
