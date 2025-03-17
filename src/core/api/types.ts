export type BaseResponse<T> = {
  message: 'success' | 'error';
} & T;

export type ScoreItem = {
  name: string;
  position: number;
  score_1: number;
  score_2: number;
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
