export interface Board{
    id?: number;
    title: string;
    content: string;
    created?: string;
    updated?: string;
    user?: UserBoardData;
}
export interface UserBoardData {
    email?: string;
    password?: string;
    username?: string;
    created?: string;
    updated?: string;
  }

export interface BoardInPutDTO{ //post할때 받는거 !!
    id?: number;
    title: string;
    content: string;
    created?: string;
    updated?: string;
    user?: UserBoardData;
}

export interface userUniqueSearchInput {
    id : number;
}


