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
exports.getCityCoordinates = void 0;
const axios_1 = __importDefault(require("axios"));
const openstreetmap_url = 'https://nominatim.openstreetmap.org/search';
function getCityCoordinates(cityName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(openstreetmap_url, {
                params: { q: cityName, format: 'json' },
            });
            if (!response.data || response.data.length === 0) {
                return null;
            }
            const { lat, lon } = response.data[0];
            return { lat, lon };
        }
        catch (error) {
            throw error;
        }
    });
}
exports.getCityCoordinates = getCityCoordinates;
