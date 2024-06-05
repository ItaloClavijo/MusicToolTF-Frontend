import { Library } from "./Library"

export class Content {

    idContent: number = 0
    titleContent: string = ""
    descriptionContent: string  = ""
    priceContent: number = 0
    freeContent: boolean = false
    typeContent: string = ""
    fileContent: string = ""
    coverContent: string = ""
    libraryId?: Library = new Library

}