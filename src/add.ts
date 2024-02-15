async function sleep(ms: number): Promise<void>
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function add(a: number, b: number) : Promise<number>
{
    const delay = 200;
    await sleep(delay);
    return a + b;
}

export {
    add,
    sleep
};
