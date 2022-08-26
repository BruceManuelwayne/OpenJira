interface SeedData{

    Entries: SeedEntry[]; 
    
}

interface SeedEntry{

    description: string;
    status: string;
    createdAt: number;    
}

export const seedData: SeedData = {
    Entries: [
        {
            
            description: 'In- Progress: Loren dolor duis elit sunt quie dolo laburom',
            status: 'in-progress',
            createdAt: Date.now(),
        },
        {
           
            description: 'Pendiente: whwhowhowohw hello',
            status: 'pending',
            createdAt: Date.now()- 100000,
        },
        {
            
            description: 'Finished: fua fua faurtum',
            status: 'finished',
            createdAt: Date.now() - 1000000,
        },
    ]
}