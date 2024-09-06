
import express from 'express';
import dotenv from 'dotenv';
import http from 'http'; 
import { Server as socketIO } from 'socket.io'; 
import connectDB from './config/db.js'; 
import cors from 'cors';

// Import models
import Media from './models/Media.js';

// Route files
import authRoutes from './routes/authRoutes.js';
import culturalSiteRoutes from './routes/culturalSiteRoutes.js';
import mediaRoutes from './routes/mediaRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import admin from './routes/admin.js';
// import paymentRoutes from './routes/payment.js'
import article from './routes/articleRoutes.js';
import faqRoutes from './routes/faq.js'
import bookingRoutes from './routes/booking.js'
import legalContentRoutes from './routes/legalcontent.js'
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE', // Allow these methods
  allowedHeaders: 'Content-Type,Authorization',
}));

// Mount routers
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/culturalsites', culturalSiteRoutes);
app.use('/api/v1/media', mediaRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/admin', admin);
app.use('/api/v1/articles', article);
// app.use('/api/payments', paymentRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/legal', legalContentRoutes);


// Create an HTTP server and integrate with socket.io
const server = http.createServer(app);
const io = new socketIO(server, {
  cors: {
    origin: 'http://localhost:3000', // Allow this origin to connect
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');


  socket.on('likeMedia', async ({ mediaId, userId }) => {
    try {
      const media = await Media.findById(mediaId);
      if (media) {
        // Check if the user has already liked the media
        const hasLiked = media.userLiked.includes(userId);
  
        if (hasLiked) {
          // User has already liked this media, so remove the like
          media.likes -= 1;
          media.userLiked = media.userLiked.filter(id => id !== userId);
        } else {
          // User has not liked this media yet, so add the like
          media.likes += 1;
          media.userLiked.push(userId);
        }
  
        await media.save();
        io.emit('mediaUpdated', media); // Notify all clients
      }
    } catch (error) {
      console.error('Error handling media like:', error);
    }
  });
  
  // Handle comment event
socket.on('commentOnMedia', async ({ mediaId, comment, userId }) => {
  try {
    const media = await Media.findById(mediaId);
    if (media) {
      media.comments.push({ text: comment.text, date: new Date(), userId });
      await media.save();
      io.emit('mediaUpdated', media); // Notify all clients
    }
  } catch (error) {
    console.error('Error commenting on media:', error);
  }
});


  // Handle share event
  socket.on('shareMedia', async (mediaId) => {
    try {
      const media = await Media.findById(mediaId);
      if (media) {
        media.shares += 1;
        await media.save();
        io.emit('mediaUpdated', media); // Notify all clients
      }
    } catch (error) {
      console.error('Error sharing media:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

export { server, io };
