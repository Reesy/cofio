import { IMemoryService } from "../interfaces/IMemoryService";
import { Card } from "../../sharedInterfaces/Card"

/**
 * each card has a state for its history and its weighting factors, using this class will allow you to run the memory algorithm on that individual unit (expressed as a card)
 */
export class MemoryService implements IMemoryService
{
    private EFactor: number;
    //This will pass in the variables needed by the memoryservice, currently using the SM2 algorithm
    /**
     * @param _efactor default value of 2.5 following SM2 heuristic. 
     */
    constructor(_efactor: number = 2.5)
    {
        this.EFactor = _efactor;
    }

    public calculateCard(_card: Card, correct: boolean): Card 
    {
        
        /**
         *  ==========  steps ==========
         *  heuristic           = 1
         *  heuristic           = 2
         *  6 - 1 = 5 * 2.5     = 12.5 
         *  13 - 1 = 12 * 2.5   = 30
         *  30 - 1 = 29 * 2.5   = 72.5
         *  73 - 1 = 72 * 2.5   = 180
         *  180 - 1 = 179 * 2.5 = 447.5
         *  448 - 1 = 447 * 2.5 = 1117.5
            ============================
         */

        let card = _card; 

        if (!correct)
        {
            card.interval = _card.interval * 0.7; 

            return card;
        }

        if (_card.interval === 1 && correct === true)
        {
            card.interval = 2;
        }
        else if (_card.interval === 2 && correct === true)
        {
            card.interval = 6;
        }
        else
        {
            card.interval = (_card.interval - 1) * 2.5;
        };

        return card;

    }
   
}