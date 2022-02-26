export interface IPatientSituation {
    id?: string;
    situation?: string;
    examination?: string;
    desease?: string;
    recovery?: number;
    tests: number;
    firstName?: string;
    lastName?: string;
}