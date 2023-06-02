"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/tutor', (req, res) => {
    res.json({ message: 'GET /tutor' });
});
router.post('/tutor', (req, res) => {
    res.json({ message: 'POST /tutor' });
});
router.put('/tutor/:id', (req, res) => {
    res.json({ message: 'PUT /tutor/:id' });
});
exports.default = router;
