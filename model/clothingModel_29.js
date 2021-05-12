const db = require('../utils/database');

const clothing_29= class clothing_29{
    constructor(id,name,cat_id,price,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price=price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    //READ
    static fetchAll(){
        return db.execute('SELECT * from clothing_29');
    }
    static fetchProductByCategory(cid){
        return db.execute('SELECT * from clothing_29 where cat_id =?',[cid]);

    }

}
module.exports =clothing_29;