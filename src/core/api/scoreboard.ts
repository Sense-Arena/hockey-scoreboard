import { AX } from '../fetcher';
import { BaseResponse, ScoreboardData } from './types';

export const getScoreboard = async (): Promise<ScoreboardData> => {
  try {
    const { data } = await AX.get<BaseResponse<ScoreboardData>>('/v1/public/all_stars/standings');
    return {
      standings: data.standings,
    };
  } catch (error) {
    console.error(error);
    return {
      standings: {
        goalies: {
          recent: [],
          top: [],
        },
        players: {
          recent: [],
          top: [],
        },
      },
    };
  }
};
