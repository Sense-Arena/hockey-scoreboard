export type BaseResponse<T> = {
  message: 'success' | 'error';
} & T;

export type ScoreItem = {
  name: string;
  score: number;
  reaction_time: number;
};

export type ScoreboardData = {
  standings: {
    goalies: {
      top: ScoreItem[];
      recent: ScoreItem[];
    };
    players: {
      top: ScoreItem[];
      recent: ScoreItem[];
    };
  };
};
