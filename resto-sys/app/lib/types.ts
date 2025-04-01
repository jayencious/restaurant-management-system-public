interface UserData {
    id?: number;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
};

interface vegStartersData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface nonVegStartersData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface vegPlattersData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface nonVegPlattersData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface vegMainCourseData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface nonVegMainCourseData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface vegBiryaniData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface nonVegBiryaniData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface vegRiceData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface nonVegRiceData {
    id?: number;
    type: string;
    name: string;
    description: string;
    price: number;
};

interface rotisAndBreadsData {
    id?: number;
    name: string;
    description: string;
    price: number;
};

interface chaatsData {
    id?: number;
    name: string;
    description: string;
    price: number;
};

interface saladsData {
    id?: number;
    name: string;
    description: string;
    price: number;
};

interface raitasData {
    id?: number;
    name: string;
    description: string;
    price: number;
};

interface sweetDishesData {
    id?: number;
    name: string;
    description: string;
    price: number;
};

interface beveragesData {
    id?: number;
    name: string;
    description: string;
    price: number;
};

export type {
    UserData,
    vegStartersData,
    nonVegStartersData,
    vegPlattersData,
    nonVegPlattersData,
    vegMainCourseData,
    nonVegMainCourseData,
    vegBiryaniData,
    nonVegBiryaniData,
    vegRiceData,
    nonVegRiceData,
    rotisAndBreadsData,
    chaatsData,
    saladsData,
    raitasData,
    sweetDishesData,
    beveragesData
};