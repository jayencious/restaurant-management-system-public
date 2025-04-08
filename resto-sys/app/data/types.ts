// This file contains the type definitions for our data.
// It is used to describe the structure of data.
// It is also used to specify what data type each property should accept.

export type UserData = {
    id?: number;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
};

export type vegStartersData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type nonVegStartersData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type vegPlattersData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type nonVegPlattersData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type vegMainCourseData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type nonVegMainCourseData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type vegBiryaniData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type nonVegBiryaniData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type vegRiceData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type nonVegRiceData = {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

export type rotisAndBreadsData = {
    id?: number;
    name: string;
    description: string;
    price: number;
};

export type chaatsData = {
    id?: number;
    name: string;
    description: string;
    price: number;
};

export type saladsData = {
    id?: number;
    name: string;
    description: string;
    price: number;
};

export type raitasData = {
    id?: number;
    name: string;
    description: string;
    price: number;
};

export type sweetDishesData = {
    id?: number;
    name: string;
    description: string;
    price: number;
};

export type beveragesData = {
    id?: number;
    name: string;
    description: string;
    price: number;
};