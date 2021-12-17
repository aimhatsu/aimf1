export class GraphModel {
    data:   Datum[];
    layout: Layout;
}

export interface Datum {
    y:         number[];
    x:         number[];
    z:         number[];
    text: string[];
    labels: string[];
    type:      string;
    hoverinfo: string;
    hovermode:string
 line: Line
    marker:    Marker;
    mode : string;
    showlegend: Boolean
}

export interface Marker {
    size:    number;
    symbol:  string;
    line:    Line;
    opacity: number;
    color: string;
    sizemode: string;
}

export interface Line {
    width: number;
}

export interface Layout {
    autosize: boolean;
    scene:    Scene;
    margin:any,
    width:any,
    height:any
    hovermode: string;
    hoverdistance: number,
}

export interface Scene {
    xaxis:       Xaxis;
 
}

export interface Aspectratio {
    x: number;
    y: number;
    z: number;
}

export interface Xaxis {
    autorange: string;
}