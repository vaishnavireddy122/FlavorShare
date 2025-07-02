import Dexie , {type Table} from "dexie";

export interface Recipe {
    id?: number;
    title : string;
    link: string;
    ingredients : string[];
    steps : string;
    imgUrl : string;
    createdAt : Date;
}

class RecipeDb extends Dexie {
    recipes !: Table<Recipe , number>;

    constructor(){
        super('flavourshareDB');
        this.version(1).stores({
            recipes: '++id , title , createdAt'
        });
    }
}

export const db = new RecipeDb();