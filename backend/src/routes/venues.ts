import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const venues = await prisma.venue.findMany({
      where: { isActive: true },
      include: {
        sports: true,
        reviews: {
          select: {
            rating: true
          }
        }
      }
    });
    
    res.json(venues);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch venues' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const venue = await prisma.venue.findUnique({
      where: { id: req.params.id },
      include: {
        sports: true,
        reviews: {
          include: {
            user: {
              select: {
                name: true
              }
            }
          }
        },
        slots: {
          where: {
            date: {
              gte: new Date()
            },
            isAvailable: true
          }
        }
      }
    });
    
    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }
    
    res.json(venue);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch venue' });
  }
});

export default router;
