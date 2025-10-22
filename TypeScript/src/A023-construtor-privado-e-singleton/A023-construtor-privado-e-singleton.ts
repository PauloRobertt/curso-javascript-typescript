class Database{
    private static database:Database;

    private constructor(private host:string,private user:string, private password:string){};

    connect(): void{
        console.log(`DataBase conectada: ${this.host},${this.user},${this.password}`);
    }

    static getDatabase(host:string,user:string,password:string):Database{
        if(Database.database) {
            console.log('Database já conectada!')
            return Database.database;
        }
        console.log('Database criada')
        Database.database = new Database(host,user,password);
        return Database.database;
    }
}

const db1 = Database.getDatabase('host', 'user', 'password');
db1.connect();
const db2 = Database.getDatabase('host2', 'user2', 'password2')
db2.connect()
