import { AuthLS } from "@/interfaces/auth/AuthLS";
import { Tournament } from "@/interfaces/Tournament";
import axios from "axios";


export const tournamentService = {
    async getTournaments(): Promise<Tournament[]> {
        try {
            const response = await axios.get<{ data: Tournament[] }>('/api/tournaments');
            return response.data.data;
        } catch (err) {
            console.error('Error fetching tournaments:', err);
            return [];
        }
    }
};

export default tournamentService;