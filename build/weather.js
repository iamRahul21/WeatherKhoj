"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeatherData = void 0;
const axios_1 = __importDefault(require("axios"));
const openweathermap_url = 'https://api.openweathermap.org/data/2.5/weather';
const API_key = '28a9c0c2a57a15fe55050ac0c927cbce';
function getWeatherData(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(openweathermap_url, {
                params: { lat, lon, appid: API_key, units: 'metric' },
            });
            return response.data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getWeatherData = getWeatherData;
