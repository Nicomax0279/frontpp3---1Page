export interface offer{
    id?:number;
    title:string;
    company:string;
    description:string;
    career:string;
    updated_at:string;
    text?:string;
    modality?:'presencial'|'hibrida'|"remoto";
}
