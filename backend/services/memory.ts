import { IMemoryService } from "../interfaces/IMemoryService";
import { Card } from "../../sharedInterfaces/Card"

/**
 * each card has a state for its history and its weighting factors, using this class will allow you to run the memory algorithm on that individual unit (expressed as a card)
 */
export class MemoryService implements IMemoryService
{

    public isCardReady(card: Card): boolean 
    {
        throw new Error("Method not implemented.");
    }

    public setNextReady(card: Card): Card {
        throw new Error("Method not implemented.");
    }
    
}