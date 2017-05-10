import request from 'request';
import fs from 'fs';


class Vehicle{
    name:string;
}

const car=new Vehicle();
car.name="Corolla";

console.log(car);