export interface PlayResult {
  type: string; // Type of event, e.g., "atBat"
  event: string; // Event description, e.g., "Strikeout"
  eventType: string; // Specific event type, e.g., "strikeout"
  description: string; // Full description of the event
  rbi: number; // Number of RBIs
  awayScore: number; // Away team score
  homeScore: number; // Home team score
  isOut: boolean; // Indicates if the play resulted in an out
}

export interface PlayAbout {
  atBatIndex: number; // Index of the at-bat
  halfInning: string; // "top" or "bottom" of the inning
  isTopInning: boolean; // Whether it’s the top inning
  inning: number; // Current inning number
  startTime: string; // Start time of the play (ISO string)
  endTime: string; // End time of the play (ISO string)
  isComplete: boolean; // Whether the play is complete
}

export interface Matchup {
  batter: {
    id: number; // Batter's ID
    fullName: string; // Batter's full name
  };
  pitcher: {
    id: number; // Pitcher's ID
    fullName: string; // Pitcher's full name
  };
}

export interface Play {
  result: PlayResult;
  about: PlayAbout;
  count: {
    balls: number; // Number of balls
    strikes: number; // Number of strikes
    outs: number; // Number of outs
  };
  matchup: Matchup;
}
