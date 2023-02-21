function returnVoid(message: string): void{
    console.log(message);
    return undefined;
}

const r = returnVoid('리턴이 없다.')