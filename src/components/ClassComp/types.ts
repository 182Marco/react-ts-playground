import { User } from "../../models/mainModels";

export interface ClassCompState {
    showUsers: boolean;
    moreState: string;
    searched: string;
}


export interface PropsType {
    users: User[]
}