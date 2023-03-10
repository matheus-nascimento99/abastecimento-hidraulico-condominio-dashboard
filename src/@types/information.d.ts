export interface Informations {
    model:string,
    imei:string,
    vehicle?: null,
    statusSignal: string,
    gpsDate: Date,
    processedGpsDate:Date,
    digitalAcc: boolean,
    digitalInputs: number[] | null[] | [],
    analogInputs: number[] | null[] | [],
    digitalOutputs: number[] | null[] | [],
    analogOutputs: number[] | null[] | [],
    fenceConfig:{
        radio:{
            inside: boolean,
            name: string,
            IOFence: "I" | "O" | ""
        },
        polygon:{
            inside: boolean,
            name: string,
            IOFence: "I" | "O" | ""
        }
    },
    geolocation: {
        type:string,
        coordinates:[number, number]
    },
    connected: boolean,
    speed:number,
    course:number,
    signal:number,
    power:number,
    fuel:{
        level: number,
        temperature: number
    }[],
    mileage:number,
    tripMileage:number,
    horimeter:number,
    altitude:number,
    RFID:string,
    CCID:string,
    iButton:string,
    temperature:{
        id: string,
        temperature: number
    }[],
    voltage:number,
    satellites:number,
    MCC: number,
    MNC: string,
    LAC: number,
    cellID: number,
    IMSI:number
}