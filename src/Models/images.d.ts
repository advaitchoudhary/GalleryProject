interface dimension{
    height:number,
    width:number
}
interface  sharedWith{
    id: string,
    name: string,
    avatar: string
}
export interface images{
    id:string,
    url: string,
    filename: string,
    description: string,
    uploadedBy: string,
    createdAt: string,
    updatedAt: string,
    dimensions: dimension,
    resolution: dimension,
    sizeInBytes: any,
    sharedWith: sharedWith[],
    favorited: boolean
}