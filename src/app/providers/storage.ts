import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class StorageProvider {
    constructor() {
    }

    getLiastInStorage() {
        let array_list = JSON.parse(localStorage.getItem('wordList'));
        return array_list;
    }

    addNewWordInStorage(newItem: any) {
        //{hy,en,hy_list,en_list}
        newItem.create_date=new Date();
        let array_list = this.getLiastInStorage();
        array_list = array_list ? array_list : [];
        array_list.unshift(newItem);
        var newList = JSON.stringify(array_list);
        localStorage.setItem('wordList', newList);
        console.log('new list is ' + newList);
    }
   updateWordInStorage(i,item){
       let array_list = this.getLiastInStorage();
       array_list[i]['hy']=item['hy']
       array_list[i]['en']=item['en']
       var newList = JSON.stringify(array_list);
       localStorage.setItem('wordList', newList);
   }

    hide(i) {
        let array_list = this.getLiastInStorage();
        let hode_array_list = JSON.parse(localStorage.getItem('hideWordList'));
        hode_array_list = hode_array_list ? hode_array_list : [];
        hode_array_list.unshift(array_list[i]);

        array_list.splice(i, 1);
        var newList = JSON.stringify(array_list);
        localStorage.setItem('wordList', newList);
        return array_list;
    }

    remove(i) {
        let array_list = this.getLiastInStorage();
        array_list.splice(i, 1);
        var newList = JSON.stringify(array_list);
        localStorage.setItem('wordList', newList);
        return array_list;
    }

}
