export type TRoutesData = {
    routesData: TRoutesDataCollection[]
}

export type TRoutesDataCollection = {
    destination: string;
    displayName: string;
    comp: any;
}