import { images } from "../Models/images"
const favourite=(data:images[])=>{
    const array=data.filter((elem)=>{
        return elem.favorited===true
    })
    
}
const isFav=(arr:any,value:string)=>{
   arr.find((o:any, i:number) => {
        if (o.id === value) {
            // arr[i] = { name: 'new string', value: 'this', other: 'that' };
            return true; // stop searching
        }
        return false
    }
   
    );
}

export {favourite,isFav}