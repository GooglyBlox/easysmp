export interface Player {
    uuid: string;
    name_clean: string;
  }
  
  export interface ServerStatusData {
    online: boolean;
    players: {
      online: number;
      max: number;
      list: Player[];
    };
    version: {
      name_clean: string;
    };
    motd: {
      clean: string;
    };
  }