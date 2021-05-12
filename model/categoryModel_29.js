const db = require('../utils/database');

const Category_29= class Category_29{
    constructor(id,name,size,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //READ
    static fetchAll(){
        return db.execute('SELECT * from category_29');
    }

}
module.exports =Category_29;