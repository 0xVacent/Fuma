export interface UserInterface {
  id?: number;
  username: string;
  email: string;
  password: string;

  smoked: {
    cigarretes: number;
    handmade_cigarretes: number;
    cigars: number;
    vapes: number;
    weed: number;
    blunts: number;
    lavander: number;
  }

}
