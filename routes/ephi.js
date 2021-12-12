import express from 'express';
import { createEphi, getAllEphi, getById, deleteEphi, updateEphi } from '../controllers/ephis.js';

const router = express.Router();
router.get('/', getAllEphi);
router.post('/', createEphi)
router.get('/:id', getById)
router.delete('/:id', deleteEphi)
router.patch('/:id', updateEphi)
export default router;
